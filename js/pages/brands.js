window.AutoPages = window.AutoPages || {};

(function (P) {
  'use strict';

  /**
   * Render brands page
   * @returns {string} HTML string
   */
  P.renderBrands = function () {
    const brands = window.AUTO_DATA.brands || [];
    const cars = window.AUTO_DATA.cars || [];

    return (
      '<div class="brands-page">' +
        '<div class="page-hero">' +
          '<div class="container">' +
            '<div class="page-hero__content">' +
              '<div class="page-hero__eyebrow">Бренды</div>' +
              '<h1 class="page-hero__title">Производители</h1>' +
              '<p class="page-hero__desc">Исследуйте легендарные автомобильные бренды мира и их модели.</p>' +
            '</div>' +
          '</div>' +
        '</div>' +
        '<div class="container">' +
          '<div class="brands-grid" id="brands-grid">' +
            brands.map(function (brand) {
              const count = cars.filter(function (c) { return c.brandId === brand.id; }).length;
              return (
                '<div class="brand-card" data-link="/brand/' + brand.id + '" data-reveal>' +
                  '<div class="brand-card__logo" style="color: ' + brand.color + ';">' + brand.logo + '</div>' +
                  '<div class="brand-card__name">' + brand.name + '</div>' +
                  '<div class="brand-card__meta">' + brand.country + ' · ' + count + ' моделей</div>' +
                '</div>'
              );
            }).join('') +
          '</div>' +
        '</div>' +
      '</div>'
    );
  };

  /**
   * Initialize brands page
   * @param {HTMLElement} container - Container element
   */
  P.initBrands = function (container) {
    if (!container) return;

    container.querySelectorAll('.brand-card[data-link]').forEach(function (card) {
      card.addEventListener('click', function () {
        const link = card.getAttribute('data-link');
        if (link) window.location.hash = '#' + link;
      });
    });
  };

  /**
   * Render brand detail page
   * @param {string} brandId - Brand ID
   * @returns {string} HTML string
   */
  P.renderBrandDetail = function (brandId) {
    const brands = window.AUTO_DATA.brands || [];
    const cars = window.AUTO_DATA.cars || [];
    const brand = brands.find(function (b) { return b.id === brandId; });
    if (!brand) return null;

    const brandCars = cars.filter(function (c) { return c.brandId === brandId; });

    return (
      '<div class="brand-detail">' +
        '<div class="page-hero">' +
          '<div class="container">' +
            '<nav class="breadcrumbs" aria-label="Хлебные крошки">' +
              '<a href="#/" data-link="/">Главная</a>' +
              '<span class="breadcrumbs__sep">/</span>' +
              '<a href="#/brands" data-link="/brands">Бренды</a>' +
              '<span class="breadcrumbs__sep">/</span>' +
              '<span class="breadcrumbs__current">' + brand.name + '</span>' +
            '</nav>' +
            '<div class="brand-detail__header">' +
              '<div class="brand-detail__logo" style="color: ' + brand.color + ';">' + brand.logo + '</div>' +
              '<div class="brand-detail__info">' +
                '<h1 class="brand-detail__name">' + brand.name + '</h1>' +
                '<div class="brand-detail__meta">' +
                  brand.country + ' · Основан в ' + brand.founded + ' · ' + brand.founder +
                '</div>' +
              '</div>' +
            '</div>' +
            '<div class="page-hero__content">' +
              '<p class="page-hero__desc">' + brand.description + '</p>' +
              '<div style="margin-top: var(--sp-sm);">' +
                '<span class="badge badge--accent">' + brand.tagline + '</span>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>' +
        '<div class="container">' +
          '<div class="section-head">' +
            '<div class="section-head__left">' +
              '<div class="section-head__eyebrow">Модели</div>' +
              '<h2 class="h2">Автомобили ' + brand.name + '</h2>' +
            '</div>' +
            '<a href="' + brand.website + '" target="_blank" rel="noopener" class="btn btn--ghost">Официальный сайт</a>' +
          '</div>' +
          '<div class="car-grid" id="brand-cars">' +
            brandCars.map(function (car) { return window.AutoComponents.renderCarCard(car); }).join('') +
          '</div>' +
        '</div>' +
      '</div>'
    );
  };

  /**
   * Initialize brand detail page
   * @param {HTMLElement} container - Container element
   */
  P.initBrandDetail = function (container) {
    if (!container) return;
    const grid = container.querySelector('#brand-cars');
    if (grid) window.AutoComponents.initCarCards(grid);
  };
})(window.AutoPages);