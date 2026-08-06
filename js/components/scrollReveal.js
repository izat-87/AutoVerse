window.AutoComponents = window.AutoComponents || {};

(function (C) {
  'use strict';

  /**
   * Initialize scroll reveal animations
   */
  C.initScrollReveal = function () {
    const elements = document.querySelectorAll('[data-reveal]');

    if (!('IntersectionObserver' in window)) {
      elements.forEach(function (el) {
        el.classList.add('is-revealed');
      });
      return;
    }

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    elements.forEach(function (el) {
      observer.observe(el);
    });
  };

  /**
   * Initialize cursor glow effect
   */
  C.initCursorGlow = function () {
    const glow = document.getElementById('cursor-glow');
    if (!glow) return;

    if (window.matchMedia('(hover: none)').matches) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = mouseX;
    let currentY = mouseY;
    let rafId = null;

    document.addEventListener('mousemove', function (e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!rafId) {
        rafId = requestAnimationFrame(update);
      }
    });

    function update() {
      currentX += (mouseX - currentX) * 0.08;
      currentY += (mouseY - currentY) * 0.08;
      glow.style.left = currentX + 'px';
      glow.style.top = currentY + 'px';
      rafId = null;
    }
  };

  /**
   * Initialize toast notifications
   */
  C.showToast = function (message, type) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast' + (type ? ' toast--' + type : '');
    toast.textContent = message;
    container.appendChild(toast);

    setTimeout(function () {
      toast.classList.add('toast--hide');
      setTimeout(function () {
        toast.remove();
      }, 400);
    }, 3000);
  };

  /**
   * Initialize to-top button
   */
  C.initToTop = function () {
    const btn = document.getElementById('to-top');
    if (!btn) return;

    window.addEventListener('scroll', function () {
      if (window.scrollY > 600) {
        btn.classList.add('is-visible');
      } else {
        btn.classList.remove('is-visible');
      }
    }, { passive: true });

    btn.addEventListener('click', function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  };

  /**
   * Initialize preloader
   */
  C.initPreloader = function () {
    const preloader = document.getElementById('preloader');
    if (!preloader) return;

    window.addEventListener('load', function () {
      setTimeout(function () {
        preloader.classList.add('is-hidden');
      }, 400);
    });

    // Fallback: hide after 3 seconds
    setTimeout(function () {
      preloader.classList.add('is-hidden');
    }, 3000);
  };
})(window.AutoComponents);