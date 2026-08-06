window.AutoRouter = window.AutoRouter || {};

(function (R) {
  'use strict';

  const app = document.getElementById('app');

  /**
   * Parse hash URL into route
   * @returns {Object} { path, params }
   */
  function parseHash() {
    const hash = window.location.hash.replace(/^#/, '') || '/';
    const [pathPart, queryPart] = hash.split('?');
    const path = pathPart || '/';
    const params = {};

    if (queryPart) {
      queryPart.split('&').forEach(function (pair) {
        const [key, value] = pair.split('=');
        if (key) params[decodeURIComponent(key)] = decodeURIComponent(value || '');
      });
    }

    return { path, params };
  }

  /**
   * Route to a page
   * @param {string} path - Path
   * @param {Object} params - URL params
   */
  function route(path, params) {
    const segments = path.split('/').filter(Boolean);

    let html = '';
    let initFn = null;

    // Home
    if (path === '/' || path === '') {
      html = window.AutoPages.renderHome();
      initFn = window.AutoPages.initHome;
    }
    // Catalog
    else if (path === '/catalog') {
      html = window.AutoPages.renderCatalog(params);
      initFn = function (container) {
        window.AutoPages.initCatalog(container, params);
      };
    }
    // Categories
    else if (path === '/categories') {
      html = window.AutoPages.renderCategories();
      initFn = window.AutoPages.initCategories;
    }
    // Category detail
    else if (segments[0] === 'category' && segments[1]) {
      html = window.AutoPages.renderCategoryDetail(segments[1]);
      initFn = window.AutoPages.initCategoryDetail;
    }
    // Brands
    else if (path === '/brands') {
      html = window.AutoPages.renderBrands();
      initFn = window.AutoPages.initBrands;
    }
    // Brand detail
    else if (segments[0] === 'brand' && segments[1]) {
      html = window.AutoPages.renderBrandDetail(segments[1]);
      initFn = window.AutoPages.initBrandDetail;
    }
    // Car detail
    else if (segments[0] === 'car' && segments[1]) {
      html = window.AutoPages.renderCarDetail(segments[1]);
      initFn = window.AutoPages.initCarDetail;
      // Track recently viewed
      window.AutoStore.addRecentlyViewed(segments[1]);
    }
    // Guides
    else if (path === '/guides') {
      html = window.AutoPages.renderGuides();
      initFn = window.AutoPages.initGuides;
    }
    // Guide detail
    else if (segments[0] === 'guides' && segments[1]) {
      html = window.AutoPages.renderGuideDetail(segments[1]);
      initFn = window.AutoPages.initGuideDetail;
    }
    // News
    else if (path === '/news') {
      html = window.AutoPages.renderNews();
      initFn = window.AutoPages.initNews;
    }
    // News detail
    else if (segments[0] === 'news' && segments[1]) {
      html = window.AutoPages.renderNewsDetail(segments[1]);
      initFn = window.AutoPages.initNewsDetail;
    }
    // Compare
    else if (path === '/compare') {
      html = window.AutoComponents.renderComparePage();
      initFn = window.AutoComponents.initComparePage;
    }
    // Favorites
    else if (path === '/favorites') {
      html = window.AutoPages.renderFavorites();
      initFn = window.AutoPages.initFavorites;
    }
    // 404
    else {
      html = (
        '<div class="not-found">' +
          '<div class="not-found__code">404</div>' +
          '<h1 class="not-found__title">Страница не найдена</h1>' +
          '<p class="not-found__desc">К сожалению, запрашиваемая страница не существует или была перемещена.</p>' +
          '<a href="#/" class="btn btn--accent" data-link="/">Вернуться на главную</a>' +
        '</div>'
      );
    }

    // Render
    if (app) {
      app.innerHTML = html;

      // Append compare bar (not on compare page itself)
      if (path !== '/compare') {
        const compareBarHtml = window.AutoComponents.renderCompareBar();
        if (compareBarHtml) {
          app.insertAdjacentHTML('beforeend', compareBarHtml);
          const compareBar = document.getElementById('compare-bar');
          if (compareBar) window.AutoComponents.initCompareBar(compareBar);
        }
      }

      app.scrollTop = 0;
      window.scrollTo(0, 0);

      // Initialize page
      if (initFn && typeof initFn === 'function') {
        initFn(app);
      }

      // Initialize scroll reveal
      window.AutoComponents.initScrollReveal();

      // Update active nav link
      updateActiveNav(path);

      // Update document title
      updateTitle(path);
    }
  }

  /**
   * Update active nav link
   * @param {string} path - Current path
   */
  function updateActiveNav(path) {
    const links = document.querySelectorAll('.main-nav__link');
    links.forEach(function (link) {
      const href = link.getAttribute('data-link');
      link.classList.remove('is-active');
      if (href && (path === href || (href !== '/' && path.startsWith(href)))) {
        link.classList.add('is-active');
      }
    });
  }

  /**
   * Update document title
   * @param {string} path - Current path
   */
  function updateTitle(path) {
    const titles = {
      '/': 'AutoVerse — автомобильный портал премиум-класса',
      '/catalog': 'Каталог автомобилей — AutoVerse',
      '/categories': 'Категории автомобилей — AutoVerse',
      '/brands': 'Производители — AutoVerse',
      '/guides': 'Автомобильные гиды — AutoVerse',
      '/news': 'Автомобильные новости — AutoVerse',
      '/favorites': 'Избранное — AutoVerse',
      '/compare': 'Сравнение автомобилей — AutoVerse'
    };

    document.title = titles[path] || 'AutoVerse — автомобильный портал премиум-класса';
  }

  /**
   * Initialize router
   */
  R.init = function () {
    // Handle hash changes
    window.addEventListener('hashchange', function () {
      const { path, params } = parseHash();
      route(path, params);
    });

    // Handle data-link clicks with capture so SPA routing works even if child elements stop propagation.
    document.addEventListener('click', function (e) {
      // Avoid routing when user interacts with internal controls inside a card.
      if (e.target.closest('[data-fav], [data-compare]')) return;

      const link = e.target.closest('[data-link]');
      if (link) {
        const href = link.getAttribute('data-link');
        if (href && href.startsWith('/')) {
          e.preventDefault();
          window.location.hash = '#' + href;
        }
      }
    }, true);

    // Initial route
    const { path, params } = parseHash();
    route(path, params);
  };
})(window.AutoRouter);