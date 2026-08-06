// Runtime patch: override all car images and galleries using brand/model Unsplash queries
(function () {
  if (!window.AUTO_DATA || !Array.isArray(window.AUTO_DATA.cars)) return;

  function safeQuery(str) {
    return encodeURIComponent(String(str || '').replace(/[\s,]+/g, '+'));
  }

  function formatCarQuery(car) {
    var parts = [];
    if (car.brandId) parts.push(car.brandId);
    if (car.name) parts.push(car.name);
    if (car.category) parts.push(car.category);
    return parts.join(',');
  }

  window.AUTO_DATA.cars.forEach(function (car) {
    try {
      if (!car) return;
      var query = safeQuery(formatCarQuery(car) || 'car');
      var baseImg = 'https://source.unsplash.com/1200x800/?' + query + '&orientation=landscape';
      var baseGallery = 'https://source.unsplash.com/800x600/?' + query + '&orientation=landscape';

      car.image = baseImg;
      car.gallery = [
        baseGallery + '&sig=1',
        baseGallery + '&sig=2',
        baseGallery + '&sig=3'
      ];
    } catch (e) {
      // noop
    }
  });
})();
