window.AutoComponents = window.AutoComponents || {};

(function (C) {
  'use strict';

  /**
   * Render a car card
   * @param {Object} car - Car data
   * @param {Object} options - Options { horizontal, compact }
   * @returns {string} HTML string
   */
  C.renderCarCard = function (car, options) {
    options = options || {};
    const brands = window.AUTO_DATA.brands || [];
    const categories = window.AUTO_DATA.categories || [];
    const brand = brands.find(function (b) { return b.id === car.brandId; });
    const category = categories.find(function (c) { return c.id === car.category; });
    const isFav = window.AutoStore.isFavorite(car.id);
    const avail = window.AutoUtils.getAvailability(car.availability);
    const badgeClass = window.AutoUtils.getAvailabilityBadge(car.availability);

    const horizontalClass = options.horizontal ? ' car-card--horizontal' : '';

    return (
      '<article class="car-card' + horizontalClass + '" data-car-id="' + car.id + '" data-link="/car/' + car.id + '">' +
        '<div class="car-card__media">' +
          '<img src="' + car.image + '" alt="' + car.name + '" class="car-card__img" loading="lazy" />' +
          '<div class="car-card__badges">' +
            '<div class="car-card__badges-left">' +
              '<span class="badge ' + badgeClass + '">' + avail.icon + ' ' + avail.label.replace(/^[^\s]+\s/, '') + '</span>' +
            '</div>' +
            '<div class="car-card__badges-right">' +
              '<button class="car-card__fav' + (isFav ? ' is-active' : '') + '" data-fav="' + car.id + '" aria-label="Добавить в избранное">' +
                '<svg viewBox="0 0 24 24" fill="' + (isFav ? 'currentColor' : 'none') + '">' +
                  '<path d="M12 21C12 21 3 14.6 3 8.8C3 5.9 5.3 4 7.8 4C9.5 4 11 5 12 6.6C13 5 14.5 4 16.2 4C18.7 4 21 5.9 21 8.8C21 14.6 12 21 12 21Z" stroke="currentColor" stroke-width="2"/>' +
                '</svg>' +
              '</button>' +
            '</div>' +
          '</div>' +
        '</div>' +
        '<div class="car-card__body">' +
          '<div class="car-card__brand">' + (brand ? brand.name : '') + '</div>' +
          '<h3 class="car-card__name">' + car.name + '</h3>' +
          '<div class="car-card__specs">' +
            '<div class="car-card__spec">' +
              '<div class="car-card__spec-value">' + car.power + '</div>' +
              '<div class="car-card__spec-label">л.с.</div>' +
            '</div>' +
            '<div class="car-card__spec">' +
              '<div class="car-card__spec-value">' + car.acceleration + 'с</div>' +
              '<div class="car-card__spec-label">0-100</div>' +
            '</div>' +
            '<div class="car-card__spec">' +
              '<div class="car-card__spec-value">' + car.topSpeed + '</div>' +
              '<div class="car-card__spec-label">км/ч</div>' +
            '</div>' +
          '</div>' +
          '<div class="car-card__price">' +
            '<div class="car-card__price-value">' + window.AutoUtils.formatUSD(car.price.usd) + ' <span>USD</span></div>' +
            '<span class="badge badge--glass">' + (category ? category.name : '') + '</span>' +
          '</div>' +
        '</div>' +
      '</article>'
    );
  };

  /**
   * Initialize car card interactions (favorites, navigation)
   * @param {HTMLElement} container - Container element
   */
  C.initCarCards = function (container) {
    if (!container) return;

    // Favorite buttons
    container.querySelectorAll('[data-fav]').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        const carId = btn.getAttribute('data-fav');
        const added = window.AutoStore.toggleFavorite(carId);
        window.AutoStore.updateFavoritesBadge();

        if (added) {
          btn.classList.add('is-active');
          btn.querySelector('svg').setAttribute('fill', 'currentColor');
          window.AutoComponents.showToast('Добавлено в избранное', 'success');
        } else {
          btn.classList.remove('is-active');
          btn.querySelector('svg').setAttribute('fill', 'none');
          window.AutoComponents.showToast('Удалено из избранного');
        }
      });
    });

    // Card navigation
    container.querySelectorAll('.car-card[data-link]').forEach(function (card) {
      card.addEventListener('click', function (e) {
        if (e.target.closest('[data-fav]')) return;
        const link = card.getAttribute('data-link');
        if (link) {
          window.location.hash = '#' + link;
        }
      });
    });
  };
})(window.AutoComponents);