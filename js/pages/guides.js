window.AutoPages = window.AutoPages || {};

(function (P) {
  'use strict';

  /**
   * Render guides page
   * @returns {string} HTML string
   */
  P.renderGuides = function () {
    const guides = window.AUTO_DATA.guides || [];

    return (
      '<div class="guides-page">' +
        '<div class="page-hero">' +
          '<div class="container">' +
            '<div class="page-hero__content">' +
              '<div class="page-hero__eyebrow">Гиды</div>' +
              '<h1 class="page-hero__title">Автомобильные гиды</h1>' +
              '<p class="page-hero__desc">Полезные материалы о самых быстрых, дорогих и редких автомобилях мира.</p>' +
            '</div>' +
          '</div>' +
        '</div>' +
        '<div class="container">' +
          '<div class="guides-grid" id="guides-grid">' +
            guides.map(function (guide) {
              return (
                '<div class="guide-card" data-link="/guides/' + guide.id + '" data-reveal>' +
                  '<div class="guide-card__bg" style="background-image: url(\'' + guide.image + '\');"></div>' +
                  '<div class="guide-card__content">' +
                    '<h2 class="guide-card__title">' + guide.title + '</h2>' +
                    '<p class="guide-card__desc">' + guide.description + '</p>' +
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
   * Initialize guides page
   * @param {HTMLElement} container - Container element
   */
  P.initGuides = function (container) {
    if (!container) return;

    container.querySelectorAll('.guide-card[data-link]').forEach(function (card) {
      card.addEventListener('click', function () {
        const link = card.getAttribute('data-link');
        if (link) window.location.hash = '#' + link;
      });
    });
  };

  /**
   * Render guide detail page
   * @param {string} guideId - Guide ID
   * @returns {string} HTML string
   */
  P.renderGuideDetail = function (guideId) {
    const guides = window.AUTO_DATA.guides || [];
    const cars = window.AUTO_DATA.cars || [];
    const guide = guides.find(function (g) { return g.id === guideId; });
    if (!guide) return null;

    // Build content sections
    let contentHtml = '';

    // Text paragraphs
    if (guide.content) {
      contentHtml += guide.content.map(function (text) {
        return '<p class="guide-detail__text">' + text + '</p>';
      }).join('');
    }

    // List items
    if (guide.list) {
      contentHtml += '<ul class="guide-detail__list">' +
        guide.list.map(function (item) {
          return '<li class="guide-detail__list-item">' + item + '</li>';
        }).join('') +
      '</ul>';
    }

    // Ranks
    if (guide.ranks) {
      contentHtml += '<div class="guide-detail__ranks">' +
        guide.ranks.map(function (rank, index) {
          const car = cars.find(function (c) { return c.id === rank.carId; });
          if (!car) return '';
          const brand = (window.AUTO_DATA.brands || []).find(function (b) { return b.id === car.brandId; });
          return (
            '<div class="guide-detail__rank" data-link="/car/' + car.id + '">' +
              '<div class="guide-detail__rank-num">' + (index + 1) + '</div>' +
              '<div class="guide-detail__rank-info">' +
                '<div class="guide-detail__rank-name">' + (brand ? brand.name + ' ' : '') + car.name + '</div>' +
                '<div class="guide-detail__rank-meta">' + car.power + ' л.с. · ' + car.acceleration + ' с до 100 км/ч</div>' +
              '</div>' +
              '<div class="guide-detail__rank-value">' + rank.value + '</div>' +
            '</div>'
          );
        }).join('') +
      '</div>';
    }

    // Timeline
    if (guide.timeline) {
      contentHtml += '<div class="timeline">' +
        guide.timeline.map(function (item) {
          return (
            '<div class="timeline__item">' +
              '<div class="timeline__year">' + item.year + '</div>' +
              '<div class="timeline__title">' + item.title + '</div>' +
              '<div class="timeline__desc">' + item.desc + '</div>' +
            '</div>'
          );
        }).join('') +
      '</div>';
    }

    return (
      '<div class="guide-detail">' +
        '<div class="guide-detail__hero">' +
          '<img src="' + guide.image + '" alt="' + guide.title + '" class="guide-detail__hero-img" />' +
          '<div class="guide-detail__hero-content">' +
            '<nav class="breadcrumbs" aria-label="Хлебные крошки">' +
              '<a href="#/" data-link="/">Главная</a>' +
              '<span class="breadcrumbs__sep">/</span>' +
              '<a href="#/guides" data-link="/guides">Гиды</a>' +
              '<span class="breadcrumbs__sep">/</span>' +
              '<span class="breadcrumbs__current">' + guide.title + '</span>' +
            '</nav>' +
            '<h1 class="guide-detail__hero-title">' + guide.title + '</h1>' +
            '<p class="guide-detail__hero-desc">' + guide.description + '</p>' +
          '</div>' +
        '</div>' +
        '<div class="container">' +
          '<div class="guide-detail__content">' +
            contentHtml +
          '</div>' +
        '</div>' +
      '</div>'
    );
  };

  /**
   * Initialize guide detail page
   * @param {HTMLElement} container - Container element
   */
  P.initGuideDetail = function (container) {
    if (!container) return;

    container.querySelectorAll('.guide-detail__rank[data-link]').forEach(function (rank) {
      rank.addEventListener('click', function () {
        const link = rank.getAttribute('data-link');
        if (link) window.location.hash = '#' + link;
      });
    });
  };
})(window.AutoPages);