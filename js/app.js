(function () {
  'use strict';

  /**
   * Initialize the application
   */
  function init() {
    // Initialize preloader
    window.AutoComponents.initPreloader();

    // Initialize cursor glow
    window.AutoComponents.initCursorGlow();

    // Initialize header (scroll, mobile menu, search)
    window.AutoComponents.initHeader();

    // Initialize to-top button
    window.AutoComponents.initToTop();

    // Update favorites badge
    window.AutoStore.updateFavoritesBadge();

    // Initialize router
    window.AutoRouter.init();
  }

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();