window.AutoComponents = window.AutoComponents || {};

(function (C) {
  'use strict';

  /**
   * Render filter panel HTML
   * @returns {string} HTML string
   */
  C.renderFilters = function () {
    const brands = window.AUTO_DATA.brands || [];
    const categories = window.AUTO_DATA.categories || [];
    const cars = window.AUTO_DATA.cars || [];

    // Get unique countries
    const countries = [...new Set(cars.map(function (c) { return c.country; }))].sort();

    // Get unique engine types (simplified)
    const engineTypes = [...new Set(cars.map(function (c) {
      if (c.engine.includes('Hybrid') || c.engine.includes('электромотор')) return 'Гибрид/Электро';
      if (c.engine.includes('V12')) return 'V12';
      if (c.engine.includes('V10')) return 'V10';
      if (c.engine.includes('V8')) return 'V8';
      if (c.engine.includes('V6')) return 'V6';
      if (c.engine.includes('W16')) return 'W16';
      if (c.engine.includes('W12')) return 'W12';
      if (c.engine.includes('Flat-6')) return 'Flat-6';
      return 'Другое';
    }))].sort();

    // Get unique years
    const years = [...new Set(cars.map(function (c) { return c.year; }))].sort((a, b) => a - b);

    // Availability options
    const availabilityOptions = [
      { value: 'available', label: '✅ В продаже' },
      { value: 'dealer', label: '🟢 У дилеров' },
      { value: 'limited', label: '🟡 Ограниченная серия' },
      { value: 'discontinued', label: '🔴 Производство завершено' }
    ];

    return (
      '<div class="filters-panel">' +
        '<div class="filters-panel__grid">' +
          '<div class="filter-group">' +
            '<label class="filter-group__label" for="filter-search">Поиск</label>' +
            '<input type="text" id="filter-search" class="filter-input" placeholder="Название, бренд…" />' +
          '</div>' +
          '<div class="filter-group">' +
            '<label class="filter-group__label" for="filter-brand">Бренд</label>' +
            '<select id="filter-brand" class="filter-select">' +
              '<option value="">Все бренды</option>' +
              brands.map(function (b) { return '<option value="' + b.id + '">' + b.name + '</option>'; }).join('') +
            '</select>' +
          '</div>' +
          '<div class="filter-group">' +
            '<label class="filter-group__label" for="filter-category">Категория</label>' +
            '<select id="filter-category" class="filter-select">' +
              '<option value="">Все категории</option>' +
              categories.map(function (c) { return '<option value="' + c.id + '">' + c.name + '</option>'; }).join('') +
            '</select>' +
          '</div>' +
          '<div class="filter-group">' +
            '<label class="filter-group__label" for="filter-country">Страна</label>' +
            '<select id="filter-country" class="filter-select">' +
              '<option value="">Все страны</option>' +
              countries.map(function (c) { return '<option value="' + c + '">' + c + '</option>'; }).join('') +
            '</select>' +
          '</div>' +
          '<div class="filter-group">' +
            '<label class="filter-group__label" for="filter-engine">Двигатель</label>' +
            '<select id="filter-engine" class="filter-select">' +
              '<option value="">Все двигатели</option>' +
              engineTypes.map(function (e) { return '<option value="' + e + '">' + e + '</option>'; }).join('') +
            '</select>' +
          '</div>' +
          '<div class="filter-group">' +
            '<label class="filter-group__label" for="filter-year">Год выпуска</label>' +
            '<select id="filter-year" class="filter-select">' +
              '<option value="">Все годы</option>' +
              years.map(function (y) { return '<option value="' + y + '">' + y + '</option>'; }).join('') +
            '</select>' +
          '</div>' +
          '<div class="filter-group">' +
            '<label class="filter-group__label" for="filter-availability">Наличие</label>' +
            '<select id="filter-availability" class="filter-select">' +
              '<option value="">Любое</option>' +
              availabilityOptions.map(function (a) { return '<option value="' + a.value + '">' + a.label + '</option>'; }).join('') +
            '</select>' +
          '</div>' +
          '<div class="filter-group">' +
            '<label class="filter-group__label">Макс. скорость</label>' +
            '<div class="range-slider">' +
              '<div class="range-slider__values"><span id="speed-min-label">0</span><span id="speed-max-label">500+</span></div>' +
              '<input type="range" id="filter-speed" min="0" max="500" value="500" step="10" />' +
            '</div>' +
          '</div>' +
          '<div class="filter-group">' +
            '<label class="filter-group__label">Макс. цена (USD)</label>' +
            '<div class="range-slider">' +
              '<div class="range-slider__values"><span id="price-min-label">$0</span><span id="price-max-label">$70 млн</span></div>' +
              '<input type="range" id="filter-price" min="0" max="70000000" value="70000000" step="100000" />' +
            '</div>' +
          '</div>' +
        '</div>' +
        '<div class="filters-panel__actions">' +
          '<span class="filters-panel__count" id="filter-count"></span>' +
          '<div style="display:flex; gap:0.5rem; flex-wrap:wrap;">' +
            '<button class="btn btn--ghost btn--sm" id="filter-reset">Сбросить</button>' +
            '<button class="btn btn--accent btn--sm" id="filter-apply">Применить</button>' +
          '</div>' +
        '</div>' +
      '</div>'
    );
  };

  /**
   * Initialize filters
   * @param {HTMLElement} container - Container element
   * @param {Function} onFilter - Callback when filters change
   */
  C.initFilters = function (container, onFilter) {
    if (!container) return;

    const searchInput = container.querySelector('#filter-search');
    const brandSelect = container.querySelector('#filter-brand');
    const categorySelect = container.querySelector('#filter-category');
    const countrySelect = container.querySelector('#filter-country');
    const engineSelect = container.querySelector('#filter-engine');
    const yearSelect = container.querySelector('#filter-year');
    const availabilitySelect = container.querySelector('#filter-availability');
    const speedRange = container.querySelector('#filter-speed');
    const priceRange = container.querySelector('#filter-price');
    const speedMinLabel = container.querySelector('#speed-min-label');
    const speedMaxLabel = container.querySelector('#speed-max-label');
    const priceMinLabel = container.querySelector('#price-min-label');
    const priceMaxLabel = container.querySelector('#price-max-label');
    const resetBtn = container.querySelector('#filter-reset');
    const applyBtn = container.querySelector('#filter-apply');
    const countEl = container.querySelector('#filter-count');

    function getFilters() {
      return {
        search: searchInput ? searchInput.value.trim().toLowerCase() : '',
        brand: brandSelect ? brandSelect.value : '',
        category: categorySelect ? categorySelect.value : '',
        country: countrySelect ? countrySelect.value : '',
        engine: engineSelect ? engineSelect.value : '',
        year: yearSelect ? yearSelect.value : '',
        availability: availabilitySelect ? availabilitySelect.value : '',
        maxSpeed: speedRange ? parseInt(speedRange.value, 10) : 500,
        maxPrice: priceRange ? parseInt(priceRange.value, 10) : 70000000
      };
    }

    function updateLabels() {
      if (speedRange && speedMaxLabel) {
        speedMaxLabel.textContent = speedRange.value + '+';
      }
      if (priceRange && priceMaxLabel) {
        const val = parseInt(priceRange.value, 10);
        priceMaxLabel.textContent = window.AutoUtils.formatUSD(val);
      }
    }

    function applyFilters() {
      const filters = getFilters();
      if (onFilter) onFilter(filters);
    }

    // Range input updates
    if (speedRange) {
      speedRange.addEventListener('input', updateLabels);
    }
    if (priceRange) {
      priceRange.addEventListener('input', updateLabels);
    }

    // Apply button
    if (applyBtn) {
      applyBtn.addEventListener('click', applyFilters);
    }

    // Reset button
    if (resetBtn) {
      resetBtn.addEventListener('click', function () {
        if (searchInput) searchInput.value = '';
        if (brandSelect) brandSelect.value = '';
        if (categorySelect) categorySelect.value = '';
        if (countrySelect) countrySelect.value = '';
        if (engineSelect) engineSelect.value = '';
        if (yearSelect) yearSelect.value = '';
        if (availabilitySelect) availabilitySelect.value = '';
        if (speedRange) speedRange.value = '500';
        if (priceRange) priceRange.value = '70000000';
        updateLabels();
        applyFilters();
      });
    }

    // Enter key on search
    if (searchInput) {
      searchInput.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') applyFilters();
      });
    }

    // Update count
    C.updateFilterCount = function (count) {
      if (countEl) {
        countEl.textContent = 'Найдено: ' + count + ' автомобилей';
      }
    };

    updateLabels();
  };
})(window.AutoComponents);