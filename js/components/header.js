window.AutoComponents = window.AutoComponents || {};

(function (C) {
  'use strict';

  /**
   * Initialize header behavior (scroll, mobile menu, search)
   */
  C.initHeader = function () {
    const header = document.getElementById('site-header');
    const burger = document.getElementById('burger');
    const nav = document.getElementById('main-nav');
    const searchToggle = document.querySelectorAll('.js-search-toggle');
    const searchOverlay = document.getElementById('search-overlay');
    const searchInput = document.getElementById('global-search');
    const searchBtn = document.getElementById('global-search-btn');
    const suggestions = document.getElementById('search-suggestions');

    // Scroll effect
    window.addEventListener('scroll', function () {
      if (window.scrollY > 20) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    }, { passive: true });

    // Mobile menu
    if (burger && nav) {
      burger.addEventListener('click', function () {
        const isOpen = nav.classList.toggle('is-open');
        burger.classList.toggle('is-open', isOpen);
        burger.setAttribute('aria-expanded', isOpen);
        document.body.classList.toggle('lock-scroll', isOpen);
      });

      // Close menu on link click
      nav.addEventListener('click', function (e) {
        if (e.target.closest('a')) {
          nav.classList.remove('is-open');
          burger.classList.remove('is-open');
          burger.setAttribute('aria-expanded', 'false');
          document.body.classList.remove('lock-scroll');
        }
      });
    }

    // Search overlay
    if (searchToggle.length && searchOverlay) {
      searchToggle.forEach(function (btn) {
        btn.addEventListener('click', function () {
          const isOpen = searchOverlay.classList.toggle('is-open');
          searchOverlay.setAttribute('aria-hidden', !isOpen);
          if (isOpen) {
            document.body.classList.add('lock-scroll');
            setTimeout(function () {
              if (searchInput) searchInput.focus();
            }, 300);
          } else {
            document.body.classList.remove('lock-scroll');
          }
        });
      });

      // Close on Escape
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
          searchOverlay.classList.remove('is-open');
          searchOverlay.setAttribute('aria-hidden', 'true');
          document.body.classList.remove('lock-scroll');
        }
      });
    }

    // Search input
    if (searchInput) {
      const debouncedSearch = window.AutoUtils.debounce(function () {
        const query = searchInput.value.trim();
        if (query.length < 2) {
          if (suggestions) suggestions.innerHTML = '';
          return;
        }
        renderSuggestions(query);
      }, 250);

      searchInput.addEventListener('input', debouncedSearch);

      if (searchBtn) {
        searchBtn.addEventListener('click', function () {
          const query = searchInput.value.trim();
          if (query) {
            window.location.hash = '#/catalog?q=' + encodeURIComponent(query);
            closeSearch();
          }
        });
      }

      searchInput.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
          const query = searchInput.value.trim();
          if (query) {
            window.location.hash = '#/catalog?q=' + encodeURIComponent(query);
            closeSearch();
          }
        }
      });
    }

    function renderSuggestions(query) {
      if (!suggestions) return;
      const cars = window.AUTO_DATA.cars || [];
      const brands = window.AUTO_DATA.brands || [];
      const categories = window.AUTO_DATA.categories || [];

      const q = query.toLowerCase();

      const carMatches = cars.filter(function (car) {
        const brand = brands.find(function (b) { return b.id === car.brandId; });
        const category = categories.find(function (c) { return c.id === car.category; });
        return (
          car.name.toLowerCase().includes(q) ||
          (brand && brand.name.toLowerCase().includes(q)) ||
          (category && category.name.toLowerCase().includes(q)) ||
          car.country.toLowerCase().includes(q) ||
          String(car.year).includes(q)
        );
      }).slice(0, 6);

      if (carMatches.length === 0) {
        suggestions.innerHTML = '<div class="search-suggestion" style="color: var(--text-muted); font-size: var(--fs-small); padding: 0.8rem;">Ничего не найдено</div>';
        return;
      }

      suggestions.innerHTML = carMatches.map(function (car) {
        const brand = brands.find(function (b) { return b.id === car.brandId; });
        return (
          '<a href="#/car/' + car.id + '" class="search-suggestion" data-link="/car/' + car.id + '">' +
            '<img src="' + car.image + '" alt="' + car.name + '" class="search-suggestion__thumb" loading="lazy" />' +
            '<div>' +
              '<div class="search-suggestion__name">' + (brand ? brand.name + ' ' : '') + car.name + '</div>' +
              '<div class="search-suggestion__meta">' + car.year + ' · ' + car.country + '</div>' +
            '</div>' +
          '</a>'
        );
      }).join('');

      // Close search on suggestion click
      suggestions.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', closeSearch);
      });
    }

    function closeSearch() {
      searchOverlay.classList.remove('is-open');
      searchOverlay.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('lock-scroll');
      if (searchInput) searchInput.value = '';
      if (suggestions) suggestions.innerHTML = '';
    }
  };
})(window.AutoComponents);