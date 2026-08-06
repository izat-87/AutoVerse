window.AutoPages = window.AutoPages || {};

(function (P) {
  'use strict';

  /**
   * Render catalog page
   * @param {Object} params - URL params { q, brand, category }
   * @returns {string} HTML string
   */
  P.renderCatalog = function (params) {
    params = params || {};
    const cars = window.AUTO_DATA.cars || [];
    const brands = window.AUTO_DATA.brands || [];
    const categories = window.AUTO_DATA.categories || [];

    // Sidebar categories
    const categoryLinks = categories.map(function (cat) {
      const count = cars.filter(function (c) { return c.category === cat.id; }).length;
      const active = params.category === cat.id ? ' is-active' : '';
      return (
        '<a href="#/category/' + cat.id + '" class="catalog-sidebar__link' + active + '" data-link="/category/' + cat.id + '">' +
          '<span>' + cat.icon + ' ' + cat.name + '</span>' +
          '<span class="catalog-sidebar__count">' + count + '</span>' +
        '</a>'
      );
    }).join('');

    // Sidebar brands
    const brandLinks = brands.map(function (b) {
      const count = cars.filter(function (c) { return c.brandId === b.id; }).length;
      const active = params.brand === b.id ? ' is-active' : '';
      return (
        '<a href="#/brand/' + b.id + '" class="catalog-sidebar__link' + active + '" data-link="/brand/' + b.id + '">' +
          '<span>' + b.name + '</span>' +
          '<span class="catalog-sidebar__count">' + count + '</span>' +
        '</a>'
      );
    }).join('');

    return (
      '<div class="catalog-page">' +
        '<div class="page-hero">' +
          '<div class="container">' +
            '<div class="page-hero__content">' +
              '<div class="page-hero__eyebrow">Каталог</div>' +
              '<h1 class="page-hero__title">Каталог автомобилей</h1>' +
              '<p class="page-hero__desc">Исследуйте полный каталог легендарных автомобилей. Используйте фильтры для точного поиска.</p>' +
            '</div>' +
          '</div>' +
        '</div>' +
        '<div class="container">' +
          '<div class="catalog-layout">' +
            '<aside class="catalog-sidebar">' +
              '<div class="catalog-sidebar__section">' +
                '<h3 class="catalog-sidebar__title">Категории</h3>' +
                '<div class="catalog-sidebar__list">' +
                  '<a href="#/catalog" class="catalog-sidebar__link' + (!params.category ? ' is-active' : '') + '" data-link="/catalog">' +
                    '<span>Все категории</span>' +
                    '<span class="catalog-sidebar__count">' + cars.length + '</span>' +
                  '</a>' +
                  categoryLinks +
                '</div>' +
              '</div>' +
              '<div class="catalog-sidebar__section">' +
                '<h3 class="catalog-sidebar__title">Бренды</h3>' +
                '<div class="catalog-sidebar__list">' +
                  '<a href="#/catalog" class="catalog-sidebar__link' + (!params.brand ? ' is-active' : '') + '" data-link="/catalog">' +
                    '<span>Все бренды</span>' +
                    '<span class="catalog-sidebar__count">' + cars.length + '</span>' +
                  '</a>' +
                  brandLinks +
                '</div>' +
              '</div>' +
            '</aside>' +
            '<div class="catalog-main">' +
              '<div id="catalog-filters"></div>' +
              '<div class="catalog-toolbar">' +
                '<span class="catalog-toolbar__count" id="catalog-count"></span>' +
                '<div class="catalog-toolbar__sort">' +
                  '<label class="catalog-toolbar__label" for="catalog-sort">Сортировка:</label>' +
                  '<select id="catalog-sort" class="filter-select" style="width:auto;">' +
                    '<option value="popular">По популярности</option>' +
                    '<option value="price-asc">Цена: по возрастанию</option>' +
                    '<option value="price-desc">Цена: по убыванию</option>' +
                    '<option value="speed-desc">Скорость: по убыванию</option>' +
                    '<option value="year-desc">Год: новые</option>' +
                    '<option value="year-asc">Год: старые</option>' +
                  '</select>' +
                '</div>' +
              '</div>' +
              '<div class="car-grid" id="catalog-grid"></div>' +
              '<div class="pagination" id="catalog-pagination"></div>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>'
    );
  };

  /**
   * Initialize catalog page
   * @param {HTMLElement} container - Container element
   * @param {Object} params - URL params
   */
  P.initCatalog = function (container, params) {
    if (!container) return;
    params = params || {};

    const cars = window.AUTO_DATA.cars || [];
    const brands = window.AUTO_DATA.brands || [];
    const categories = window.AUTO_DATA.categories || [];
    const filtersContainer = container.querySelector('#catalog-filters');
    const grid = container.querySelector('#catalog-grid');
    const countEl = container.querySelector('#catalog-count');
    const sortSelect = container.querySelector('#catalog-sort');
    const paginationEl = container.querySelector('#catalog-pagination');

    const PER_PAGE = 9;
    let currentPage = 1;
    let currentFilters = {
      search: params.q || '',
      brand: params.brand || '',
      category: params.category || '',
      country: '',
      engine: '',
      year: '',
      availability: '',
      maxSpeed: 500,
      maxPrice: 70000000
    };

    // Render filters
    if (filtersContainer) {
      filtersContainer.innerHTML = window.AutoComponents.renderFilters();
      window.AutoComponents.initFilters(filtersContainer, function (filters) {
        currentFilters = filters;
        currentPage = 1;
        renderResults();
      });

      // Set initial search value from URL
      const searchInput = filtersContainer.querySelector('#filter-search');
      if (searchInput && params.q) {
        searchInput.value = params.q;
      }
    }

    // Sort
    if (sortSelect) {
      sortSelect.addEventListener('change', function () {
        currentPage = 1;
        renderResults();
      });
    }

    // Sidebar links
    container.querySelectorAll('.catalog-sidebar__link[data-link]').forEach(function (link) {
      link.addEventListener('click', function () {
        const href = link.getAttribute('data-link');
        if (href) window.location.hash = '#' + href;
      });
    });

    function filterCars() {
      let result = cars.filter(function (car) {
        const brand = brands.find(function (b) { return b.id === car.brandId; });
        const category = categories.find(function (c) { return c.id === car.category; });

        // Search
        if (currentFilters.search) {
          const q = currentFilters.search.toLowerCase();
          const searchable = [
            car.name,
            brand ? brand.name : '',
            category ? category.name : '',
            car.country,
            String(car.year),
            car.engine
          ].join(' ').toLowerCase();
          if (!searchable.includes(q)) return false;
        }

        // Brand
        if (currentFilters.brand && car.brandId !== currentFilters.brand) return false;

        // Category
        if (currentFilters.category && car.category !== currentFilters.category) return false;

        // Country
        if (currentFilters.country && car.country !== currentFilters.country) return false;

        // Engine
        if (currentFilters.engine) {
          const engineType = getEngineType(car.engine);
          if (engineType !== currentFilters.engine) return false;
        }

        // Year
        if (currentFilters.year && String(car.year) !== currentFilters.year) return false;

        // Availability
        if (currentFilters.availability && car.availability !== currentFilters.availability) return false;

        // Max speed
        if (car.topSpeed > currentFilters.maxSpeed) return false;

        // Max price
        if (car.price.usd > currentFilters.maxPrice) return false;

        return true;
      });

      // Sort
      const sortValue = sortSelect ? sortSelect.value : 'popular';
      switch (sortValue) {
        case 'price-asc':
          result.sort(function (a, b) { return a.price.usd - b.price.usd; });
          break;
        case 'price-desc':
          result.sort(function (a, b) { return b.price.usd - a.price.usd; });
          break;
        case 'speed-desc':
          result.sort(function (a, b) { return b.topSpeed - a.topSpeed; });
          break;
        case 'year-desc':
          result.sort(function (a, b) { return b.year - a.year; });
          break;
        case 'year-asc':
          result.sort(function (a, b) { return a.year - b.year; });
          break;
        default:
          result.sort(function (a, b) { return b.popularity - a.popularity; });
      }

      return result;
    }

    function getEngineType(engine) {
      if (engine.includes('Hybrid') || engine.includes('электромотор')) return 'Гибрид/Электро';
      if (engine.includes('V12')) return 'V12';
      if (engine.includes('V10')) return 'V10';
      if (engine.includes('V8')) return 'V8';
      if (engine.includes('V6')) return 'V6';
      if (engine.includes('W16')) return 'W16';
      if (engine.includes('W12')) return 'W12';
      if (engine.includes('Flat-6')) return 'Flat-6';
      return 'Другое';
    }

    function renderResults() {
      const filtered = filterCars();
      const totalPages = Math.ceil(filtered.length / PER_PAGE);
      const start = (currentPage - 1) * PER_PAGE;
      const pageCars = filtered.slice(start, start + PER_PAGE);

      // Update count
      if (countEl) {
        countEl.innerHTML = 'Найдено: <strong>' + filtered.length + '</strong> автомобилей';
      }

      // Update filter count
      if (window.AutoComponents.updateFilterCount) {
        window.AutoComponents.updateFilterCount(filtered.length);
      }

      // Render grid
      if (grid) {
        if (pageCars.length === 0) {
          grid.innerHTML = (
            '<div class="empty-state" style="grid-column: 1/-1;">' +
              '<div class="empty-state__icon">' +
                '<svg viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2"/><path d="M20 20L16.5 16.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>' +
              '</div>' +
              '<h3 class="empty-state__title">Ничего не найдено</h3>' +
              '<p class="empty-state__desc">Попробуйте изменить параметры поиска или сбросить фильтры.</p>' +
              '<button class="btn btn--accent" id="empty-reset">Сбросить фильтры</button>' +
            '</div>'
          );
          const resetBtn = grid.querySelector('#empty-reset');
          if (resetBtn) {
            resetBtn.addEventListener('click', function () {
              const resetBtnEl = filtersContainer.querySelector('#filter-reset');
              if (resetBtnEl) resetBtnEl.click();
            });
          }
        } else {
          grid.innerHTML = pageCars.map(function (car) {
            return window.AutoComponents.renderCarCard(car);
          }).join('');
          window.AutoComponents.initCarCards(grid);
        }
      }

      // Render pagination
      if (paginationEl) {
        if (totalPages <= 1) {
          paginationEl.innerHTML = '';
        } else {
          let html = '';
          if (currentPage > 1) {
            html += '<button class="pagination__btn" data-page="' + (currentPage - 1) + '">←</button>';
          }
          for (let i = 1; i <= totalPages; i++) {
            if (i === 1 || i === totalPages || Math.abs(i - currentPage) <= 1) {
              html += '<button class="pagination__btn' + (i === currentPage ? ' is-active' : '') + '" data-page="' + i + '">' + i + '</button>';
            } else if (Math.abs(i - currentPage) === 2) {
              html += '<span class="pagination__btn" style="pointer-events:none;">…</span>';
            }
          }
          if (currentPage < totalPages) {
            html += '<button class="pagination__btn" data-page="' + (currentPage + 1) + '">→</button>';
          }
          paginationEl.innerHTML = html;

          paginationEl.querySelectorAll('[data-page]').forEach(function (btn) {
            btn.addEventListener('click', function () {
              currentPage = parseInt(btn.getAttribute('data-page'), 10);
              renderResults();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            });
          });
        }
      }
    }

    renderResults();
  };
})(window.AutoPages);