window.AutoComponents = window.AutoComponents || {};

(function (C) {
  'use strict';

  const COMPARE_KEY = 'autoverse_compare';

  /**
   * Get compare list from localStorage
   * @returns {Array<string>} Array of car IDs
   */
  C.getCompare = function () {
    try {
      const data = localStorage.getItem(COMPARE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  };

  /**
   * Toggle a car in compare list
   * @param {string} carId - Car ID
   * @returns {boolean} True if added, false if removed
   */
  C.toggleCompare = function (carId) {
    const compare = C.getCompare();
    const index = compare.indexOf(carId);
    let added = false;

    if (index === -1) {
      if (compare.length >= 3) {
        C.showToast('Максимум 3 автомобиля для сравнения', 'warning');
        return false;
      }
      compare.push(carId);
      added = true;
    } else {
      compare.splice(index, 1);
    }

    try {
      localStorage.setItem(COMPARE_KEY, JSON.stringify(compare));
    } catch (e) {
      // Storage might be full
    }

    return added;
  };

  /**
   * Clear compare list
   */
  C.clearCompare = function () {
    try {
      localStorage.removeItem(COMPARE_KEY);
    } catch (e) {
      // Storage might be unavailable
    }
  };

  /**
   * Render compare bar
   * @returns {string} HTML string
   */
  C.renderCompareBar = function () {
    const compare = C.getCompare();
    const cars = window.AUTO_DATA.cars || [];

    if (compare.length === 0) return '';

    const compareCars = cars.filter(function (c) { return compare.includes(c.id); });

    return (
      '<div class="compare-bar" id="compare-bar">' +
        '<div class="container compare-bar__inner">' +
          '<div class="compare-bar__items">' +
            compareCars.map(function (car) {
              const img = car.image || (window.AutoComponents.generateCarImage ? window.AutoComponents.generateCarImage(car, { width: 100, height: 60 }) : '');
              return (
                '<div class="compare-bar__item" data-compare-item="' + car.id + '">' +
                  '<img src="' + img + '" alt="' + car.name + '" class="compare-bar__img" />' +
                  '<span class="compare-bar__name">' + car.name + '</span>' +
                  '<button class="compare-bar__remove" data-compare-remove="' + car.id + '" aria-label="Убрать">×</button>' +
                '</div>'
              );
            }).join('') +
          '</div>' +
          '<div class="compare-bar__actions">' +
            '<a href="#/compare" class="btn btn--accent btn--sm" data-link="/compare">Сравнить</a>' +
            '<button class="btn btn--ghost btn--sm" id="compare-clear">Очистить</button>' +
          '</div>' +
        '</div>' +
      '</div>'
    );
  };

  /**
   * Initialize compare bar
   * @param {HTMLElement} container - Container element
   */
  C.initCompareBar = function (container) {
    if (!container) return;

    // Remove buttons
    container.querySelectorAll('[data-compare-remove]').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        const carId = btn.getAttribute('data-compare-remove');
        C.toggleCompare(carId);
        window.location.reload();
      });
    });

    // Clear button
    const clearBtn = container.querySelector('#compare-clear');
    if (clearBtn) {
      clearBtn.addEventListener('click', function () {
        C.clearCompare();
        window.location.reload();
      });
    }
  };

  /**
   * Render compare page
   * @returns {string} HTML string
   */
  C.renderComparePage = function () {
    const compare = C.getCompare();
    const cars = window.AUTO_DATA.cars || [];
    const brands = window.AUTO_DATA.brands || [];
    const categories = window.AUTO_DATA.categories || [];

    if (compare.length === 0) {
      return (
        '<div class="page-hero">' +
          '<div class="container">' +
            '<div class="page-hero__content">' +
              '<div class="page-hero__eyebrow">Сравнение</div>' +
              '<h1 class="page-hero__title">Сравнение автомобилей</h1>' +
              '<p class="page-hero__desc">Добавьте до 3 автомобилей для сравнения, нажимая на кнопку «Сравнить» в карточке.</p>' +
            '</div>' +
          '</div>' +
        '</div>' +
        '<div class="container">' +
          '<div class="favorites-empty">' +
            '<div class="favorites-empty__icon">⚖️</div>' +
            '<h2 class="favorites-empty__title">Нет автомобилей для сравнения</h2>' +
            '<p class="favorites-empty__desc">Добавьте автомобили в сравнение, чтобы увидеть их характеристики рядом.</p>' +
            '<a href="#/catalog" class="btn btn--accent" data-link="/catalog">Перейти в каталог</a>' +
          '</div>' +
        '</div>'
      );
    }

    const compareCars = cars.filter(function (c) { return compare.includes(c.id); });

    const specs = [
      { key: 'power', label: 'Мощность', format: function (v) { return v + ' л.с.'; } },
      { key: 'topSpeed', label: 'Макс. скорость', format: function (v) { return v + ' км/ч'; } },
      { key: 'acceleration', label: '0-100 км/ч', format: function (v) { return v + ' сек'; } },
      { key: 'year', label: 'Год выпуска', format: function (v) { return v; } },
      { key: 'weight', label: 'Вес', format: function (v) { return window.AutoUtils.formatNumber(v) + ' кг'; } },
      { key: 'engine', label: 'Двигатель', format: function (v) { return v; } },
      { key: 'transmission', label: 'Коробка', format: function (v) { return v; } },
      { key: 'drive', label: 'Привод', format: function (v) { return v; } },
      { key: 'fuelConsumption', label: 'Расход', format: function (v) { return v; } }
    ];

    return (
      '<div class="compare-page">' +
        '<div class="page-hero">' +
          '<div class="container">' +
            '<div class="page-hero__content">' +
              '<div class="page-hero__eyebrow">Сравнение</div>' +
              '<h1 class="page-hero__title">Сравнение автомобилей</h1>' +
              '<p class="page-hero__desc">Сравните характеристики выбранных автомобилей.</p>' +
            '</div>' +
          '</div>' +
        '</div>' +
        '<div class="container">' +
          '<div class="car-detail__section">' +
            '<table class="comparison-table">' +
              '<thead>' +
                '<tr>' +
                  '<th>Характеристика</th>' +
                  compareCars.map(function (car) {
                    const brand = brands.find(function (b) { return b.id === car.brandId; });
                    const category = categories.find(function (c) { return c.id === car.category; });
                    const img = car.image || (window.AutoComponents.generateCarImage ? window.AutoComponents.generateCarImage(car, { width: 200, height: 120 }) : '');
                    return (
                      '<th>' +
                        '<img src="' + img + '" alt="' + car.name + '" style="width:100%; border-radius:8px; margin-bottom:8px;" />' +
                        '<div style="font-size: var(--fs-small);">' + (brand ? brand.name + ' ' : '') + car.name + '</div>' +
                        '<div style="font-size: var(--fs-xs); color: var(--text-muted); margin-top:4px;">' + (category ? category.name : '') + '</div>' +
                        '<div style="font-size: var(--fs-xs); color: var(--accent); margin-top:4px;">' + window.AutoUtils.formatUSD(car.price.usd) + '</div>' +
                      '</th>'
                    );
                  }).join('') +
                '</tr>' +
              '</thead>' +
              '<tbody>' +
                specs.map(function (spec) {
                  return (
                    '<tr>' +
                      '<td>' + spec.label + '</td>' +
                      compareCars.map(function (car) {
                        return '<td>' + spec.format(car[spec.key]) + '</td>';
                      }).join('') +
                    '</tr>'
                  );
                }).join('') +
                '<tr>' +
                  '<td>Цена (EUR)</td>' +
                  compareCars.map(function (car) {
                    return '<td>' + window.AutoUtils.formatEUR(car.price.eur) + '</td>';
                  }).join('') +
                '</tr>' +
                '<tr>' +
                  '<td>Наличие</td>' +
                  compareCars.map(function (car) {
                    const avail = window.AutoUtils.getAvailability(car.availability);
                    return '<td>' + avail.icon + ' ' + avail.label.replace(/^[^\s]+\s/, '') + '</td>';
                  }).join('') +
                '</tr>' +
              '</tbody>' +
            '</table>' +
          '</div>' +
          '<div style="text-align:center; margin-top: var(--sp-md);">' +
            '<button class="btn btn--ghost" id="compare-page-clear">Очистить сравнение</button>' +
          '</div>' +
        '</div>' +
      '</div>'
    );
  };

  /**
   * Initialize compare page
   * @param {HTMLElement} container - Container element
   */
  C.initComparePage = function (container) {
    if (!container) return;
    const clearBtn = container.querySelector('#compare-page-clear');
    if (clearBtn) {
      clearBtn.addEventListener('click', function () {
        C.clearCompare();
        window.location.hash = '#/catalog';
      });
    }
  };
})(window.AutoComponents);