window.AutoPages = window.AutoPages || {};

(function (P) {
  'use strict';

  /**
   * Render car detail page
   * @param {string} carId - Car ID
   * @returns {string} HTML string
   */
  P.renderCarDetail = function (carId) {
    const cars = window.AUTO_DATA.cars || [];
    const car = cars.find(function (c) { return c.id === carId; });
    if (!car) return null;

    const brands = window.AUTO_DATA.brands || [];
    const categories = window.AUTO_DATA.categories || [];
    const brand = brands.find(function (b) { return b.id === car.brandId; });
    const category = categories.find(function (c) { return c.id === car.category; });
    const avail = window.AutoUtils.getAvailability(car.availability);
    const badgeClass = window.AutoUtils.getAvailabilityBadge(car.availability);
    const isFav = window.AutoStore.isFavorite(car.id);

    // Similar cars
    const similar = cars
      .filter(function (c) {
        return c.id !== car.id && (c.category === car.category || c.brandId === car.brandId);
      })
      .slice(0, 3);

    // Gallery
    const gallery = car.gallery || [car.image];

    return (
      '<div class="car-detail">' +
        '<div class="container">' +
          // Breadcrumbs
          '<nav class="breadcrumbs" aria-label="Хлебные крошки">' +
            '<a href="#/" data-link="/">Главная</a>' +
            '<span class="breadcrumbs__sep">/</span>' +
            '<a href="#/catalog" data-link="/catalog">Каталог</a>' +
            '<span class="breadcrumbs__sep">/</span>' +
            '<span class="breadcrumbs__current">' + car.name + '</span>' +
          '</nav>' +

          // Hero
          '<div class="car-detail__hero">' +
            '<img src="' + car.image + '" alt="' + brand.name + ' ' + car.name + '" class="car-detail__hero-img" />' +
            '<div class="car-detail__hero-content">' +
              '<div class="car-detail__hero-badges">' +
                '<span class="badge ' + badgeClass + '">' + avail.icon + ' ' + avail.label.replace(/^[^\s]+\s/, '') + '</span>' +
                '<span class="badge badge--glass">' + (category ? category.name : '') + '</span>' +
                '<span class="badge badge--glass">' + car.year + ' год</span>' +
              '</div>' +
              '<div class="car-detail__hero-brand">' + (brand ? brand.name : '') + '</div>' +
              '<h1 class="car-detail__hero-name">' + car.name + '</h1>' +
              '<p class="car-detail__hero-desc">' + window.AutoUtils.truncate(car.history, 200) + '</p>' +
              '<div class="car-detail__hero-actions">' +
                '<button class="btn btn--accent" id="detail-fav"' + (isFav ? ' style="background: #ff5c5c;"' : '') + ' data-fav="' + car.id + '">' +
                  (isFav ? '♥ В избранном' : '♡ В избранное') +
                '</button>' +
                '<a href="#' + (brand ? brand.website : '#') + '" class="btn btn--ghost" target="_blank" rel="noopener">' +
                  '<svg viewBox="0 0 24 24" fill="none" style="width:18px;height:18px;"><path d="M12 3L20 7.5V16.5L12 21L4 16.5V7.5L12 3Z" stroke="currentColor" stroke-width="2"/></svg>' +
                  'Где купить' +
                '</a>' +
              '</div>' +
            '</div>' +
          '</div>' +

          '<div class="car-detail__grid">' +
            '<div class="car-detail__main">' +
              // Gallery
              '<div class="car-detail__section">' +
                '<h2 class="car-detail__section-title">Галерея</h2>' +
                '<div class="gallery" id="detail-gallery">' +
                  gallery.map(function (img, index) {
                    return (
                      '<div class="gallery__item' + (index === 0 ? ' gallery__item--main' : '') + '" data-src="' + img + '">' +
                        '<img src="' + img + '" alt="' + car.name + ' фото ' + (index + 1) + '" class="gallery__img" loading="lazy" />' +
                      '</div>'
                    );
                  }).join('') +
                '</div>' +
              '</div>' +

              // History
              '<div class="car-detail__section">' +
                '<h2 class="car-detail__section-title">История модели</h2>' +
                '<p class="car-detail__text">' + car.history + '</p>' +
                '<div class="car-detail__text">' +
                  '<strong>Производитель:</strong> ' + car.manufacturer + '<br />' +
                  '<strong>Страна:</strong> ' + car.country +
                '</div>' +
              '</div>' +

              // Specs
              '<div class="car-detail__section">' +
                '<h2 class="car-detail__section-title">Технические характеристики</h2>' +
                '<table class="specs-table">' +
                  '<tr><td>Категория</td><td>' + (category ? category.name : '—') + '</td></tr>' +
                  '<tr><td>Год первого выпуска</td><td>' + car.year + '</td></tr>' +
                  '<tr><td>Страна производства</td><td>' + car.country + '</td></tr>' +
                  '<tr><td>Производитель</td><td>' + car.manufacturer + '</td></tr>' +
                  '<tr><td>Тип кузова</td><td>' + car.bodyType + '</td></tr>' +
                  '<tr><td>Тип двигателя</td><td>' + car.engine + '</td></tr>' +
                  '<tr><td>Мощность</td><td>' + car.power + ' л.с.</td></tr>' +
                  '<tr><td>Максимальная скорость</td><td>' + car.topSpeed + ' км/ч</td></tr>' +
                  '<tr><td>Разгон 0–100 км/ч</td><td>' + car.acceleration + ' сек</td></tr>' +
                  '<tr><td>Коробка передач</td><td>' + car.transmission + '</td></tr>' +
                  '<tr><td>Привод</td><td>' + car.drive + '</td></tr>' +
                  '<tr><td>Расход топлива</td><td>' + car.fuelConsumption + '</td></tr>' +
                  '<tr><td>Вес</td><td>' + window.AutoUtils.formatNumber(car.weight) + ' кг</td></tr>' +
                '</table>' +
              '</div>' +

              // Technologies
              '<div class="car-detail__section">' +
                '<h2 class="car-detail__section-title">Основные технологии</h2>' +
                '<ul class="feature-list">' +
                  car.technologies.map(function (t) { return '<li class="feature-list__item">' + t + '</li>'; }).join('') +
                '</ul>' +
              '</div>' +

              // Design
              '<div class="car-detail__section">' +
                '<h2 class="car-detail__section-title">Особенности дизайна</h2>' +
                '<p class="car-detail__text">' + car.design + '</p>' +
              '</div>' +

              // Pros/Cons
              '<div class="car-detail__section">' +
                '<h2 class="car-detail__section-title">Преимущества и недостатки</h2>' +
                '<div class="pros-cons">' +
                  '<div class="pros-cons__col pros-cons__col--pros">' +
                    '<h3 class="pros-cons__title">Преимущества</h3>' +
                    '<ul class="pros-cons__list">' +
                      car.pros.map(function (p) { return '<li class="pros-cons__item">' + p + '</li>'; }).join('') +
                    '</ul>' +
                  '</div>' +
                  '<div class="pros-cons__col pros-cons__col--cons">' +
                    '<h3 class="pros-cons__title">Недостатки</h3>' +
                    '<ul class="pros-cons__list">' +
                      car.cons.map(function (c) { return '<li class="pros-cons__item">' + c + '</li>'; }).join('') +
                    '</ul>' +
                  '</div>' +
                '</div>' +
              '</div>' +

              // Facts
              '<div class="car-detail__section">' +
                '<h2 class="car-detail__section-title">Интересные факты</h2>' +
                '<div class="facts-grid">' +
                  car.facts.map(function (fact, index) {
                    return (
                      '<div class="fact-card">' +
                        '<div class="fact-card__icon">' + ['💡', '⚡', '🏆', '🔧', '🚀'][index % 5] + '</div>' +
                        '<div class="fact-card__text">' + fact + '</div>' +
                      '</div>'
                    );
                  }).join('') +
                '</div>' +
              '</div>' +

              // Video
              (car.video ? (
                '<div class="car-detail__section">' +
                  '<h2 class="car-detail__section-title">Видеообзор</h2>' +
                  '<div class="video-embed">' +
                    '<iframe src="' + car.video + '" title="Видеообзор ' + car.name + '" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' +
                  '</div>' +
                '</div>'
              ) : '') +
            '</div>' +

            // Sidebar
            '<aside class="car-detail__sidebar">' +
              // Availability
              '<div class="car-detail__section">' +
                '<h3 class="car-detail__section-title">Наличие</h3>' +
                '<div class="car-detail__availability car-detail__availability--' + car.availability + '">' +
                  '<div class="car-detail__availability-icon">' + avail.icon + '</div>' +
                  '<div>' +
                    '<div class="car-detail__availability-text">' + avail.label + '</div>' +
                    '<div class="car-detail__availability-sub">' + (car.availability === 'available' ? 'Доступен для заказа' : car.availability === 'limited' ? 'Тираж ограничен' : 'На вторичном рынке') + '</div>' +
                  '</div>' +
                '</div>' +
                '<span class="badge badge--glass">Популярность: ' + car.popularity + '/100</span>' +
              '</div>' +

              // Prices
              '<div class="car-detail__section">' +
                '<h3 class="car-detail__section-title">Цены</h3>' +
                '<div class="car-detail__price-grid">' +
                  '<div class="price-card">' +
                    '<div class="price-card__label">USD</div>' +
                    '<div class="price-card__value">' + window.AutoUtils.formatUSD(car.price.usd) + '</div>' +
                    '<div class="price-card__note">' + (car.availability === 'discontinued' ? 'Цена на вторичном рынке' : 'Ориентировочная цена') + '</div>' +
                  '</div>' +
                  '<div class="price-card">' +
                    '<div class="price-card__label">EUR</div>' +
                    '<div class="price-card__value">' + window.AutoUtils.formatEUR(car.price.eur) + '</div>' +
                    '<div class="price-card__note">Цена в Европе</div>' +
                  '</div>' +
                  '<div class="price-card">' +
                    '<div class="price-card__label">Местная валюта</div>' +
                    '<div class="price-card__value" style="font-size: var(--fs-h3);">' + window.AutoUtils.formatLocal(car.price.local) + '</div>' +
                    '<div class="price-card__note">' + (car.price.local ? car.price.local.note : '') + '</div>' +
                  '</div>' +
                '</div>' +
              '</div>' +

              // Buy links
              '<div class="car-detail__section">' +
                '<h3 class="car-detail__section-title">Где купить</h3>' +
                '<div class="buy-links">' +
                  car.buyLinks.map(function (link, index) {
                    const icons = [
                      '<svg viewBox="0 0 24 24" fill="none"><path d="M8 6V5a4 4 0 118 0v1M6 8h12l1 13H5L6 8Z" stroke="currentColor" stroke-width="2"/></svg>',
                      '<svg viewBox="0 0 24 24" fill="none"><path d="M3 12L5 8h14l2 4v4h-2M3 12v4h18v-4M7 16v2M17 16v2" stroke="currentColor" stroke-width="2"/></svg>',
                      '<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"/><path d="M3 12h18M12 3c2.5 2.6 4 5.6 4 9s-1.5 6.4-4 9c-2.5-2.6-4-5.6-4-9s1.5-6.4 4-9Z" stroke="currentColor" stroke-width="2"/></svg>'
                    ];
                    return (
                      '<a href="' + link.url + '" target="_blank" rel="noopener" class="buy-link">' +
                        '<div class="buy-link__icon">' + icons[index % 3] + '</div>' +
                        '<div class="buy-link__info">' +
                          '<div class="buy-link__name">' + link.name + '</div>' +
                          '<div class="buy-link__type">' + link.type + '</div>' +
                        '</div>' +
                        '<div class="buy-link__arrow">' +
                          '<svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
                        '</div>' +
                      '</a>'
                    );
                  }).join('') +
                '</div>' +
              '</div>' +
            '</aside>' +
          '</div>' +

          // Similar cars
          (similar.length ? (
            '<section class="section">' +
              '<div class="section-head">' +
                '<div class="section-head__left">' +
                  '<div class="section-head__eyebrow">Похожие</div>' +
                  '<h2 class="h2">Похожие автомобили</h2>' +
                '</div>' +
              '</div>' +
              '<div class="similar-cars" id="detail-similar">' +
                similar.map(function (c) { return window.AutoComponents.renderCarCard(c); }).join('') +
              '</div>' +
            '</section>'
          ) : '') +
        '</div>' +
      '</div>'
    );
  };

  /**
   * Initialize car detail page
   * @param {HTMLElement} container - Container element
   */
  P.initCarDetail = function (container) {
    if (!container) return;

    // Favorite button
    const favBtn = container.querySelector('#detail-fav');
    if (favBtn) {
      favBtn.addEventListener('click', function () {
        const carId = favBtn.getAttribute('data-fav');
        const added = window.AutoStore.toggleFavorite(carId);
        window.AutoStore.updateFavoritesBadge();

        if (added) {
          favBtn.textContent = '♥ В избранном';
          favBtn.style.background = '#ff5c5c';
          window.AutoComponents.showToast('Добавлено в избранное', 'success');
        } else {
          favBtn.textContent = '♡ В избранное';
          favBtn.style.background = '';
          window.AutoComponents.showToast('Удалено из избранного');
        }
      });
    }

    // Gallery lightbox
    const galleryItems = container.querySelectorAll('.gallery__item[data-src]');
    if (galleryItems.length) {
      // Create lightbox
      const lightbox = document.createElement('div');
      lightbox.className = 'lightbox';
      lightbox.innerHTML = (
        '<button class="lightbox__close" aria-label="Закрыть">' +
          '<svg viewBox="0 0 24 24" fill="none"><path d="M6 6L18 18M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>' +
        '</button>' +
        '<img src="" alt="Просмотр фото" class="lightbox__img" />'
      );
      document.body.appendChild(lightbox);

      const lightboxImg = lightbox.querySelector('.lightbox__img');
      const closeBtn = lightbox.querySelector('.lightbox__close');

      galleryItems.forEach(function (item) {
        item.addEventListener('click', function () {
          lightboxImg.src = item.getAttribute('data-src');
          lightbox.classList.add('is-open');
          document.body.classList.add('lock-scroll');
        });
      });

      function closeLightbox() {
        lightbox.classList.remove('is-open');
        document.body.classList.remove('lock-scroll');
      }

      closeBtn.addEventListener('click', closeLightbox);
      lightbox.addEventListener('click', function (e) {
        if (e.target === lightbox) closeLightbox();
      });
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeLightbox();
      });
    }

    // Similar cars
    const similar = container.querySelector('#detail-similar');
    if (similar) window.AutoComponents.initCarCards(similar);
  };
})(window.AutoPages);