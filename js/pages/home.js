window.AutoPages = window.AutoPages || {};

(function (P) {
  'use strict';

  /**
   * Render home page
   * @returns {string} HTML string
   */
  P.renderHome = function () {
    const cars = window.AUTO_DATA.cars || [];
    const brands = window.AUTO_DATA.brands || [];
    const categories = window.AUTO_DATA.categories || [];
    const guides = window.AUTO_DATA.guides || [];
    const news = window.AUTO_DATA.news || [];

    // Featured car for hero
    const heroCar = cars.find(function (c) { return c.id === 'bugatti-chiron'; }) || cars[0];

    // Popular cars (top by popularity)
    const popular = [...cars].sort(function (a, b) { return b.popularity - a.popularity; }).slice(0, 4);

    // Newest cars
    const newest = [...cars].sort(function (a, b) { return b.year - a.year; }).slice(0, 4);

    // Most expensive
    const expensive = [...cars].sort(function (a, b) { return b.price.usd - a.price.usd; }).slice(0, 4);

    // Fastest
    const fastest = [...cars].sort(function (a, b) { return b.topSpeed - a.topSpeed; }).slice(0, 4);

    // Rare (limited)
    const rare = cars.filter(function (c) { return c.availability === 'limited'; }).slice(0, 4);

    // Legendary (classic)
    const legendary = cars.filter(function (c) { return c.category === 'classic'; }).slice(0, 4);

    // Featured showcase car
    const showcaseCar = cars.find(function (c) { return c.id === 'lamborghini-aventador'; }) || cars[1];

    return (
      '<div class="home-page">' +
        // Hero
        '<section class="home-hero">' +
          '<div class="home-hero__bg">' +
            '<img src="' + heroCar.image + '" alt="' + heroCar.name + '" class="home-hero__bg-img" />' +
          '</div>' +
          '<div class="container">' +
            '<div class="home-hero__content">' +
              '<div class="home-hero__eyebrow">Премиальный автомобильный портал</div>' +
              '<h1 class="home-hero__title">Легендарные автомобили<br /><span class="text-gradient">мира в одном месте</span></h1>' +
              '<p class="home-hero__desc">Исследуйте истории, характеристики, цены и наличие самых известных автомобилей планеты — от гиперкаров до классики.</p>' +
              '<div class="home-hero__actions">' +
                '<a href="#/catalog" class="btn btn--accent btn--lg" data-link="/catalog">Исследовать каталог</a>' +
                '<a href="#/guides" class="btn btn--ghost btn--lg" data-link="/guides">Смотреть гиды</a>' +
              '</div>' +
              '<div class="home-hero__stats">' +
                '<div class="home-hero__stat">' +
                  '<span class="home-hero__stat-value">' + cars.length + '+</span>' +
                  '<span class="home-hero__stat-label">Автомобилей</span>' +
                '</div>' +
                '<div class="home-hero__stat">' +
                  '<span class="home-hero__stat-value">' + brands.length + '</span>' +
                  '<span class="home-hero__stat-label">Брендов</span>' +
                '</div>' +
                '<div class="home-hero__stat">' +
                  '<span class="home-hero__stat-value">' + categories.length + '</span>' +
                  '<span class="home-hero__stat-label">Категорий</span>' +
                '</div>' +
                '<div class="home-hero__stat">' +
                  '<span class="home-hero__stat-value">' + guides.length + '</span>' +
                  '<span class="home-hero__stat-label">Гидов</span>' +
                '</div>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</section>' +

        // Brands marquee
        '<div class="brand-marquee">' +
          '<div class="marquee">' +
            '<div class="marquee__track">' +
              brands.concat(brands).map(function (b) {
                return '<span class="brand-marquee__item" data-link="/brand/' + b.id + '">' +
                  '<span class="brand-marquee__logo">' + b.logo + '</span>' + b.name +
                '</span>';
              }).join('') +
            '</div>' +
          '</div>' +
        '</div>' +

        // Popular cars
        '<section class="section">' +
          '<div class="container">' +
            '<div class="section-head" data-reveal>' +
              '<div class="section-head__left">' +
                '<div class="section-head__eyebrow">Топ выбор</div>' +
                '<h2 class="h2">Популярные автомобили</h2>' +
                '<p class="section-head__desc">Самые востребованные и любимые модели среди ценителей.</p>' +
              '</div>' +
              '<a href="#/catalog" class="btn btn--ghost" data-link="/catalog">Все автомобили</a>' +
            '</div>' +
            '<div class="car-grid" id="home-popular" data-reveal>' +
              popular.map(function (car) { return window.AutoComponents.renderCarCard(car); }).join('') +
            '</div>' +
          '</div>' +
        '</section>' +

        // Showcase
        '<section class="section section--alt">' +
          '<div class="container">' +
            '<div class="showcase" data-link="/car/' + showcaseCar.id + '" data-reveal="zoom">' +
              '<div class="showcase__bg" style="background-image: url(\'' + showcaseCar.image + '\');"></div>' +
              '<div class="showcase__content">' +
                '<div class="showcase__brand">' + (brands.find(function (b) { return b.id === showcaseCar.brandId; }) || {}).name + '</div>' +
                '<h2 class="showcase__name">' + showcaseCar.name + '</h2>' +
                '<p class="showcase__desc">' + window.AutoUtils.truncate(showcaseCar.history, 180) + '</p>' +
                '<div class="showcase__specs">' +
                  '<div class="showcase__spec">' +
                    '<span class="showcase__spec-value">' + showcaseCar.power + ' л.с.</span>' +
                    '<span class="showcase__spec-label">Мощность</span>' +
                  '</div>' +
                  '<div class="showcase__spec">' +
                    '<span class="showcase__spec-value">' + showcaseCar.acceleration + ' с</span>' +
                    '<span class="showcase__spec-label">0-100 км/ч</span>' +
                  '</div>' +
                  '<div class="showcase__spec">' +
                    '<span class="showcase__spec-value">' + showcaseCar.topSpeed + ' км/ч</span>' +
                    '<span class="showcase__spec-label">Макс. скорость</span>' +
                  '</div>' +
                '</div>' +
                '<a href="#/car/' + showcaseCar.id + '" class="btn btn--accent" data-link="/car/' + showcaseCar.id + '">Подробнее</a>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</section>' +

        // Categories
        '<section class="section">' +
          '<div class="container">' +
            '<div class="section-head" data-reveal>' +
              '<div class="section-head__left">' +
                '<div class="section-head__eyebrow">Категории</div>' +
                '<h2 class="h2">Исследуйте по категориям</h2>' +
              '</div>' +
              '<a href="#/categories" class="btn btn--ghost" data-link="/categories">Все категории</a>' +
            '</div>' +
            '<div class="categories-grid" data-reveal>' +
              categories.slice(0, 6).map(function (cat) {
                const count = cars.filter(function (c) { return c.category === cat.id; }).length;
                return (
                  '<div class="category-card" data-link="/category/' + cat.id + '">' +
                    '<div class="category-card__bg" style="background-image: url(\'' + cat.image + '\');"></div>' +
                    '<div class="category-card__content">' +
                      '<h3 class="category-card__name">' + cat.icon + ' ' + cat.name + '</h3>' +
                      '<span class="category-card__count">' + count + ' моделей</span>' +
                    '</div>' +
                  '</div>'
                );
              }).join('') +
            '</div>' +
          '</div>' +
        '</section>' +

        // Newest
        '<section class="section section--alt">' +
          '<div class="container">' +
            '<div class="section-head" data-reveal>' +
              '<div class="section-head__left">' +
                '<div class="section-head__eyebrow">Новинки</div>' +
                '<h2 class="h2">Самые свежие модели</h2>' +
              '</div>' +
            '</div>' +
            '<div class="car-grid" id="home-newest" data-reveal>' +
              newest.map(function (car) { return window.AutoComponents.renderCarCard(car); }).join('') +
            '</div>' +
          '</div>' +
        '</section>' +

        // Fastest
        '<section class="section">' +
          '<div class="container">' +
            '<div class="section-head" data-reveal>' +
              '<div class="section-head__left">' +
                '<div class="section-head__eyebrow">Скорость</div>' +
                '<h2 class="h2">Самые быстрые автомобили</h2>' +
              '</div>' +
              '<a href="#/guides/fastest" class="btn btn--ghost" data-link="/guides/fastest">Топ-10</a>' +
            '</div>' +
            '<div class="car-grid" id="home-fastest" data-reveal>' +
              fastest.map(function (car) { return window.AutoComponents.renderCarCard(car); }).join('') +
            '</div>' +
          '</div>' +
        '</section>' +

        // Expensive
        '<section class="section section--alt">' +
          '<div class="container">' +
            '<div class="section-head" data-reveal>' +
              '<div class="section-head__left">' +
                '<div class="section-head__eyebrow">Роскошь</div>' +
                '<h2 class="h2">Самые дорогие автомобили</h2>' +
              '</div>' +
              '<a href="#/guides/expensive" class="btn btn--ghost" data-link="/guides/expensive">Топ-10</a>' +
            '</div>' +
            '<div class="car-grid" id="home-expensive" data-reveal>' +
              expensive.map(function (car) { return window.AutoComponents.renderCarCard(car); }).join('') +
            '</div>' +
          '</div>' +
        '</section>' +

        // Rare
        '<section class="section">' +
          '<div class="container">' +
            '<div class="section-head" data-reveal>' +
              '<div class="section-head__left">' +
                '<div class="section-head__eyebrow">Эксклюзив</div>' +
                '<h2 class="h2">Редкие автомобили</h2>' +
              '</div>' +
            '</div>' +
            '<div class="car-grid" id="home-rare" data-reveal>' +
              rare.map(function (car) { return window.AutoComponents.renderCarCard(car); }).join('') +
            '</div>' +
          '</div>' +
        '</section>' +

        // Legendary
        '<section class="section section--alt">' +
          '<div class="container">' +
            '<div class="section-head" data-reveal>' +
              '<div class="section-head__left">' +
                '<div class="section-head__eyebrow">Легенды</div>' +
                '<h2 class="h2">Легендарные автомобили</h2>' +
              '</div>' +
            '</div>' +
            '<div class="car-grid" id="home-legendary" data-reveal>' +
              legendary.map(function (car) { return window.AutoComponents.renderCarCard(car); }).join('') +
            '</div>' +
          '</div>' +
        '</section>' +

        // Guides
        '<section class="section">' +
          '<div class="container">' +
            '<div class="section-head" data-reveal>' +
              '<div class="section-head__left">' +
                '<div class="section-head__eyebrow">Гиды</div>' +
                '<h2 class="h2">Полезные материалы</h2>' +
              '</div>' +
              '<a href="#/guides" class="btn btn--ghost" data-link="/guides">Все гиды</a>' +
            '</div>' +
            '<div class="guides-grid" data-reveal>' +
              guides.slice(0, 3).map(function (guide) {
                return (
                  '<div class="guide-card" data-link="/guides/' + guide.id + '">' +
                    '<div class="guide-card__bg" style="background-image: url(\'' + guide.image + '\');"></div>' +
                    '<div class="guide-card__content">' +
                      '<h3 class="guide-card__title">' + guide.title + '</h3>' +
                      '<p class="guide-card__desc">' + window.AutoUtils.truncate(guide.description, 100) + '</p>' +
                    '</div>' +
                  '</div>'
                );
              }).join('') +
            '</div>' +
          '</div>' +
        '</section>' +

        // News
        '<section class="section section--alt">' +
          '<div class="container">' +
            '<div class="section-head" data-reveal>' +
              '<div class="section-head__left">' +
                '<div class="section-head__eyebrow">Новости</div>' +
                '<h2 class="h2">Последние новости</h2>' +
              '</div>' +
              '<a href="#/news" class="btn btn--ghost" data-link="/news">Все новости</a>' +
            '</div>' +
            '<div class="news-grid" data-reveal>' +
              news.slice(0, 3).map(function (item) {
                return (
                  '<div class="news-card" data-link="/news/' + item.id + '">' +
                    '<div class="news-card__media">' +
                      '<img src="' + item.image + '" alt="' + item.title + '" class="news-card__img" loading="lazy" />' +
                      '<span class="news-card__date">' + window.AutoUtils.formatDate(item.date) + '</span>' +
                    '</div>' +
                    '<div class="news-card__body">' +
                      '<span class="news-card__category">' + item.category + '</span>' +
                      '<h3 class="news-card__title">' + item.title + '</h3>' +
                      '<p class="news-card__excerpt">' + window.AutoUtils.truncate(item.excerpt, 120) + '</p>' +
                    '</div>' +
                  '</div>'
                );
              }).join('') +
            '</div>' +
          '</div>' +
        '</section>' +

        // CTA
        '<section class="section">' +
          '<div class="container">' +
            '<div class="cta-banner" data-reveal="zoom">' +
              '<h2 class="cta-banner__title">Готовы исследовать мир автомобилей?</h2>' +
              '<p class="cta-banner__desc">Откройте для себя полный каталог легендарных автомобилей с характеристиками, ценами и историей.</p>' +
              '<a href="#/catalog" class="btn btn--lg" data-link="/catalog">Перейти в каталог</a>' +
            '</div>' +
          '</div>' +
        '</section>' +
      '</div>'
    );
  };

  /**
   * Initialize home page
   * @param {HTMLElement} container - Container element
   */
  P.initHome = function (container) {
    if (!container) return;

    // Initialize car cards
    ['home-popular', 'home-newest', 'home-fastest', 'home-expensive', 'home-rare', 'home-legendary'].forEach(function (id) {
      const el = container.querySelector('#' + id);
      if (el) window.AutoComponents.initCarCards(el);
    });

    // Initialize marquee items
    container.querySelectorAll('.brand-marquee__item[data-link]').forEach(function (item) {
      item.addEventListener('click', function () {
        const link = item.getAttribute('data-link');
        if (link) window.location.hash = '#' + link;
      });
    });

    // Initialize category cards
    container.querySelectorAll('.category-card[data-link]').forEach(function (card) {
      card.addEventListener('click', function () {
        const link = card.getAttribute('data-link');
        if (link) window.location.hash = '#' + link;
      });
    });

    // Initialize guide cards
    container.querySelectorAll('.guide-card[data-link]').forEach(function (card) {
      card.addEventListener('click', function () {
        const link = card.getAttribute('data-link');
        if (link) window.location.hash = '#' + link;
      });
    });

    // Initialize news cards
    container.querySelectorAll('.news-card[data-link]').forEach(function (card) {
      card.addEventListener('click', function () {
        const link = card.getAttribute('data-link');
        if (link) window.location.hash = '#' + link;
      });
    });

    // Initialize showcase
    container.querySelectorAll('.showcase[data-link]').forEach(function (showcase) {
      showcase.addEventListener('click', function () {
        const link = showcase.getAttribute('data-link');
        if (link) window.location.hash = '#' + link;
      });
    });
  };
})(window.AutoPages);