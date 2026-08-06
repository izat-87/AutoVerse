window.AutoUtils = window.AutoUtils || {};

(function (U) {
  'use strict';

  /**
   * Format a number with thousands separators
   * @param {number} value - The number to format
   * @returns {string} Formatted number
   */
  U.formatNumber = function (value) {
    if (value === null || value === undefined) return '—';
    return new Intl.NumberFormat('ru-RU').format(value);
  };

  /**
   * Format a price in USD
   * @param {number} value - Price in USD
   * @returns {string} Formatted price
   */
  U.formatUSD = function (value) {
    if (value === null || value === undefined) return '—';
    if (value >= 1000000) {
      return '$' + (value / 1000000).toFixed(value % 1000000 === 0 ? 0 : 1).replace('.', ',') + ' млн';
    }
    if (value >= 1000) {
      return '$' + U.formatNumber(value);
    }
    return '$' + value;
  };

  /**
   * Format a price in EUR
   * @param {number} value - Price in EUR
   * @returns {string} Formatted price
   */
  U.formatEUR = function (value) {
    if (value === null || value === undefined) return '—';
    if (value >= 1000000) {
      return '€' + (value / 1000000).toFixed(value % 1000000 === 0 ? 0 : 1).replace('.', ',') + ' млн';
    }
    if (value >= 1000) {
      return '€' + U.formatNumber(value);
    }
    return '€' + value;
  };

  /**
   * Format a local price
   * @param {Object} local - Local price object { value, currency, note }
   * @returns {string} Formatted local price
   */
  U.formatLocal = function (local) {
    if (!local || !local.value) return '—';
    return U.formatNumber(local.value) + ' ' + local.currency;
  };

  /**
   * Format a date string to Russian format
   * @param {string} dateStr - ISO date string
   * @returns {string} Formatted date
   */
  U.formatDate = function (dateStr) {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  /**
   * Get availability config
   * @param {string} status - Availability status
   * @returns {Object} { label, className, icon }
   */
  U.getAvailability = function (status) {
    const map = {
      available: { label: '✅ В продаже', className: 'availability--success', icon: '✅' },
      dealer: { label: '🟢 Доступен у официальных дилеров', className: 'availability--success', icon: '🟢' },
      limited: { label: '🟡 Ограниченная серия', className: 'availability--warning', icon: '🟡' },
      discontinued: { label: '🔴 Производство завершено', className: 'availability--danger', icon: '🔴' }
    };
    return map[status] || map.available;
  };

  /**
   * Get badge class for availability
   * @param {string} status - Availability status
   * @returns {string} Badge class
   */
  U.getAvailabilityBadge = function (status) {
    const map = {
      available: 'badge--success',
      dealer: 'badge--success',
      limited: 'badge--warning',
      discontinued: 'badge--danger'
    };
    return map[status] || 'badge--info';
  };

  /**
   * Escape HTML to prevent XSS
   * @param {string} str - String to escape
   * @returns {string} Escaped string
   */
  U.escapeHtml = function (str) {
    if (!str) return '';
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  };

  /**
   * Truncate a string
   * @param {string} str - String to truncate
   * @param {number} maxLength - Maximum length
   * @returns {string} Truncated string
   */
  U.truncate = function (str, maxLength) {
    if (!str) return '';
    if (str.length <= maxLength) return str;
    return str.substring(0, maxLength - 3) + '...';
  };

  /**
   * Debounce a function
   * @param {Function} fn - Function to debounce
   * @param {number} delay - Delay in ms
   * @returns {Function} Debounced function
   */
  U.debounce = function (fn, delay) {
    let timer;
    return function () {
      const context = this;
      const args = arguments;
      clearTimeout(timer);
      timer = setTimeout(function () {
        fn.apply(context, args);
      }, delay);
    };
  };

  /**
   * Slugify a string
   * @param {string} str - String to slugify
   * @returns {string} Slug
   */
  U.slugify = function (str) {
    if (!str) return '';
    return str
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };
})(window.AutoUtils);