window.AutoPages = window.AutoPages || {};

(function (P) {
  'use strict';

  /**
   * Render favorites page
   * @returns {string} HTML string
   */
  P.renderFavorites = function () {
    const cars = window.AUTO_DATA.cars || [];
    const favorites = window.AutoStore.getFavorites();
    const favCars = cars.filter(function (c) { return favorites.includes(c.id); });

    return (
      '<div class="favorites-page">' +
        '<div class="page-hero">' +
          '<div class="container">' +
            '<div class="page-hero__content">' +
              '<div class="page-hero__eyebrow">Избранное</div>' +
              '<h1 class="page-hero__title">Избранные автомобили</h1>' +
              '<p class="page-hero__desc">Ваша коллекция понравившихся автомобилей.</p>' +
            '</div>' +
          '</div>' +
        '</div>' +
        '<div class="container">' +
          (favCars.length > 0 ? (
            '<div class="car-grid" id="favorites-grid">' +
              favCars.map(function (car) { return window.AutoComponents.renderCarCard(car); }).join('') +
            '</div>'
          ) : (
            '<div class="favorites-empty">' +
              '<div class="favorites-empty__icon">' +
                '<svg viewBox="0 0 24 24" fill="none"><path d="M12 21C12 21 3 14.6 3 8.8C3 5.9 5.3 4 7.8 4C9.5 4 11 5 12 6.6C13 5 14.5 4 16.2 4C18.7 4 21 5.9 21 8.8C21 14.6 12 21 12 21Z" stroke="currentColor" stroke-width="2"/></svg>' +
              '</div>' +
              '<h2 class="favorites-empty__title">Пока пусто</h2>' +
              '<p class="favorites-empty__desc">Добавляйте понравившиеся автомобили в избранное, нажимая на сердечко в карточке.</p>' +
              '<a href="#/catalog" class="btn btn--accent" data-link="/catalog">Перейти в каталог</a>' +
            '</div>'
          )) +
        '</div>' +
      '</div>'
    );
  };

  /**
   * Initialize favorites page
   * @param {HTMLElement} container - Container element
   */
  P.initFavorites = function (container) {
    if (!container) return;
    const grid = container.querySelector('#favorites-grid');
    if (grid) window.AutoComponents.initCarCards(grid);
  };
})(window.AutoPages);