window.AutoPages = window.AutoPages || {};

(function (P) {
  'use strict';

  /**
   * Render categories page
   * @returns {string} HTML string
   */
  P.renderCategories = function () {
    const categories = window.AUTO_DATA.categories || [];
    const cars = window.AUTO_DATA.cars || [];

    return (
      '<div class="categories-page">' +
        '<div class="page-hero">' +
          '<div class="container">' +
            '<div class="page-hero__content">' +
              '<div class="page-hero__eyebrow">Категории</div>' +
              '<h1 class="page-hero__title">Категории автомобилей</h1>' +
              '<p class="page-hero__desc">Исследуйте автомобили по категориям — от гиперкаров до классических моделей.</p>' +
            '</div>' +
          '</div>' +
        '</div>' +
        '<div class="container">' +
          '<div class="categories-grid" id="categories-grid">' +
            categories.map(function (cat) {
              const count = cars.filter(function (c) { return c.category === cat.id; }).length;
              return (
                '<div class="category-card" data-link="/category/' + cat.id + '" data-reveal>' +
                  '<div class="category-card__bg" style="background-image: url(\'' + cat.image + '\');"></div>' +
                  '<div class="category-card__content">' +
                    '<h2 class="category-card__name">' + cat.icon + ' ' + cat.name + '</h2>' +
                    '<span class="category-card__count">' + count + ' моделей</span>' +
                    '<p style="font-size: var(--fs-small); color: var(--text-secondary); margin-top: 0.5rem; line-height: 1.6;">' + cat.description + '</p>' +
                  '</div>' +
                '</div>'
              );
            }).join('') +
          '</div>' +
        '</div>' +
      '</div>'
    );
  };

  /**
   * Initialize categories page
   * @param {HTMLElement} container - Container element
   */
  P.initCategories = function (container) {
    if (!container) return;

    container.querySelectorAll('.category-card[data-link]').forEach(function (card) {
      card.addEventListener('click', function () {
        const link = card.getAttribute('data-link');
        if (link) window.location.hash = '#' + link;
      });
    });
  };

  /**
   * Render category detail page
   * @param {string} categoryId - Category ID
   * @returns {string} HTML string
   */
  P.renderCategoryDetail = function (categoryId) {
    const categories = window.AUTO_DATA.categories || [];
    const cars = window.AUTO_DATA.cars || [];
    const category = categories.find(function (c) { return c.id === categoryId; });
    if (!category) return null;

    const catCars = cars.filter(function (c) { return c.category === categoryId; });

    return (
      '<div class="category-detail">' +
        '<div class="page-hero">' +
          '<div class="container">' +
            '<nav class="breadcrumbs" aria-label="Хлебные крошки">' +
              '<a href="#/" data-link="/">Главная</a>' +
              '<span class="breadcrumbs__sep">/</span>' +
              '<a href="#/categories" data-link="/categories">Категории</a>' +
              '<span class="breadcrumbs__sep">/</span>' +
              '<span class="breadcrumbs__current">' + category.name + '</span>' +
            '</nav>' +
            '<div class="page-hero__content">' +
              '<div class="page-hero__eyebrow">' + category.icon + ' Категория</div>' +
              '<h1 class="page-hero__title">' + category.name + '</h1>' +
              '<p class="page-hero__desc">' + category.description + '</p>' +
            '</div>' +
          '</div>' +
        '</div>' +
        '<div class="container">' +
          '<div class="car-grid" id="category-cars">' +
            catCars.map(function (car) { return window.AutoComponents.renderCarCard(car); }).join('') +
          '</div>' +
        '</div>' +
      '</div>'
    );
  };

  /**
   * Initialize category detail page
   * @param {HTMLElement} container - Container element
   */
  P.initCategoryDetail = function (container) {
    if (!container) return;
    const grid = container.querySelector('#category-cars');
    if (grid) window.AutoComponents.initCarCards(grid);
  };
})(window.AutoPages);