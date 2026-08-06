window.AutoComponents = window.AutoComponents || {};

(function (C) {
  'use strict';

  /**
   * Generate a unique SVG image for a car
   * @param {Object} car - Car data
   * @param {Object} options - Options { width, height }
   * @returns {string} SVG data URI
   */
  C.generateCarImage = function (car, options) {
    options = options || {};
    const width = options.width || 800;
    const height = options.height || 500;

    const brands = window.AUTO_DATA.brands || [];
    const brand = brands.find(function (b) { return b.id === car.brandId; });
    const brandColor = brand ? brand.color : '#ffb800';
    const brandName = brand ? brand.name : '';

    // Generate a unique gradient based on car ID
    const hue1 = hashHue(car.id);
    const hue2 = (hue1 + 40) % 360;

    // Car silhouette paths by category
    const silhouettes = {
      hypercar: 'M120,340 L180,220 L260,180 L420,160 L560,180 L640,220 L700,340 L620,360 L560,300 L260,300 L200,360 Z',
      supercar: 'M140,330 L200,230 L280,190 L420,170 L560,190 L640,230 L700,330 L620,350 L560,290 L280,290 L220,350 Z',
      luxury: 'M100,350 L160,250 L240,220 L400,200 L560,220 L640,250 L700,350 L620,370 L560,310 L240,310 L180,370 Z',
      sports: 'M150,335 L210,240 L290,200 L420,180 L550,200 L630,240 L690,335 L610,355 L550,295 L290,295 L230,355 Z',
      electric: 'M130,330 L190,230 L270,190 L420,170 L570,190 L650,230 L710,330 L630,350 L570,290 L270,290 L210,350 Z',
      suv: 'M80,360 L140,280 L220,250 L400,230 L580,250 L660,280 L720,360 L640,380 L580,320 L220,320 L160,380 Z',
      classic: 'M160,340 L220,260 L300,230 L420,220 L540,230 L620,260 L680,340 L600,360 L540,300 L300,300 L240,360 Z',
      rare: 'M110,335 L170,225 L250,185 L420,165 L590,185 L670,225 L730,335 L650,355 L590,295 L250,295 L190,355 Z',
      limited: 'M125,338 L185,235 L265,195 L420,175 L575,195 L655,235 L715,338 L635,358 L575,298 L265,298 L205,358 Z',
      concept: 'M100,320 L160,200 L240,160 L420,140 L600,160 L680,200 L740,320 L660,340 L600,280 L240,280 L180,340 Z'
    };

    const silhouette = silhouettes[car.category] || silhouettes.supercar;

    // Wheels
    const wheels = '<circle cx="260" cy="340" r="45" fill="#0a0a0f" stroke="' + brandColor + '" stroke-width="4"/>' +
                   '<circle cx="260" cy="340" r="18" fill="' + brandColor + '"/>' +
                   '<circle cx="560" cy="340" r="45" fill="#0a0a0f" stroke="' + brandColor + '" stroke-width="4"/>' +
                   '<circle cx="560" cy="340" r="18" fill="' + brandColor + '"/>';

    // Headlight
    const headlight = '<ellipse cx="680" cy="250" rx="18" ry="8" fill="#fff" opacity="0.9"/>' +
                      '<ellipse cx="680" cy="250" rx="10" ry="4" fill="#ffd700"/>';

    // Taillight
    const taillight = '<ellipse cx="150" cy="260" rx="12" ry="6" fill="#ff3d00" opacity="0.9"/>';

    // Speed lines
    const speedLines = '<line x1="60" y1="300" x2="120" y2="300" stroke="' + brandColor + '" stroke-width="3" opacity="0.4"/>' +
                       '<line x1="40" y1="320" x2="110" y2="320" stroke="' + brandColor + '" stroke-width="2" opacity="0.3"/>' +
                       '<line x1="50" y1="340" x2="115" y2="340" stroke="' + brandColor + '" stroke-width="2" opacity="0.2"/>';

    // Ground shadow
    const shadow = '<ellipse cx="410" cy="395" rx="320" ry="15" fill="#000" opacity="0.4"/>';

    // Stars/particles
    const particles = generateParticles(car.id);

    const svg = (
      '<svg xmlns="http://www.w3.org/2000/svg" width="' + width + '" height="' + height + '" viewBox="0 0 800 500">' +
        '<defs>' +
          '<linearGradient id="bg-' + car.id + '" x1="0" y1="0" x2="1" y2="1">' +
            '<stop offset="0%" stop-color="hsl(' + hue1 + ', 60%, 12%)"/>' +
            '<stop offset="100%" stop-color="hsl(' + hue2 + ', 50%, 6%)"/>' +
          '</linearGradient>' +
          '<linearGradient id="car-' + car.id + '" x1="0" y1="0" x2="1" y2="1">' +
            '<stop offset="0%" stop-color="' + brandColor + '"/>' +
            '<stop offset="100%" stop-color="hsl(' + hue2 + ', 70%, 40%)"/>' +
          '</linearGradient>' +
          '<radialGradient id="glow-' + car.id + '" cx="50%" cy="40%" r="60%">' +
            '<stop offset="0%" stop-color="' + brandColor + '" stop-opacity="0.15"/>' +
            '<stop offset="100%" stop-color="transparent"/>' +
          '</radialGradient>' +
        '</defs>' +
        '<rect width="800" height="500" fill="url(#bg-' + car.id + ')"/>' +
        '<rect width="800" height="500" fill="url(#glow-' + car.id + ')"/>' +
        // Grid pattern
        '<g opacity="0.05" stroke="#fff" stroke-width="1">' +
          '<line x1="0" y1="100" x2="800" y2="100"/><line x1="0" y1="200" x2="800" y2="200"/>' +
          '<line x1="0" y1="300" x2="800" y2="300"/><line x1="0" y1="400" x2="800" y2="400"/>' +
          '<line x1="100" y1="0" x2="100" y2="500"/><line x1="200" y1="0" x2="200" y2="500"/>' +
          '<line x1="300" y1="0" x2="300" y2="500"/><line x1="400" y1="0" x2="400" y2="500"/>' +
          '<line x1="500" y1="0" x2="500" y2="500"/><line x1="600" y1="0" x2="600" y2="500"/>' +
          '<line x1="700" y1="0" x2="700" y2="500"/>' +
        '</g>' +
        particles +
        speedLines +
        shadow +
        // Car body
        '<path d="' + silhouette + '" fill="url(#car-' + car.id + ')" stroke="' + brandColor + '" stroke-width="3"/>' +
        // Window
        '<path d="M300,290 L360,210 L440,200 L520,210 L560,290 Z" fill="#0a0a0f" opacity="0.7"/>' +
        headlight +
        taillight +
        wheels +
        // Brand name
        '<text x="400" y="80" text-anchor="middle" font-family="Arial, sans-serif" font-size="28" font-weight="bold" fill="' + brandColor + '" letter-spacing="4">' + brandName.toUpperCase() + '</text>' +
        // Car name
        '<text x="400" y="120" text-anchor="middle" font-family="Arial, sans-serif" font-size="36" font-weight="bold" fill="#fff" letter-spacing="2">' + car.name.toUpperCase() + '</text>' +
        // Specs
        '<text x="400" y="460" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="#a0a0ad" letter-spacing="1">' +
          car.power + ' л.с. · 0-100: ' + car.acceleration + 'с · Макс: ' + car.topSpeed + ' км/ч' +
        '</text>' +
      '</svg>'
    );

    return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  };

  /**
   * Generate a deterministic hue from a string
   * @param {string} str - Input string
   * @returns {number} Hue value 0-360
   */
  function hashHue(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = ((hash << 5) - hash) + str.charCodeAt(i);
      hash |= 0;
    }
    return Math.abs(hash) % 360;
  }

  /**
   * Generate decorative particles
   * @param {string} seed - Seed string
   * @returns {string} SVG particles
   */
  function generateParticles(seed) {
    let hash = 0;
    for (let i = 0; i < seed.length; i++) {
      hash = ((hash << 5) - hash) + seed.charCodeAt(i);
      hash |= 0;
    }

    let particles = '';
    for (let i = 0; i < 20; i++) {
      const x = 50 + Math.abs(Math.sin(hash + i * 37) * 700);
      const y = 50 + Math.abs(Math.cos(hash + i * 53) * 400);
      const r = 1 + Math.abs(Math.sin(hash + i * 7) * 2);
      const opacity = 0.1 + Math.abs(Math.sin(hash + i * 11) * 0.3);
      particles += '<circle cx="' + x.toFixed(0) + '" cy="' + y.toFixed(0) + '" r="' + r.toFixed(1) + '" fill="#fff" opacity="' + opacity.toFixed(2) + '"/>';
    }
    return particles;
  }
})(window.AutoComponents);