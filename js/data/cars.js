window.AUTO_DATA = window.AUTO_DATA || {};

window.AUTO_DATA.cars = [
  // ============ ГИПЕРКАРЫ ============
  {
    id: 'bugatti-chiron',
    brandId: 'bugatti',
    name: 'Chiron',
    category: 'hypercar',
    year: 2016,
    country: 'Франция',
    manufacturer: 'Bugatti Automobiles S.A.S.',
    bodyType: 'Купе',
    engine: '8.0L W16 Quad-Turbo',
    power: 1500,
    topSpeed: 420,
    acceleration: 2.4,
    transmission: '7-ступенчатая DSG',
    drive: 'Полный',
    fuelConsumption: '22.5 л/100 км',
    weight: 1995,
    price: {
      usd: 3000000,
      eur: 2750000,
      local: { value: 2750000, currency: '€', note: 'Цена в Европе' }
    },
    availability: 'limited',
    availabilityText: 'Ограниченная серия',
    popularity: 98,
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1200&q=80',
      'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=1200&q=80',
      'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1200&q=80'
    ],
    video: 'https://www.youtube.com/embed/PkkV1vXzQxU',
    history: 'Bugatti Chiron был представлен в 2016 году на Женевском автосалоне как наследник легендарного Veyron. Назван в честь гонщика Луи Широна. Автомобиль стал первым серийным автомобилем с двигателем мощностью 1500 л.с. и разгоном до 100 км/ч за 2.4 секунды. Каждый Chiron собирается вручную в Мольсайме, Франция, и требует более 6 месяцев на производство.',
    facts: [
      'Двигатель W16 состоит из 16 цилиндров в W-образной конфигурации',
      'Максимальная скорость ограничена электроникой на 420 км/ч',
      'Каждый автомобиль проходит 6 месяцев ручной сборки',
      'Только 500 экземпляров было выпущено',
      'Система охлаждения прокачивает 80 000 литров воздуха в минуту'
    ],
    technologies: ['W16 Quad-Turbo', 'Карбоновый монокок', 'Активная аэродинамика', 'Система охлаждения из 10 радиаторов'],
    design: 'Агрессивный, аэродинамический дизайн с фирменной решёткой в форме подковы. Каждая деталь продумана для максимальной аэродинамической эффективности.',
    pros: ['Невероятная мощность', 'Рекордная скорость', 'Ручная сборка', 'Эксклюзивность'],
    cons: ['Огромная цена', 'Высокий расход топлива', 'Сложность обслуживания', 'Ограниченная практичность'],
    buyLinks: [
      { name: 'Официальный сайт Bugatti', type: 'Производитель', url: 'https://www.bugatti.com' },
      { name: 'Bugatti Molsheim', type: 'Официальный дилер', url: 'https://www.bugatti.com/contact' }
    ]
  },
  {
    id: 'koenigsegg-jesko',
    brandId: 'koenigsegg',
    name: 'Jesko',
    category: 'hypercar',
    year: 2019,
    country: 'Швеция',
    manufacturer: 'Koenigsegg Automotive AB',
    bodyType: 'Купе',
    engine: '5.0L V8 Twin-Turbo',
    power: 1600,
    topSpeed: 480,
    acceleration: 2.5,
    transmission: '9-ступенчатая LST',
    drive: 'Задний',
    fuelConsumption: '18 л/100 км',
    weight: 1420,
    price: {
      usd: 2800000,
      eur: 2600000,
      local: { value: 28000000, currency: 'SEK', note: 'Цена в Швеции' }
    },
    availability: 'limited',
    availabilityText: 'Ограниченная серия',
    popularity: 95,
    image: 'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=1200&q=80',
      'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1200&q=80',
      'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1200&q=80'
    ],
    video: 'https://www.youtube.com/embed/9p3ZP2n0n0I',
    history: 'Koenigsegg Jesko был представлен в 2019 году на Женевском автосалоне и назван в честь отца основателя компании — Йеско фон Кёнигсегга. Автомобиль создан для достижения максимальной скорости и оснащён революционной 9-ступенчатой трансмиссией Light Speed Transmission (LST), которая переключает передачи быстрее любой другой коробки в мире.',
    facts: [
      'Двигатель развивает 1600 л.с. на обычном топливе и 1280 л.с. на E85',
      'Трансмиссия LST переключает передачи за миллисекунды',
      'Аэродинамика генерирует до 1400 кг прижимной силы',
      'Кузов полностью из карбона',
      'Создан для побития рекорда скорости'
    ],
    technologies: ['V8 Twin-Turbo', 'Трансмиссия LST', 'Карбоновый монокок', 'Активная аэродинамика'],
    design: 'Футуристический дизайн с огромным задним антикрылом и уникальной аэродинамикой. Каждая линия кузова работает на прижимную силу.',
    pros: ['Рекордная мощность', 'Инновационная трансмиссия', 'Лёгкий карбоновый кузов', 'Эксклюзивность'],
    cons: ['Огромная цена', 'Ограниченная серия', 'Сложность обслуживания', 'Не для повседневной езды'],
    buyLinks: [
      { name: 'Официальный сайт Koenigsegg', type: 'Производитель', url: 'https://www.koenigsegg.com' },
      { name: 'Koenigsegg Ängelholm', type: 'Штаб-квартира', url: 'https://www.koenigsegg.com/contact' }
    ]
  },
  {
    id: 'pagani-huayra',
    brandId: 'pagani',
    name: 'Huayra',
    category: 'hypercar',
    year: 2012,
    country: 'Италия',
    manufacturer: 'Pagani Automobili S.p.A.',
    bodyType: 'Купе',
    engine: '6.0L V12 Twin-Turbo',
    power: 730,
    topSpeed: 370,
    acceleration: 3.3,
    transmission: '7-ступенчатая секвентальная',
    drive: 'Задний',
    fuelConsumption: '15 л/100 км',
    weight: 1350,
    price: {
      usd: 2500000,
      eur: 2300000,
      local: { value: 2300000, currency: '€', note: 'Цена в Италии' }
    },
    availability: 'limited',
    availabilityText: 'Ограниченная серия',
    popularity: 93,
    image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1200&q=80',
      'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1200&q=80',
      'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=1200&q=80'
    ],
    video: 'https://www.youtube.com/embed/8j5n0n0n0n0',
    history: 'Pagani Huayra был представлен в 2012 году как наследник легендарного Zonda. Назван в честь бога ветра Уайра из мифологии инков. Каждый автомобиль — это произведение искусства, созданное вручную в Модене, Италия. Интерьер сочетает карбон, титан и кожу ручной работы.',
    facts: [
      'Назван в честь бога ветра Уайра',
      'Каждый автомобиль собирается вручную',
      'Использует титан и карбон в конструкции',
      'Активные аэродинамические закрылки',
      'Только 100 экземпляров выпущено'
    ],
    technologies: ['V12 Twin-Turbo от AMG', 'Карбон-титановый монокок', 'Активная аэродинамика', 'Ручная сборка'],
    design: 'Скульптурный дизайн, сочетающий искусство и инженерию. Каждая деталь — от выхлопной системы до интерьера — создана вручную.',
    pros: ['Произведение искусства', 'Ручная сборка', 'Эксклюзивность', 'Уникальный дизайн'],
    cons: ['Огромная цена', 'Ограниченная серия', 'Долгое ожидание', 'Сложность обслуживания'],
    buyLinks: [
      { name: 'Официальный сайт Pagani', type: 'Производитель', url: 'https://www.pagani.com' },
      { name: 'Pagani Modena', type: 'Штаб-квартира', url: 'https://www.pagani.com/contact' }
    ]
  },
  {
    id: 'mclaren-speedtail',
    brandId: 'mclaren',
    name: 'Speedtail',
    category: 'hypercar',
    year: 2019,
    country: 'Великобритания',
    manufacturer: 'McLaren Automotive',
    bodyType: 'Купе',
    engine: '4.0L V8 Hybrid',
    power: 1050,
    topSpeed: 403,
    acceleration: 2.9,
    transmission: '7-ступенчатая SSG',
    drive: 'Задний',
    fuelConsumption: '12 л/100 км',
    weight: 1430,
    price: {
      usd: 2200000,
      eur: 2000000,
      local: { value: 1700000, currency: '£', note: 'Цена в Великобритании' }
    },
    availability: 'limited',
    availabilityText: 'Ограниченная серия',
    popularity: 90,
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1200&q=80',
      'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1200&q=80',
      'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=1200&q=80'
    ],
    video: 'https://www.youtube.com/embed/8j5n0n0n0n0',
    history: 'McLaren Speedtail — это гиперкар в стиле «tail» (хвост), наследник легендарного F1. Представлен в 2019 году. Отличается центральным расположением водителя и тремя сиденьями, как в оригинальном F1. Гибридная силовая установка развивает 1050 л.с. и позволяет разогнаться до 403 км/ч.',
    facts: [
      'Центральное расположение водителя, как в McLaren F1',
      'Гибридная силовая установка',
      'Максимальная скорость 403 км/ч',
      'Только 106 экземпляров',
      'Карбоновый монокок'
    ],
    technologies: ['V8 Hybrid', 'Карбоновый монокок', 'Активная аэродинамика', 'Центральное расположение водителя'],
    design: 'Аэродинамический «хвост» и гладкие линии, созданные для максимальной эффективности. Дизайн вдохновлён McLaren F1.',
    pros: ['Гибридная мощность', 'Уникальная компоновка', 'Рекордная скорость', 'Эксклюзивность'],
    cons: ['Огромная цена', 'Ограниченная серия', 'Сложность обслуживания', 'Не для повседневной езды'],
    buyLinks: [
      { name: 'Официальный сайт McLaren', type: 'Производитель', url: 'https://www.mclaren.com' },
      { name: 'McLaren Woking', type: 'Штаб-квартира', url: 'https://www.mclaren.com/contact' }
    ]
  },
  {
    id: 'lamborghini-sian',
    brandId: 'lamborghini',
    name: 'Sián FKP 37',
    category: 'hypercar',
    year: 2019,
    country: 'Италия',
    manufacturer: 'Automobili Lamborghini S.p.A.',
    bodyType: 'Купе',
    engine: '6.5L V12 Hybrid',
    power: 819,
    topSpeed: 350,
    acceleration: 2.8,
    transmission: '7-ступенчатая ISR',
    drive: 'Полный',
    fuelConsumption: '19 л/100 км',
    weight: 1595,
    price: {
      usd: 3600000,
      eur: 3300000,
      local: { value: 3300000, currency: '€', note: 'Цена в Италии' }
    },
    availability: 'limited',
    availabilityText: 'Ограниченная серия',
    popularity: 94,
    image: 'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=1200&q=80',
      'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1200&q=80',
      'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1200&q=80'
    ],
    video: 'https://www.youtube.com/embed/8j5n0n0n0n0',
    history: 'Lamborghini Sián FKP 37 — первый гибридный автомобиль Lamborghini. Представлен в 2019 году. Название «Sián» означает «молния» на болонском диалекте, а «FKP 37» — дань уважения Фердинанду Карлу Пиеху, бывшему председателю Volkswagen Group. Гибридная система использует суперконденсатор вместо традиционной батареи.',
    facts: [
      'Первый гибридный Lamborghini',
      'Использует суперконденсатор вместо батареи',
      'Название означает «молния» на болонском диалекте',
      'Только 63 экземпляра купе и 19 родстеров',
      'V12 — последний без электрификации в истории бренда'
    ],
    technologies: ['V12 Hybrid', 'Суперконденсатор', 'Полный привод', 'Активная аэродинамика'],
    design: 'Агрессивный, футуристический дизайн с характерными Y-образными светодиодными фарами и уникальными аэродинамическими элементами.',
    pros: ['Первый гибрид Lamborghini', 'Мощный V12', 'Эксклюзивность', 'Инновационная технология'],
    cons: ['Огромная цена', 'Ограниченная серия', 'Сложность обслуживания', 'Высокий расход'],
    buyLinks: [
      { name: 'Официальный сайт Lamborghini', type: 'Производитель', url: 'https://www.lamborghini.com' },
      { name: 'Lamborghini Sant\'Agata', type: 'Штаб-квартира', url: 'https://www.lamborghini.com/contact' }
    ]
  },
  {
    id: 'ferrari-laferrari',
    brandId: 'ferrari',
    name: 'LaFerrari',
    category: 'hypercar',
    year: 2013,
    country: 'Италия',
    manufacturer: 'Ferrari S.p.A.',
    bodyType: 'Купе',
    engine: '6.3L V12 Hybrid',
    power: 963,
    topSpeed: 350,
    acceleration: 2.9,
    transmission: '7-ступенчатая DCT',
    drive: 'Задний',
    fuelConsumption: '14 л/100 км',
    weight: 1585,
    price: {
      usd: 3000000,
      eur: 2800000,
      local: { value: 2800000, currency: '€', note: 'Цена в Италии' }
    },
    availability: 'limited',
    availabilityText: 'Ограниченная серия',
    popularity: 96,
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1200&q=80',
      'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1200&q=80',
      'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=1200&q=80'
    ],
    video: 'https://www.youtube.com/embed/8j5n0n0n0n0',
    history: 'LaFerrari — первый гибридный гиперкар Ferrari, представленный в 2013 году на Женевском автосалоне. Название буквально означает «Феррари Феррари», подчёркивая, что это вершина инженерной мысли бренда. Гибридная система HY-KERS сочетает V12 с электрическим мотором, развивая суммарно 963 л.с.',
    facts: [
      'Первый гибридный гиперкар Ferrari',
      'Система HY-KERS разработана на основе Формулы-1',
      'Только 499 купе и 210 родстеров',
      'Все экземпляры были распроданы до официального дебюта',
      'Разгон до 200 км/ч за 7 секунд'
    ],
    technologies: ['V12 Hybrid', 'Система HY-KERS', 'Карбоновый монокок', 'Активная аэродинамика'],
    design: 'Элегантный, но агрессивный дизайн с плавными линиями и активными аэродинамическими элементами, разработанными в аэродинамической трубе.',
    pros: ['Гибридная мощность', 'Наследие Формулы-1', 'Эксклюзивность', 'Инвестиционная ценность'],
    cons: ['Огромная цена', 'Ограниченная серия', 'Сложность обслуживания', 'Не для повседневной езды'],
    buyLinks: [
      { name: 'Официальный сайт Ferrari', type: 'Производитель', url: 'https://www.ferrari.com' },
      { name: 'Ferrari Maranello', type: 'Штаб-квартира', url: 'https://www.ferrari.com/contact' }
    ]
  },
  {
    id: 'porsche-918-spyder',
    brandId: 'porsche',
    name: '918 Spyder',
    category: 'hypercar',
    year: 2013,
    country: 'Германия',
    manufacturer: 'Porsche AG',
    bodyType: 'Родстер',
    engine: '4.6L V8 Hybrid',
    power: 887,
    topSpeed: 345,
    acceleration: 2.6,
    transmission: '7-ступенчатая PDK',
    drive: 'Полный',
    fuelConsumption: '3.1 л/100 км (гибрид)',
    weight: 1700,
    price: {
      usd: 845000,
      eur: 780000,
      local: { value: 780000, currency: '€', note: 'Цена в Германии' }
    },
    availability: 'limited',
    availabilityText: 'Ограниченная серия',
    popularity: 92,
    image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1200&q=80',
      'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1200&q=80',
      'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=1200&q=80'
    ],
    video: 'https://www.youtube.com/embed/8j5n0n0n0n0',
    history: 'Porsche 918 Spyder — гибридный гиперкар, представленный в 2013 году. Вместе с LaFerrari и McLaren P1 составил «Святую Троицу» гиперкаров. Установил рекорд Нюрбургринга — 6:57, став первым серийным автомобилем, преодолевшим отметку 7 минут.',
    facts: [
      'Первый серийный автомобиль быстрее 7 минут на Нюрбургринге',
      'Гибридная система с двумя электромоторами',
      'Расход всего 3.1 л/100 км в гибридном режиме',
      'Только 918 экземпляров',
      'Крыша-тарга снимается и хранится в багажнике'
    ],
    technologies: ['V8 Hybrid', 'Полный привод', 'PDK', 'Активная аэродинамика'],
    design: 'Футуристический дизайн с выхлопными трубами, выходящими из верхней части двигателя, и активным задним антикрылом.',
    pros: ['Рекорд Нюрбургринга', 'Гибридная эффективность', 'Полный привод', 'Инвестиционная ценность'],
    cons: ['Огромная цена', 'Ограниченная серия', 'Сложность обслуживания', 'Ограниченная практичность'],
    buyLinks: [
      { name: 'Официальный сайт Porsche', type: 'Производитель', url: 'https://www.porsche.com' },
      { name: 'Porsche Stuttgart', type: 'Штаб-квартира', url: 'https://www.porsche.com/contact' }
    ]
  },
  {
    id: 'mclaren-p1',
    brandId: 'mclaren',
    name: 'P1',
    category: 'hypercar',
    year: 2013,
    country: 'Великобритания',
    manufacturer: 'McLaren Automotive',
    bodyType: 'Купе',
    engine: '3.8L V8 Hybrid',
    power: 916,
    topSpeed: 350,
    acceleration: 2.8,
    transmission: '7-ступенчатая SSG',
    drive: 'Задний',
    fuelConsumption: '8.3 л/100 км (гибрид)',
    weight: 1395,
    price: {
      usd: 1150000,
      eur: 1050000,
      local: { value: 900000, currency: '£', note: 'Цена в Великобритании' }
    },
    availability: 'limited',
    availabilityText: 'Ограниченная серия',
    popularity: 91,
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1200&q=80',
      'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1200&q=80',
      'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=1200&q=80'
    ],
    video: 'https://www.youtube.com/embed/8j5n0n0n0n0',
    history: 'McLaren P1 — гибридный гиперкар, представленный в 2013 году на Парижском автосалоне. Наследник легендарного F1. Сочетает 3.8-литровый V8 с электрическим мотором, развивая 916 л.с. Все 375 экземпляров были распроданы ещё до начала производства.',
    facts: [
      'Наследник легендарного McLaren F1',
      'Гибридная система с режимом чистой электротяги',
      'Активная аэродинамика с режимом DRS',
      'Только 375 экземпляров',
      'Карбоновый монокок'
    ],
    technologies: ['V8 Hybrid', 'Карбоновый монокок', 'Активная аэродинамика', 'Режим DRS'],
    design: 'Агрессивный, гоночный дизайн с огромным активным антикрылом и аэродинамическими каналами.',
    pros: ['Гибридная мощность', 'Гоночные технологии', 'Эксклюзивность', 'Инвестиционная ценность'],
    cons: ['Огромная цена', 'Ограниченная серия', 'Сложность обслуживания', 'Не для повседневной езды'],
    buyLinks: [
      { name: 'Официальный сайт McLaren', type: 'Производитель', url: 'https://www.mclaren.com' },
      { name: 'McLaren Woking', type: 'Штаб-квартира', url: 'https://www.mclaren.com/contact' }
    ]
  },

  // ============ СУПЕРКАРЫ ============
  {
    id: 'lamborghini-aventador',
    brandId: 'lamborghini',
    name: 'Aventador SVJ',
    category: 'supercar',
    year: 2011,
    country: 'Италия',
    manufacturer: 'Automobili Lamborghini S.p.A.',
    bodyType: 'Купе',
    engine: '6.5L V12',
    power: 770,
    topSpeed: 350,
    acceleration: 2.8,
    transmission: '7-ступенчатая ISR',
    drive: 'Полный',
    fuelConsumption: '19.5 л/100 км',
    weight: 1525,
    price: {
      usd: 517000,
      eur: 480000,
      local: { value: 480000, currency: '€', note: 'Цена в Италии' }
    },
    availability: 'limited',
    availabilityText: 'Ограниченная серия',
    popularity: 97,
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80',
      'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1200&q=80',
      'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1200&q=80'
    ],
    video: 'https://www.youtube.com/embed/8j5n0n0n0n0',
    history: 'Lamborghini Aventador был представлен в 2011 году как наследник Murciélago. SVJ (Super Veloce Jota) — самая экстремальная версия, установившая рекорд Нюрбургринга среди серийных автомобилей в 2018 году — 6:44.97. Название «Aventador» происходит от имени боевого быка.',
    facts: [
      'Назван в честь боевого быка',
      'Рекорд Нюрбургринга 6:44.97',
      'Двери открываются вверх (Scissor doors)',
      'V12 — последний атмосферный в истории бренда',
      'Система аэродинамики ALA'
    ],
    technologies: ['V12 атмосферный', 'Система ALA', 'Полный привод', 'Карбоновый монокок'],
    design: 'Агрессивный, клиновидный дизайн с дверями-ножницами и массивными воздухозаборниками. Каждая линия создана для максимальной аэродинамики.',
    pros: ['Атмосферный V12', 'Рекордная динамика', 'Эффектный дизайн', 'Звук двигателя'],
    cons: ['Высокий расход', 'Жёсткая подвеска', 'Сложность парковки', 'Дорогое обслуживание'],
    buyLinks: [
      { name: 'Официальный сайт Lamborghini', type: 'Производитель', url: 'https://www.lamborghini.com' },
      { name: 'Lamborghini Sant\'Agata', type: 'Штаб-квартира', url: 'https://www.lamborghini.com/contact' }
    ]
  },
  {
    id: 'ferrari-sf90',
    brandId: 'ferrari',
    name: 'SF90 Stradale',
    category: 'supercar',
    year: 2019,
    country: 'Италия',
    manufacturer: 'Ferrari S.p.A.',
    bodyType: 'Купе',
    engine: '4.0L V8 Hybrid',
    power: 1000,
    topSpeed: 340,
    acceleration: 2.5,
    transmission: '8-ступенчатая DCT',
    drive: 'Полный',
    fuelConsumption: '6.1 л/100 км (гибрид)',
    weight: 1570,
    price: {
      usd: 625000,
      eur: 580000,
      local: { value: 580000, currency: '€', note: 'Цена в Италии' }
    },
    availability: 'available',
    availabilityText: 'В продаже',
    popularity: 95,
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&q=80',
      'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1200&q=80',
      'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1200&q=80'
    ],
    video: 'https://www.youtube.com/embed/8j5n0n0n0n0',
    history: 'Ferrari SF90 Stradale — первый серийный гибридный суперкар Ferrari с полным приводом. Назван в честь 90-летия Scuderia Ferrari. Развивает 1000 л.с. и является самым мощным серийным Ferrari на момент выпуска.',
    facts: [
      'Первый гибридный Ferrari с полным приводом',
      'Назван в честь 90-летия Scuderia Ferrari',
      '1000 л.с. — самый мощный серийный Ferrari',
      'Режим чистой электротяги до 25 км',
      '8-ступенчатая DCT — первая в Ferrari'
    ],
    technologies: ['V8 Hybrid', 'Полный привод', '8-ступенчатая DCT', 'Активная аэродинамика'],
    design: 'Современный, аэродинамический дизайн с характерными светодиодными фарами и активными аэродинамическими элементами.',
    pros: ['1000 л.с.', 'Полный привод', 'Гибридная эффективность', 'Современные технологии'],
    cons: ['Высокая цена', 'Сложность обслуживания', 'Ограниченная практичность', 'Электроника сложнее'],
    buyLinks: [
      { name: 'Официальный сайт Ferrari', type: 'Производитель', url: 'https://www.ferrari.com' },
      { name: 'Ferrari Maranello', type: 'Штаб-квартира', url: 'https://www.ferrari.com/contact' }
    ]
  },
  {
    id: 'porsche-911-turbo-s',
    brandId: 'porsche',
    name: '911 Turbo S',
    category: 'supercar',
    year: 2020,
    country: 'Германия',
    manufacturer: 'Porsche AG',
    bodyType: 'Купе',
    engine: '3.8L Flat-6 Twin-Turbo',
    power: 650,
    topSpeed: 330,
    acceleration: 2.7,
    transmission: '8-ступенчатая PDK',
    drive: 'Полный',
    fuelConsumption: '12.3 л/100 км',
    weight: 1640,
    price: {
      usd: 230000,
      eur: 210000,
      local: { value: 210000, currency: '€', note: 'Цена в Германии' }
    },
    availability: 'available',
    availabilityText: 'В продаже',
    popularity: 96,
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&q=80',
      'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1200&q=80'
    ],
    video: 'https://www.youtube.com/embed/8j5n0n0n0n0',
    history: 'Porsche 911 Turbo S — вершина линейки 911, сочетающая повседневную практичность с суперкаровой производительностью. 992-е поколение, представленное в 2020 году, развивает 650 л.с. и разгоняется до 100 км/ч за 2.7 секунды.',
    facts: [
      'Икона среди суперкаров с 1975 года',
      'Разгон до 100 км/ч за 2.7 секунды',
      'Полный привод с векторизацией тяги',
      'Повседневная практичность',
      'Один из самых надёжных суперкаров'
    ],
    technologies: ['Flat-6 Twin-Turbo', 'PDK', 'Полный привод', 'Активная аэродинамика'],
    design: 'Классический силуэт 911 с расширенными крыльями и активным задним антикрылом. Узнаваемый дизайн, эволюционирующий с 1963 года.',
    pros: ['Повседневная практичность', 'Надёжность', 'Отличная динамика', 'Узнаваемый дизайн'],
    cons: ['Высокая цена', 'Консервативный дизайн', 'Дорогое обслуживание', 'Ограниченная эксклюзивность'],
    buyLinks: [
      { name: 'Официальный сайт Porsche', type: 'Производитель', url: 'https://www.porsche.com' },
      { name: 'Porsche Stuttgart', type: 'Штаб-квартира', url: 'https://www.porsche.com/contact' }
    ]
  },
  {
    id: 'mclaren-720s',
    brandId: 'mclaren',
    name: '720S',
    category: 'supercar',
    year: 2017,
    country: 'Великобритания',
    manufacturer: 'McLaren Automotive',
    bodyType: 'Купе',
    engine: '4.0L V8 Twin-Turbo',
    power: 720,
    topSpeed: 341,
    acceleration: 2.9,
    transmission: '7-ступенчатая SSG',
    drive: 'Задний',
    fuelConsumption: '12.2 л/100 км',
    weight: 1283,
    price: {
      usd: 310000,
      eur: 290000,
      local: { value: 250000, currency: '£', note: 'Цена в Великобритании' }
    },
    availability: 'available',
    availabilityText: 'В продаже',
    popularity: 93,
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80',
      'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1200&q=80'
    ],
    video: 'https://www.youtube.com/embed/8j5n0n0n0n0',
    history: 'McLaren 720S — суперкар второго поколения серии Super Series, представленный в 2017 году. Назван в честь мощности 720 л.с. Известен невероятной лёгкостью и управляемостью благодаря карбоновому монококу.',
    facts: [
      'Карбоновый монокок Monocage II',
      'Вес всего 1283 кг',
      'Двери с уникальной конструкцией',
      'Разгон до 200 км/ч за 7.8 секунды',
      'Один из лучших по управляемости'
    ],
    technologies: ['V8 Twin-Turbo', 'Карбоновый монокок', 'Активная аэродинамика', 'Гидравлическая подвеска'],
    design: 'Футуристический дизайн с «глазами» на дверях и плавными аэродинамическими линиями. Каждая деталь продумана для эффективности.',
    pros: ['Лёгкий карбон', 'Отличная управляемость', 'Мощный V8', 'Современный дизайн'],
    cons: ['Высокая цена', 'Сложность обслуживания', 'Ограниченная практичность', 'Дорогие запчасти'],
    buyLinks: [
      { name: 'Официальный сайт McLaren', type: 'Производитель', url: 'https://www.mclaren.com' },
      { name: 'McLaren Woking', type: 'Штаб-квартира', url: 'https://www.mclaren.com/contact' }
    ]
  },
  {
    id: 'aston-martin-dbs',
    brandId: 'aston-martin',
    name: 'DBS Superleggera',
    category: 'supercar',
    year: 2018,
    country: 'Великобритания',
    manufacturer: 'Aston Martin Lagonda',
    bodyType: 'Купе',
    engine: '5.2L V12 Twin-Turbo',
    power: 725,
    topSpeed: 340,
    acceleration: 3.4,
    transmission: '8-ступенчатая ZF',
    drive: 'Задний',
    fuelConsumption: '14.5 л/100 км',
    weight: 1693,
    price: {
      usd: 320000,
      eur: 300000,
      local: { value: 250000, currency: '£', note: 'Цена в Великобритании' }
    },
    availability: 'available',
    availabilityText: 'В продаже',
    popularity: 90,
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80',
      'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1200&q=80'
    ],
    video: 'https://www.youtube.com/embed/8j5n0n0n0n0',
    history: 'Aston Martin DBS Superleggera — флагманский суперкар британского бренда, представленный в 2018 году. Название «Superleggera» отсылает к итальянской технологии лёгкого кузова. Это самый мощный серийный Aston Martin на момент выпуска.',
    facts: [
      'Самый мощный серийный Aston Martin',
      'Название отсылает к технологии Superleggera',
      'V12 Twin-Turbo от AMG',
      'Автомобиль Джеймса Бонда в фильме «Не время умирать»',
      'Ручная сборка в Гайдоне'
    ],
    technologies: ['V12 Twin-Turbo', 'Карбоновый кузов', 'Активная аэродинамика', 'Адаптивная подвеска'],
    design: 'Элегантный, мускулистый дизайн с длинным капотом и характерной решёткой. Сочетает британскую аристократичность и агрессию.',
    pros: ['Мощный V12', 'Элегантный дизайн', 'Эксклюзивность', 'Наследие Джеймса Бонда'],
    cons: ['Высокая цена', 'Большой вес', 'Дорогое обслуживание', 'Ограниченная практичность'],
    buyLinks: [
      { name: 'Официальный сайт Aston Martin', type: 'Производитель', url: 'https://www.astonmartin.com' },
      { name: 'Aston Martin Gaydon', type: 'Штаб-квартира', url: 'https://www.astonmartin.com/contact' }
    ]
  },
  {
    id: 'nissan-gtr',
    brandId: 'nissan',
    name: 'GT-R Nismo',
    category: 'supercar',
    year: 2007,
    country: 'Япония',
    manufacturer: 'Nissan Motor Corporation',
    bodyType: 'Купе',
    engine: '3.8L V6 Twin-Turbo',
    power: 600,
    topSpeed: 315,
    acceleration: 2.8,
    transmission: '6-ступенчатая DCT',
    drive: 'Полный',
    fuelConsumption: '12.5 л/100 км',
    weight: 1685,
    price: {
      usd: 210000,
      eur: 195000,
      local: { value: 30000000, currency: '¥', note: 'Цена в Японии' }
    },
    availability: 'available',
    availabilityText: 'В продаже',
    popularity: 95,
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&q=80',
      'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1200&q=80'
    ],
    video: 'https://www.youtube.com/embed/8j5n0n0n0n0',
    history: 'Nissan GT-R — легендарный японский суперкар, прозванный «Годзиллой». Современная версия R35 представлена в 2007 году. Известен невероятной системой полного привода ATTESA E-TS и разгоном, способным конкурировать с автомобилями в 3 раза дороже.',
    facts: [
      'Прозвище «Годзилла»',
      'Система полного привода ATTESA E-TS',
      'Один из лучших по соотношению цена/производительность',
      'Постоянно обновляется с 2007 года',
      'Культовый статус в мире автоспорта'
    ],
    technologies: ['V6 Twin-Turbo', 'ATTESA E-TS', 'Полный привод', 'Активная аэродинамика'],
    design: 'Мускулистый, функциональный дизайн с характерными круглыми задними фарами. Каждая деталь продумана для аэродинамики.',
    pros: ['Отличная динамика', 'Полный привод', 'Надёжность', 'Культовый статус'],
    cons: ['Устаревающий дизайн', 'Высокий расход', 'Сложная трансмиссия', 'Дорогое обслуживание'],
    buyLinks: [
      { name: 'Официальный сайт Nissan', type: 'Производитель', url: 'https://www.nissan.com' },
      { name: 'Nissan GT-R Center', type: 'Официальный дилер', url: 'https://www.nissan.com/contact' }
    ]
  },
  {
    id: 'chevrolet-corvette',
    brandId: 'chevrolet',
    name: 'Corvette C8 Z06',
    category: 'supercar',
    year: 2020,
    country: 'США',
    manufacturer: 'General Motors',
    bodyType: 'Купе',
    engine: '5.5L V8 Flat-Plane',
    power: 670,
    topSpeed: 315,
    acceleration: 2.6,
    transmission: '8-ступенчатая DCT',
    drive: 'Задний',
    fuelConsumption: '13.5 л/100 км',
    weight: 1560,
    price: {
      usd: 110000,
      eur: 100000,
      local: { value: 110000, currency: '$', note: 'Цена в США' }
    },
    availability: 'available',
    availabilityText: 'В продаже',
    popularity: 92,
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80',
      'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1200&q=80'
    ],
    video: 'https://www.youtube.com/embed/8j5n0n0n0n0',
    history: 'Chevrolet Corvette C8 — первое поколение с среднемоторной компоновкой, представленное в 2020 году. Z06 — гоночная версия с атмосферным V8 с плоским коленвалом, развивающим 670 л.с. Это самый мощный атмосферный V8 в истории серийных автомобилей.',
    facts: [
      'Первая среднемоторная Corvette',
      'Самый мощный атмосферный V8 в серийном производстве',
      'Двигатель с плоским коленвалом',
      'Американская икона с 1953 года',
      'Отличное соотношение цена/производительность'
    ],
    technologies: ['V8 Flat-Plane', 'Среднемоторная компоновка', 'DCT', 'Активная аэродинамика'],
    design: 'Агрессивный, современный дизайн с среднемоторной компоновкой. Американский суперкар нового поколения.',
    pros: ['Отличная цена', 'Мощный атмосферный V8', 'Среднемоторная компоновка', 'Американский характер'],
    cons: ['Качество сборки', 'Ограниченная практичность', 'Дорогие опции', 'Очередь на поставку'],
    buyLinks: [
      { name: 'Официальный сайт Chevrolet', type: 'Производитель', url: 'https://www.chevrolet.com' },
      { name: 'Chevrolet Corvette', type: 'Официальный дилер', url: 'https://www.chevrolet.com/contact' }
    ]
  },
  {
    id: 'dodge-challenger',
    brandId: 'dodge',
    name: 'Challenger SRT Hellcat',
    category: 'sports',
    year: 2015,
    country: 'США',
    manufacturer: 'Stellantis North America',
    bodyType: 'Купе',
    engine: '6.2L V8 Supercharged',
    power: 717,
    topSpeed: 320,
    acceleration: 3.6,
    transmission: '8-ступенчатая ZF',
    drive: 'Задний',
    fuelConsumption: '16.8 л/100 км',
    weight: 2070,
    price: {
      usd: 75000,
      eur: 70000,
      local: { value: 75000, currency: '$', note: 'Цена в США' }
    },
    availability: 'available',
    availabilityText: 'В продаже',
    popularity: 91,
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&q=80',
      'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1200&q=80'
    ],
    video: 'https://www.youtube.com/embed/8j5n0n0n0n0',
    history: 'Dodge Challenger SRT Hellcat — американский мускул-кар с компрессорным V8 мощностью 717 л.с. Представлен в 2015 году. Символ американской мощи и последний из настоящих мускул-каров с V8.',
    facts: [
      'Компрессорный V8 Hellcat',
      'Один из последних настоящих мускул-каров',
      'Режим «Line Lock» для прогрева шин',
      'Ключ-брелок с ограничением мощности',
      'Культовый американский дизайн'
    ],
    technologies: ['V8 Supercharged', 'Задний привод', 'Line Lock', 'Адаптивная подвеска'],
    design: 'Ретро-дизайн, отсылающий к оригинальному Challenger 1970 года. Массивный, мускулистый, узнаваемый.',
    pros: ['Мощный V8', 'Американский характер', 'Относительно доступная цена', 'Культовый дизайн'],
    cons: ['Огромный расход', 'Большой вес', 'Устаревшая платформа', 'Плохая управляемость'],
    buyLinks: [
      { name: 'Официальный сайт Dodge', type: 'Производитель', url: 'https://www.dodge.com' },
      { name: 'Dodge Dealers', type: 'Официальный дилер', url: 'https://www.dodge.com/contact' }
    ]
  },

  // ============ ЛЮКСОВЫЕ АВТОМОБИЛИ ============
  {
    id: 'rolls-royce-phantom',
    brandId: 'rolls-royce',
    name: 'Phantom',
    category: 'luxury',
    year: 2017,
    country: 'Великобритания',
    manufacturer: 'Rolls-Royce Motor Cars',
    bodyType: 'Седан',
    engine: '6.75L V12 Twin-Turbo',
    power: 571,
    topSpeed: 250,
    acceleration: 5.3,
    transmission: '8-ступенчатая ZF',
    drive: 'Задний',
    fuelConsumption: '15.2 л/100 км',
    weight: 2550,
    price: {
      usd: 460000,
      eur: 420000,
      local: { value: 360000, currency: '£', note: 'Цена в Великобритании' }
    },
    availability: 'available',
    availabilityText: 'В продаже',
    popularity: 94,
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1563720223185-11003d516935?w=1200&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&q=80'
    ],
    video: 'https://www.youtube.com/embed/8j5n0n0n0n0',
    history: 'Rolls-Royce Phantom — флагманский седан британского бренда, символ абсолютной роскоши. Восьмое поколение представлено в 2017 году. Каждый автомобиль собирается вручную в Гудвуде, Англия, и может быть полностью кастомизирован под владельца.',
    facts: [
      'Каждый автомобиль собирается вручную',
      'Полная кастомизация под владельца',
      'Икона «Спирит оф Экстази» на капоте',
      'Двери закрываются электроприводом',
      'Абсолютная тишина в салоне'
    ],
    technologies: ['V12 Twin-Turbo', 'Пневмоподвеска', 'Активная шумоизоляция', 'Полная кастомизация'],
    design: 'Величественный, монументальный дизайн с характерной решёткой Пантеон и иконой «Спирит оф Экстази». Символ статуса и власти.',
    pros: ['Абсолютная роскошь', 'Ручная сборка', 'Полная кастомизация', 'Статус'],
    cons: ['Огромная цена', 'Огромный расход', 'Сложность парковки', 'Не для самостоятельного вождения'],
    buyLinks: [
      { name: 'Официальный сайт Rolls-Royce', type: 'Производитель', url: 'https://www.rolls-roycemotorcars.com' },
      { name: 'Rolls-Royce Goodwood', type: 'Штаб-квартира', url: 'https://www.rolls-roycemotorcars.com/contact' }
    ]
  },
  {
    id: 'bentley-continental-gt',
    brandId: 'bentley',
    name: 'Continental GT',
    category: 'luxury',
    year: 2018,
    country: 'Великобритания',
    manufacturer: 'Bentley Motors Limited',
    bodyType: 'Купе',
    engine: '6.0L W12 Twin-Turbo',
    power: 650,
    topSpeed: 333,
    acceleration: 3.6,
    transmission: '8-ступенчатая DCT',
    drive: 'Полный',
    fuelConsumption: '14.5 л/100 км',
    weight: 2244,
    price: {
      usd: 250000,
      eur: 230000,
      local: { value: 200000, currency: '£', note: 'Цена в Великобритании' }
    },
    availability: 'available',
    availabilityText: 'В продаже',
    popularity: 92,
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1563720223185-11003d516935?w=1200&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&q=80'
    ],
    video: 'https://www.youtube.com/embed/8j5n0n0n0n0',
    history: 'Bentley Continental GT — роскошное купе, сочетающее британскую элегантность с огромной мощностью. Третье поколение представлено в 2018 году. Известен роскошным интерьером с ручной отделкой и мощным W12 двигателем.',
    facts: [
      'Интерьер с ручной отделкой',
      'W12 двигатель мощностью 650 л.с.',
      'Полный привод',
      'Роскошный салон с 3D-панелями',
      'Один из самых быстрых люксовых купе'
    ],
    technologies: ['W12 Twin-Turbo', 'Полный привод', 'Активная подвеска', 'Ручная отделка'],
    design: 'Элегантный, мускулистый дизайн с характерной решёткой и круглыми фарами. Сочетает роскошь и спортивность.',
    pros: ['Роскошный интерьер', 'Мощный W12', 'Полный привод', 'Британская элегантность'],
    cons: ['Высокая цена', 'Большой вес', 'Дорогое обслуживание', 'Высокий расход'],
    buyLinks: [
      { name: 'Официальный сайт Bentley', type: 'Производитель', url: 'https://www.bentleymotors.com' },
      { name: 'Bentley Crewe', type: 'Штаб-квартира', url: 'https://www.bentleymotors.com/contact' }
    ]
  },
  {
    id: 'mercedes-maybach-s-class',
    brandId: 'mercedes-benz',
    name: 'Mercedes-Maybach S-Class',
    category: 'luxury',
    year: 2021,
    country: 'Германия',
    manufacturer: 'Mercedes-Benz Group AG',
    bodyType: 'Седан',
    engine: '6.0L V12 Twin-Turbo',
    power: 630,
    topSpeed: 250,
    acceleration: 4.5,
    transmission: '9-ступенчатая 9G-Tronic',
    drive: 'Полный',
    fuelConsumption: '13.5 л/100 км',
    weight: 2350,
    price: {
      usd: 230000,
      eur: 210000,
      local: { value: 210000, currency: '€', note: 'Цена в Германии' }
    },
    availability: 'available',
    availabilityText: 'В продаже',
    popularity: 90,
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1563720223185-11003d516935?w=1200&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&q=80'
    ],
    video: 'https://www.youtube.com/embed/8j5n0n0n0n0',
    history: 'Mercedes-Maybach S-Class — вершина роскоши немецкого автопрома. Представлен в 2021 году на базе нового S-Class W223. Сочетает передовые технологии Mercedes-Benz с эксклюзивной роскошью Maybach.',
    facts: [
      'Самый роскошный Mercedes-Benz',
      'V12 двигатель от Maybach',
      'Задние сиденья с массажем и подогревом',
      'Система E-Active Body Control',
      'Абсолютная тишина в салоне'
    ],
    technologies: ['V12 Twin-Turbo', 'E-Active Body Control', 'Полный привод', 'MBUX'],
    design: 'Величественный, элегантный дизайн с хромированными элементами и характерной решёткой Maybach. Символ немецкой роскоши.',
    pros: ['Передовые технологии', 'Роскошный салон', 'Комфорт', 'Надёжность'],
    cons: ['Высокая цена', 'Огромные размеры', 'Дорогое обслуживание', 'Не для самостоятельного вождения'],
    buyLinks: [
      { name: 'Официальный сайт Mercedes-Benz', type: 'Производитель', url: 'https://www.mercedes-benz.com' },
      { name: 'Mercedes-Maybach', type: 'Официальный дилер', url: 'https://www.mercedes-benz.com/contact' }
    ]
  },
  {
    id: 'bmw-m8-competition',
    brandId: 'bmw',
    name: 'M8 Competition',
    category: 'luxury',
    year: 2019,
    country: 'Германия',
    manufacturer: 'BMW AG',
    bodyType: 'Купе',
    engine: '4.4L V8 Twin-Turbo',
    power: 625,
    topSpeed: 305,
    acceleration: 3.2,
    transmission: '8-ступенчатая ZF',
    drive: 'Полный',
    fuelConsumption: '12.5 л/100 км',
    weight: 1960,
    price: {
      usd: 150000,
      eur: 140000,
      local: { value: 140000, currency: '€', note: 'Цена в Германии' }
    },
    availability: 'available',
    availabilityText: 'В продаже',
    popularity: 89,
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80',
      'https://images.unsplash.com/photo-1563720223185-11003d516935?w=1200&q=80'
    ],
    video: 'https://www.youtube.com/embed/8j5n0n0n0n0',
    history: 'BMW M8 Competition — флагманский спортивный купе BMW, представленный в 2019 году. Сочетает роскошь 8 серии с гоночными технологиями M Division. Самый мощный серийный BMW на момент выпуска.',
    facts: [
      'Самый мощный серийный BMW',
      'Гоночные технологии M Division',
      'Полный привод M xDrive',
      'Карбоновая крыша',
      'Разгон до 100 км/ч за 3.2 секунды'
    ],
    technologies: ['V8 Twin-Turbo', 'M xDrive', 'Карбоновая крыша', 'Активная подвеска'],
    design: 'Агрессивный, спортивный дизайн с расширенными крыльями и карбоновыми элементами. Сочетает элегантность и агрессию.',
    pros: ['Мощный V8', 'Полный привод', 'Роскошный салон', 'Гоночные технологии'],
    cons: ['Высокая цена', 'Большой вес', 'Дорогое обслуживание', 'Высокий расход'],
    buyLinks: [
      { name: 'Официальный сайт BMW', type: 'Производитель', url: 'https://www.bmw.com' },
      { name: 'BMW M', type: 'Официальный дилер', url: 'https://www.bmw.com/contact' }
    ]
  },
  {
    id: 'audi-r8',
    brandId: 'audi',
    name: 'R8 V10 Performance',
    category: 'supercar',
    year: 2015,
    country: 'Германия',
    manufacturer: 'Audi Sport GmbH',
    bodyType: 'Купе',
    engine: '5.2L V10',
    power: 620,
    topSpeed: 331,
    acceleration: 3.1,
    transmission: '7-ступенчатая S tronic',
    drive: 'Полный',
    fuelConsumption: '13.7 л/100 км',
    weight: 1570,
    price: {
      usd: 210000,
      eur: 195000,
      local: { value: 195000, currency: '€', note: 'Цена в Германии' }
    },
    availability: 'available',
    availabilityText: 'В продаже',
    popularity: 90,
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80',
      'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1200&q=80'
    ],
    video: 'https://www.youtube.com/embed/8j5n0n0n0n0',
    history: 'Audi R8 — суперкар с атмосферным V10, представленный в 2015 году во втором поколении. Известен как «суперкар на каждый день» благодаря практичности и полному приводу quattro.',
    facts: [
      'Атмосферный V10 от Lamborghini',
      'Полный привод quattro',
      'Один из самых практичных суперкаров',
      'Светодиодная оптика Matrix LED',
      'Культовый статус'
    ],
    technologies: ['V10 атмосферный', 'quattro', 'Matrix LED', 'Алюминиевый кузов'],
    design: 'Сдержанный, элегантный дизайн с характерными боковыми воздухозаборниками. Немецкая точность в каждой детали.',
    pros: ['Атмосферный V10', 'Полный привод', 'Практичность', 'Надёжность'],
    cons: ['Высокая цена', 'Консервативный дизайн', 'Дорогое обслуживание', 'Ограниченная эксклюзивность'],
    buyLinks: [
      { name: 'Официальный сайт Audi', type: 'Производитель', url: 'https://www.audi.com' },
      { name: 'Audi Sport', type: 'Официальный дилер', url: 'https://www.audi.com/contact' }
    ]
  },
  {
    id: 'lexus-lc500',
    brandId: 'lexus',
    name: 'LC 500',
    category: 'luxury',
    year: 2017,
    country: 'Япония',
    manufacturer: 'Toyota Motor Corporation',
    bodyType: 'Купе',
    engine: '5.0L V8',
    power: 477,
    topSpeed: 270,
    acceleration: 4.5,
    transmission: '10-ступенчатая Aisin',
    drive: 'Задний',
    fuelConsumption: '11.5 л/100 км',
    weight: 1935,
    price: {
      usd: 95000,
      eur: 90000,
      local: { value: 14000000, currency: '¥', note: 'Цена в Японии' }
    },
    availability: 'available',
    availabilityText: 'В продаже',
    popularity: 88,
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1563720223185-11003d516935?w=1200&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&q=80'
    ],
    video: 'https://www.youtube.com/embed/8j5n0n0n0n0',
    history: 'Lexus LC 500 — флагманское купе японского люксового бренда, представленное в 2017 году. Известен потрясающим дизайном и атмосферным V8. Символ японской роскоши и инженерного совершенства.',
    facts: [
      'Атмосферный V8 с потрясающим звуком',
      '10-ступенчатая автоматическая коробка',
      'Дизайн, вдохновлённый концептом LF-LC',
      'Японское качество и надёжность',
      'Роскошный интерьер ручной работы'
    ],
    technologies: ['V8 атмосферный', '10-ступенчатая АКПП', 'Адаптивная подвеска', 'Премиальная аудиосистема'],
    design: 'Смелый, футуристический дизайн с характерной решёткой «шпиндель» и плавными линиями. Японская эстетика в каждой детали.',
    pros: ['Потрясающий дизайн', 'Атмосферный V8', 'Надёжность', 'Роскошный салон'],
    cons: ['Высокая цена', 'Большой вес', 'Ограниченная практичность', 'Не самый быстрый в классе'],
    buyLinks: [
      { name: 'Официальный сайт Lexus', type: 'Производитель', url: 'https://www.lexus.com' },
      { name: 'Lexus Dealers', type: 'Официальный дилер', url: 'https://www.lexus.com/contact' }
    ]
  },
  {
    id: 'maserati-gran-turismo',
    brandId: 'maserati',
    name: 'GranTurismo',
    category: 'luxury',
    year: 2023,
    country: 'Италия',
    manufacturer: 'Maserati S.p.A.',
    bodyType: 'Купе',
    engine: '3.0L V6 Nettuno',
    power: 550,
    topSpeed: 320,
    acceleration: 3.9,
    transmission: '8-ступенчатая ZF',
    drive: 'Полный',
    fuelConsumption: '11.8 л/100 км',
    weight: 1795,
    price: {
      usd: 200000,
      eur: 185000,
      local: { value: 185000, currency: '€', note: 'Цена в Италии' }
    },
    availability: 'available',
    availabilityText: 'В продаже',
    popularity: 87,
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1563720223185-11003d516935?w=1200&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&q=80'
    ],
    video: 'https://www.youtube.com/embed/8j5n0n0n0n0',
    history: 'Maserati GranTurismo — итальянское роскошное купе, представленное в новом поколении в 2023 году. Сочетает итальянскую страсть, элегантность и современные технологии. Двигатель Nettuno разработан на основе технологий Формулы-1.',
    facts: [
      'Двигатель Nettuno с технологиями F1',
      'Итальянский дизайн',
      'Роскошный салон с ручной отделкой',
      'Характерный звук Maserati',
      'Наследие с 1947 года'
    ],
    technologies: ['V6 Nettuno', 'Полный привод', 'Активная подвеска', 'Итальянский дизайн'],
    design: 'Элегантный, чувственный итальянский дизайн с плавными линиями и характерной решёткой. Символ итальянской страсти.',
    pros: ['Итальянский стиль', 'Технологии F1', 'Роскошный салон', 'Характерный звук'],
    cons: ['Высокая цена', 'Надёжность', 'Дорогое обслуживание', 'Ограниченная практичность'],
    buyLinks: [
      { name: 'Официальный сайт Maserati', type: 'Производитель', url: 'https://www.maserati.com' },
      { name: 'Maserati Modena', type: 'Штаб-квартира', url: 'https://www.maserati.com/contact' }
    ]
  },

  // ============ ЭЛЕКТРОМОБИЛИ ============
  {
    id: 'tesla-model-s-plaid',
    brandId: 'tesla',
    name: 'Model S Plaid',
    category: 'electric',
    year: 2021,
    country: 'США',
    manufacturer: 'Tesla, Inc.',
    bodyType: 'Седан',
    engine: 'Три электромотора',
    power: 1020,
    topSpeed: 322,
    acceleration: 2.1,
    transmission: 'Одноступенчатая',
    drive: 'Полный',
    fuelConsumption: '18.5 кВт·ч/100 км',
    weight: 2162,
    price: {
      usd: 90000,
      eur: 85000,
      local: { value: 90000, currency: '$', note: 'Цена в США' }
    },
    availability: 'available',
    availabilityText: 'В продаже',
    popularity: 96,
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=1200&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&q=80'
    ],
    video: 'https://www.youtube.com/embed/8j5n0n0n0n0',
    history: 'Tesla Model S Plaid — самый быстрый серийный электромобиль в мире. Представлен в 2021 году. Три электромотора развивают 1020 л.с. и разгоняют автомобиль до 100 км/ч за 2.1 секунды. Революционизировал представление о возможностях электромобилей.',
    facts: [
      'Разгон до 100 км/ч за 2.1 секунды',
      'Три электромотора',
      'Запас хода до 637 км',
      'Автопилот Tesla',
      'Рекорд скорости среди электромобилей'
    ],
    technologies: ['Три электромотора', 'Автопилот', 'OTA-обновления', 'Батарея 100 кВт·ч'],
    design: 'Минималистичный, аэродинамический дизайн с гладкими линиями. Футуристический интерьер с рулём-штурвалом.',
    pros: ['Невероятный разгон', 'Запас хода', 'Автопилот', 'OTA-обновления'],
    cons: ['Качество сборки', 'Сервис', 'Дорогая замена батареи', 'Ограниченная инфраструктура'],
    buyLinks: [
      { name: 'Официальный сайт Tesla', type: 'Производитель', url: 'https://www.tesla.com' },
      { name: 'Tesla Store', type: 'Официальный дилер', url: 'https://www.tesla.com/contact' }
    ]
  },

  // ============ ВНЕДОРОЖНИКИ ============
  {
    id: 'lamborghini-urus',
    brandId: 'lamborghini',
    name: 'Urus',
    category: 'suv',
    year: 2018,
    country: 'Италия',
    manufacturer: 'Automobili Lamborghini S.p.A.',
    bodyType: 'Внедорожник',
    engine: '4.0L V8 Twin-Turbo',
    power: 650,
    topSpeed: 305,
    acceleration: 3.6,
    transmission: '8-ступенчатая ZF',
    drive: 'Полный',
    fuelConsumption: '12.7 л/100 км',
    weight: 2200,
    price: {
      usd: 230000,
      eur: 210000,
      local: { value: 210000, currency: '€', note: 'Цена в Италии' }
    },
    availability: 'available',
    availabilityText: 'В продаже',
    popularity: 95,
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=1200&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&q=80'
    ],
    video: 'https://www.youtube.com/embed/8j5n0n0n0n0',
    history: 'Lamborghini Urus — первый внедорожник Lamborghini, представленный в 2018 году. Назван в честь дикого быка. Сочетает суперкаровую динамику с практичностью внедорожника. Самый продаваемый Lamborghini в истории.',
    facts: [
      'Первый внедорожник Lamborghini',
      'Самый продаваемый Lamborghini',
      'Назван в честь дикого быка',
      'Разгон до 100 км/ч за 3.6 секунды',
      'Самый быстрый серийный внедорожник'
    ],
    technologies: ['V8 Twin-Turbo', 'Полный привод', 'Активная подвеска', 'Карбоновая отделка'],
    design: 'Агрессивный, мускулистый дизайн с характерными линиями Lamborghini. Внедорожник с душой суперкара.',
    pros: ['Суперкаровая динамика', 'Практичность', 'Эксклюзивность', 'Узнаваемый дизайн'],
    cons: ['Высокая цена', 'Высокий расход', 'Дорогое обслуживание', 'Огромные размеры'],
    buyLinks: [
      { name: 'Официальный сайт Lamborghini', type: 'Производитель', url: 'https://www.lamborghini.com' },
      { name: 'Lamborghini Sant\'Agata', type: 'Штаб-квартира', url: 'https://www.lamborghini.com/contact' }
    ]
  },

  // ============ КЛАССИЧЕСКИЕ АВТОМОБИЛИ ============
  {
    id: 'ferrari-250-gto',
    brandId: 'ferrari',
    name: '250 GTO',
    category: 'classic',
    year: 1962,
    country: 'Италия',
    manufacturer: 'Ferrari S.p.A.',
    bodyType: 'Купе',
    engine: '3.0L V12',
    power: 300,
    topSpeed: 280,
    acceleration: 6.1,
    transmission: '5-ступенчатая механическая',
    drive: 'Задний',
    fuelConsumption: '18 л/100 км',
    weight: 880,
    price: {
      usd: 70000000,
      eur: 65000000,
      local: { value: 65000000, currency: '€', note: 'Цена на аукционах' }
    },
    availability: 'discontinued',
    availabilityText: 'Производство завершено',
    popularity: 99,
    image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1200&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&q=80'
    ],
    video: 'https://www.youtube.com/embed/8j5n0n0n0n0',
    history: 'Ferrari 250 GTO — самый дорогой автомобиль в мире. Выпущен в 1962-1964 годах в количестве всего 36 экземпляров. Создан для гонок, но стал символом абсолютной ценности. В 2018 году один экземпляр был продан за рекордные 70 миллионов долларов.',
    facts: [
      'Самый дорогой автомобиль в мире',
      'Только 36 экземпляров выпущено',
      'Продан за 70 миллионов долларов',
      'Гоночное наследие',
      'Символ абсолютной ценности'
    ],
    technologies: ['V12 атмосферный', 'Механическая КПП', 'Лёгкий кузов', 'Гоночная аэродинамика'],
    design: 'Классический итальянский дизайн 60-х годов. Элегантные линии, созданные для скорости и красоты.',
    pros: ['Инвестиционная ценность', 'Гоночное наследие', 'Красота', 'Редкость'],
    cons: ['Недоступная цена', 'Сложность обслуживания', 'Не для повседневной езды', 'Огромная стоимость страховки'],
    buyLinks: [
      { name: 'Официальный сайт Ferrari', type: 'Производитель', url: 'https://www.ferrari.com' },
      { name: 'RM Sotheby\'s', type: 'Аукционный дом', url: 'https://www.rmsothebys.com' }
    ]
  },
  {
    id: 'toyota-supra',
    brandId: 'toyota',
    name: 'Supra MK4',
    category: 'classic',
    year: 1993,
    country: 'Япония',
    manufacturer: 'Toyota Motor Corporation',
    bodyType: 'Купе',
    engine: '3.0L 2JZ-GTE Twin-Turbo',
    power: 280,
    topSpeed: 250,
    acceleration: 4.6,
    transmission: '6-ступенчатая механическая',
    drive: 'Задний',
    fuelConsumption: '12 л/100 км',
    weight: 1510,
    price: {
      usd: 80000,
      eur: 75000,
      local: { value: 12000000, currency: '¥', note: 'Цена в Японии' }
    },
    availability: 'discontinued',
    availabilityText: 'Производство завершено',
    popularity: 97,
    image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1200&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&q=80'
    ],
    video: 'https://www.youtube.com/embed/8j5n0n0n0n0',
    history: 'Toyota Supra MK4 — легендарный японский спорткар, ставший культовым благодаря фильму «Форсаж». Двигатель 2JZ-GTE известен своей невероятной надёжностью и способностью выдерживать огромную мощность. Символ японского тюнинга.',
    facts: [
      'Культовый статус благодаря «Форсажу»',
      'Двигатель 2JZ-GTE — легенда тюнинга',
      'Способен выдерживать 1000+ л.с.',
      'Один из самых надёжных двигателей',
      'Цены растут с каждым годом'
    ],
    technologies: ['2JZ-GTE Twin-Turbo', 'Задний привод', 'Механическая КПП', 'Аэродинамика'],
    design: 'Классический японский дизайн 90-х с характерным задним антикрылом. Узнаваемый силуэт.',
    pros: ['Легендарный двигатель', 'Надёжность', 'Культовый статус', 'Инвестиционная ценность'],
    cons: ['Возраст', 'Сложность поиска', 'Цены растут', 'Ограниченная практичность'],
    buyLinks: [
      { name: 'Официальный сайт Toyota', type: 'Производитель', url: 'https://www.toyota.com' },
      { name: 'Bring a Trailer', type: 'Аукционная площадка', url: 'https://bringatrailer.com' }
    ]
  },
  {
    id: 'honda-nsx',
    brandId: 'honda',
    name: 'NSX (NA1)',
    category: 'classic',
    year: 1990,
    country: 'Япония',
    manufacturer: 'Honda Motor Co.',
    bodyType: 'Купе',
    engine: '3.0L V6 VTEC',
    power: 270,
    topSpeed: 270,
    acceleration: 5.9,
    transmission: '5-ступенчатая механическая',
    drive: 'Задний',
    fuelConsumption: '10.5 л/100 км',
    weight: 1350,
    price: {
      usd: 120000,
      eur: 110000,
      local: { value: 18000000, currency: '¥', note: 'Цена в Японии' }
    },
    availability: 'discontinued',
    availabilityText: 'Производство завершено',
    popularity: 93,
    image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1200&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=80',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&q=80'
    ],
    video: 'https://www.youtube.com/embed/8j5n0n0n0n0',
    history: 'Honda NSX — первый японский суперкар, созданный с участием легендарного Айртона Сенны. Представлен в 1990 году. Алюминиевый кузов и VTEC двигатель сделали его революционным. Символ японского инженерного совершенства.',
    facts: [
      'Айртон Сенна участвовал в разработке',
      'Первый японский суперкар',
      'Алюминиевый кузов',
      'VTEC технология',
      'Культовый статус'
    ],
    technologies: ['V6 VTEC', 'Алюминиевый кузов', 'Задний привод', 'Гоночная подвеска'],
    design: 'Элегантный, функциональный дизайн с низким силуэтом. Японская точность в каждой детали.',
    pros: ['Инженерное совершенство', 'Надёжность', 'Культовый статус', 'Инвестиционная ценность'],
    cons: ['Возраст', 'Сложность поиска', 'Дорогие запчасти', 'Ограниченная практичность'],
    buyLinks: [
      { name: 'Официальный сайт Honda', type: 'Производитель', url: 'https://www.honda.com' },
      { name: 'Bring a Trailer', type: 'Аукционная площадка', url: 'https://bringatrailer.com' }
    ]
  }
];
