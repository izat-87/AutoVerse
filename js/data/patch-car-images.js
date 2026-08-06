// Простой runtime-патч: если у машины нет car.image / car.gallery — заполнить их запросами к Unsplash
(function () {
  if (!window.AUTO_DATA || !Array.isArray(window.AUTO_DATA.cars)) return;

  function safeQuery(str) {
    return encodeURIComponent(String(str || '').replace(/[,\s]+/g, '+'));
  }

  window.AUTO_DATA.cars.forEach(function (car) {
    try {
      if (!car) return;
      if (!car.image || car.image === '') {
        var base = 'https://source.unsplash.com/1200x800/?';
        var q = (car.brandId ? car.brandId + ',' : '') + (car.name || 'car');
        car.image = base + safeQuery(q) + '&orientation=landscape';
      }

      if (!Array.isArray(car.gallery) || car.gallery.length === 0) {
        var baseG = 'https://source.unsplash.com/800x600/?';
        var qg = (car.brandId ? car.brandId + ',' : '') + (car.name || 'car');
        car.gallery = [
          baseG + safeQuery(qg) + '&sig=1&orientation=landscape',
          baseG + safeQuery(qg) + '&sig=2&orientation=landscape',
          baseG + safeQuery(qg) + '&sig=3&orientation=landscape'
        ];
      }
    } catch (e) {
      // noop
    }
  });
})();
