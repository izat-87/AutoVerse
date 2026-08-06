window.AutoPages = window.AutoPages || {};

(function (P) {
  'use strict';

  /**
   * Render news page
   * @returns {string} HTML string
   */
  P.renderNews = function () {
    const news = window.AUTO_DATA.news || [];

    return (
      '<div class="news-page">' +
        '<div class="page-hero">' +
          '<div class="container">' +
            '<div class="page-hero__content">' +
              '<div class="page-hero__eyebrow">Новости</div>' +
              '<h1 class="page-hero__title">Автомобильные новости</h1>' +
              '<p class="page-hero__desc">Самые свежие новости из мира автомобилей: новинки, технологии и события.</p>' +
            '</div>' +
          '</div>' +
        '</div>' +
        '<div class="container">' +
          '<div class="news-grid" id="news-grid">' +
            news.map(function (item) {
              return (
                '<div class="news-card" data-link="/news/' + item.id + '" data-reveal>' +
                  '<div class="news-card__media">' +
                    '<img src="' + item.image + '" alt="' + item.title + '" class="news-card__img" loading="lazy" />' +
                    '<span class="news-card__date">' + window.AutoUtils.formatDate(item.date) + '</span>' +
                  '</div>' +
                  '<div class="news-card__body">' +
                    '<span class="news-card__category">' + item.category + '</span>' +
                    '<h2 class="news-card__title">' + item.title + '</h2>' +
                    '<p class="news-card__excerpt">' + item.excerpt + '</p>' +
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
   * Initialize news page
   * @param {HTMLElement} container - Container element
   */
  P.initNews = function (container) {
    if (!container) return;

    container.querySelectorAll('.news-card[data-link]').forEach(function (card) {
      card.addEventListener('click', function () {
        const link = card.getAttribute('data-link');
        if (link) window.location.hash = '#' + link;
      });
    });
  };

  /**
   * Render news detail page
   * @param {string} newsId - News ID
   * @returns {string} HTML string
   */
  P.renderNewsDetail = function (newsId) {
    const news = window.AUTO_DATA.news || [];
    const item = news.find(function (n) { return n.id === newsId; });
    if (!item) return null;

    return (
      '<div class="news-detail">' +
        '<div class="news-detail__hero">' +
          '<img src="' + item.image + '" alt="' + item.title + '" class="news-detail__hero-img" />' +
          '<div class="news-detail__hero-content">' +
            '<nav class="breadcrumbs" aria-label="Хлебные крошки">' +
              '<a href="#/" data-link="/">Главная</a>' +
              '<span class="breadcrumbs__sep">/</span>' +
              '<a href="#/news" data-link="/news">Новости</a>' +
              '<span class="breadcrumbs__sep">/</span>' +
              '<span class="breadcrumbs__current">' + item.title + '</span>' +
            '</nav>' +
            '<div class="news-detail__hero-meta">' +
              '<span class="badge badge--accent">' + item.category + '</span>' +
              '<span class="badge badge--glass">' + window.AutoUtils.formatDate(item.date) + '</span>' +
            '</div>' +
            '<h1 class="news-detail__hero-title">' + item.title + '</h1>' +
          '</div>' +
        '</div>' +
        '<div class="container">' +
          '<div class="news-detail__content">' +
            item.content.map(function (text) {
              return '<p class="news-detail__text">' + text + '</p>';
            }).join('') +
            (item.quote ? '<blockquote class="news-detail__quote">' + item.quote + '</blockquote>' : '') +
          '</div>' +
        '</div>' +
      '</div>'
    );
  };

  /**
   * Initialize news detail page
   * @param {HTMLElement} container - Container element
   */
  P.initNewsDetail = function (container) {
    if (!container) return;
  };
})(window.AutoPages);