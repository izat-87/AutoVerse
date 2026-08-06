window.AutoStore = window.AutoStore || {};

(function (S) {
  'use strict';

  const FAVORITES_KEY = 'autoverse_favorites';
  const VIEWS_KEY = 'autoverse_views';

  /**
   * Get favorites from localStorage
   * @returns {Array<string>} Array of car IDs
   */
  S.getFavorites = function () {
    try {
      const data = localStorage.getItem(FAVORITES_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  };

  /**
   * Check if a car is in favorites
   * @param {string} carId - Car ID
   * @returns {boolean} True if in favorites
   */
  S.isFavorite = function (carId) {
    return S.getFavorites().includes(carId);
  };

  /**
   * Toggle a car in favorites
   * @param {string} carId - Car ID
   * @returns {boolean} True if added, false if removed
   */
  S.toggleFavorite = function (carId) {
    const favorites = S.getFavorites();
    const index = favorites.indexOf(carId);
    let added = false;

    if (index === -1) {
      favorites.push(carId);
      added = true;
    } else {
      favorites.splice(index, 1);
    }

    try {
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    } catch (e) {
      // Storage might be full or unavailable
    }

    return added;
  };

  /**
   * Get recently viewed cars
   * @returns {Array<string>} Array of car IDs
   */
  S.getRecentlyViewed = function () {
    try {
      const data = localStorage.getItem(VIEWS_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  };

  /**
   * Add a car to recently viewed
   * @param {string} carId - Car ID
   */
  S.addRecentlyViewed = function (carId) {
    const views = S.getRecentlyViewed();
    const index = views.indexOf(carId);

    if (index !== -1) {
      views.splice(index, 1);
    }

    views.unshift(carId);

    // Keep only last 20
    const trimmed = views.slice(0, 20);

    try {
      localStorage.setItem(VIEWS_KEY, JSON.stringify(trimmed));
    } catch (e) {
      // Storage might be full or unavailable
    }
  };

  /**
   * Update favorites badge in header
   */
  S.updateFavoritesBadge = function () {
    const badge = document.getElementById('fav-count');
    if (!badge) return;

    const count = S.getFavorites().length;
    if (count > 0) {
      badge.textContent = count;
      badge.hidden = false;
    } else {
      badge.hidden = true;
    }
  };
})(window.AutoStore);