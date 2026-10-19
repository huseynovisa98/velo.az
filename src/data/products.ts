import { Product, ServicePackage } from '../types';

export const HERO_IMAGE = '/src/assets/images/velo_hero_cyclist_1792403936159.jpg';
export const MOUNTAIN_BIKE_IMAGE = '/src/assets/images/velo_mountain_bike_1792403936849.jpg';
export const URBAN_EBIKE_IMAGE = '/src/assets/images/velo_urban_ebike_1792403937467.jpg';
export const GRAVEL_ROAD_IMAGE = '/src/assets/images/velo_gravel_road_1792403937893.jpg';
export const ACCESSORIES_IMAGE = '/src/assets/images/velo_accessories_gear_1792403953318.jpg';

export const CATEGORIES_LIST = [
  { id: 'all', label: 'Bütün Məhsullar', count: 12 },
  { id: 'mountain', label: 'Dağ Velosipedləri (MTB)', count: 4 },
  { id: 'road', label: 'Yol və Gravel', count: 3 },
  { id: 'urban', label: 'Şəhər və Hibrid', count: 2 },
  { id: 'electric', label: 'Elektrikli (E-Bike)', count: 1 },
  { id: 'accessories', label: 'Aksesuar & Qoruyucu', count: 2 },
] as const;

export const PRODUCTS: Product[] = [
  {
    id: 'velo-mtb-carbon-pro',
    name: 'Velo Peak Carbon FS 29',
    sku: 'VL-MTB-2901',
    category: 'mountain',
    categoryLabel: 'Dağ Velosipedləri (MTB)',
    priceAZN: 1850,
    originalPriceAZN: 2150,
    image: MOUNTAIN_BIKE_IMAGE,
    rating: 4.9,
    reviewCount: 38,
    inStock: true,
    stockCount: 5,
    isSale: true,
    frameMaterial: 'Full Carbon Toray T800',
    wheelSize: '29"',
    speeds: '1x12 Shimano Deore XT',
    brakes: 'Shimano MT501 Hidravlik Disk (180mm)',
    weightKgs: 11.8,
    sizes: ['S (15")', 'M (17")', 'L (19")', 'XL (21")'],
    colors: [
      { name: 'Mat Tünd Boz / Yaşıl', hex: '#2A3439' },
      { name: 'Qara Stealth', hex: '#111827' },
    ],
    description: 'Qafqaz dağ yolları və çətin relyeflər üçün hazırlanmış tam asqılı (Full Suspension) premium dağ velosipedi. Yüngül karbon çərçivə, Fox amortizasiya sistemi və dözümlü Maxxis təkərlər ilə maksimal idarəolunma təmin edir.',
    keyFeatures: [
      '120mm gedişli pnevmatik ön və arxa amortizator',
      'Shimano Deore XT 1x12 ötürücü dəsti',
      'Maxxis Minion DHF/DHR 29x2.4 təkərlər',
      'Daxili kabel çəkilişi və teleskopik oturacaq dirəyi (Dropper Post)'
    ]
  },
  {
    id: 'velo-gravel-argon-apex',
    name: 'Velo Strata Gravel All-Road',
    sku: 'VL-GRV-7002',
    category: 'road',
    categoryLabel: 'Yol və Gravel',
    priceAZN: 2290,
    originalPriceAZN: 2490,
    image: GRAVEL_ROAD_IMAGE,
    rating: 4.95,
    reviewCount: 24,
    inStock: true,
    stockCount: 3,
    isNew: true,
    isSale: true,
    frameMaterial: 'Yüngül Karbon Monokok',
    wheelSize: '28" (700x42c)',
    speeds: '2x11 Shimano GRX 810',
    brakes: 'Shimano GRX Hidravlik Disk',
    weightKgs: 8.9,
    sizes: ['52cm (S)', '54cm (M)', '56cm (L)', '58cm (XL)'],
    colors: [
      { name: 'Dərin Donanma Mavisi', hex: '#1E3A5F' },
      { name: 'Qrafit Gümüşü', hex: '#4B5563' },
    ],
    description: 'Həm Bakı küçələrində sürətli asfalt sürüşü, həm də Abşeronun çınqıllı yollarında rahat səyahət üçün ideal universal gravel velosiped. Geniş təkər klirensi və aerodinamik çərçivə forması.',
    keyFeatures: [
      'Karbon çəngəl və vibrasiyanı söndürən oturacaq borusu',
      'Shimano GRX gravel spesifik hidravlik qrup dəsti',
      'WTB Byway 700x42c qəhvəyi yan divarlı təkərlər',
      'Bikepacking və çantalar üçün 6 ədəd inteqrasiya olunmuş bərkitmə nöqtəsi'
    ]
  },
  {
    id: 'velo-urban-aurora-ebike',
    name: 'Velo Aurora Urban E-Commuter',
    sku: 'VL-EBK-5501',
    category: 'electric',
    categoryLabel: 'Elektrikli (E-Bike)',
    priceAZN: 1980,
    image: URBAN_EBIKE_IMAGE,
    rating: 4.85,
    reviewCount: 42,
    inStock: true,
    stockCount: 6,
    isNew: true,
    frameMaterial: 'Alüminium 6061 Hydroformed',
    wheelSize: '28"',
    speeds: 'Shimano Nexus 8 Daxili Ötürücü',
    brakes: 'Tektro Hidravlik Disk (E-bike xüsusi)',
    weightKgs: 17.5,
    sizes: ['M (165-178 sm)', 'L (176-190 sm)'],
    colors: [
      { name: 'Mat Antrasit / Dəri', hex: '#374151' },
      { name: 'Səhra Qumu', hex: '#D1C2A5' },
    ],
    description: 'Bakının təpəli relyefində gündəlik işə və gəzintiyə çıxmaq üçün premium elektrikli velosiped. Çərçivəyə inteqrasiya olunmuş Samsung batareyası bir şarjla 75 km məsafə qət etməyə imkan verir.',
    keyFeatures: [
      '250W Bafang səssiz mərkəzi mühərrik (65Nm tork)',
      '36V 14Ah (504Wh) çıxarıla bilən inteqrasiya edilmiş batareya',
      'Kəmər ötürmə sistemi (Gates Carbon Drive) — zəncir yağına ehtiyac yoxdur',
      'İnteqrasiya olunmuş ön/arxa LED işıqlar və arxa baqaj'
    ]
  },
  {
    id: 'velo-mtb-trail-comp',
    name: 'Velo Hardtail Trail 29 Comp',
    sku: 'VL-MTB-2905',
    category: 'mountain',
    categoryLabel: 'Dağ Velosipedləri (MTB)',
    priceAZN: 890,
    originalPriceAZN: 990,
    image: MOUNTAIN_BIKE_IMAGE,
    rating: 4.7,
    reviewCount: 67,
    inStock: true,
    stockCount: 12,
    isSale: true,
    frameMaterial: 'Alüminium Alloy 6061-T6',
    wheelSize: '29"',
    speeds: '1x10 Shimano Cues',
    brakes: 'Shimano MT200 Hidravlik Disk',
    weightKgs: 13.4,
    sizes: ['S (15")', 'M (17")', 'L (19")'],
    colors: [
      { name: 'Mat Tünd Boz', hex: '#1F2937' },
      { name: 'Elektrik Qırmızı', hex: '#991B1B' },
    ],
    description: 'Həm yeni başlayanlar, həm də təcrübəli velosipedçilər üçün ən populyar etibarlı seçim. SR Suntour 100mm bloklanan pnevmatik çəngəl və möhkəm alüminium çərçivə.',
    keyFeatures: [
      'SR Suntour XCM 100mm gedişli amortizator (sükan üzərindən kilidləmə)',
      'Shimano Cues müasir və uzunömürlü ötürücü sistemi',
      'Kenda Booster 29x2.20 universal təkərlər',
      'İkiqat möhkəmləndirilmiş alüminium təkər diskləri'
    ]
  },
  {
    id: 'velo-road-speed-aero',
    name: 'Velo Corsa Aero Carbon Road',
    sku: 'VL-ROD-8801',
    category: 'road',
    categoryLabel: 'Yol və Gravel',
    priceAZN: 2750,
    image: GRAVEL_ROAD_IMAGE,
    rating: 4.9,
    reviewCount: 15,
    inStock: true,
    stockCount: 2,
    isNew: true,
    frameMaterial: 'Toray T1000 Ultra-Light Carbon',
    wheelSize: '28" (700x28c)',
    speeds: '2x12 Shimano 105 Di2 Elektron',
    brakes: 'Shimano 105 Hidravlik Disk',
    weightKgs: 7.8,
    sizes: ['50cm', '53cm', '56cm'],
    colors: [
      { name: 'Parlaq Göy / Qara', hex: '#1E40AF' },
    ],
    description: 'Sürət həvəskarları və yarışçılar üçün təmiz aerodinamika. Elektron ötürücü sistemi, 50mm profil karbon disklər və daxili inteqrasiya olunmuş kokpit.',
    keyFeatures: [
      'Shimano 105 Di2 simsiz elektron ötürmə sistemi',
      '50mm dərinlikli aerodinamik karbon çarxlar',
      'Continental Grand Prix 5000 təkərlər',
      'Sükan və kabellərin 100% daxili inteqrasiyası'
    ]
  },
  {
    id: 'velo-urban-classic-step',
    name: 'Velo Boulevard City Classic',
    sku: 'VL-URB-3100',
    category: 'urban',
    categoryLabel: 'Şəhər və Hibrid',
    priceAZN: 680,
    originalPriceAZN: 750,
    image: URBAN_EBIKE_IMAGE,
    rating: 4.75,
    reviewCount: 31,
    inStock: true,
    stockCount: 8,
    isSale: true,
    frameMaterial: 'Yüngül Alüminium Step-Through',
    wheelSize: '28"',
    speeds: '7 pilləli Shimano Tourney',
    brakes: 'Promax V-Brake ön/arxa',
    weightKgs: 14.1,
    sizes: ['Universal M (155-182 sm)'],
    colors: [
      { name: 'Klassik Yaşıl', hex: '#164E63' },
      { name: 'Krem Bej', hex: '#D6D3D1' },
    ],
    description: 'Bakı Dənizkənarı Bulvarında və şəhər küçələrində rahat gəzinti üçün zərif dizayn. Rahat əyləşmə mövqeyi, yumşaq yaylı yəhər, qoruyucu palçıq qapaqları və ön səbət üçün montaj yeri.',
    keyFeatures: [
      'Alçaq çərçivə — minmək və düşmək olduqca asandır',
      'Erqonomik sükan və anatomik dəri yəhər',
      'Tam örtüklü paslanmaz palçıq qoruyucuları və zəncir qoruyucusu',
      '25 kq yükdaşıma qabiliyyətinə malik arxa baqaj'
    ]
  },
  {
    id: 'velo-acc-aero-pro-kit',
    name: 'Aero Pro Təhlükəsizlik və Avadanlıq Dəsti',
    sku: 'VL-ACC-091',
    category: 'accessories',
    categoryLabel: 'Aksesuar & Qoruyucu',
    priceAZN: 185,
    originalPriceAZN: 220,
    image: ACCESSORIES_IMAGE,
    rating: 4.88,
    reviewCount: 56,
    inStock: true,
    stockCount: 19,
    isSale: true,
    frameMaterial: 'Kompozit & Polikarbonat',
    wheelSize: 'Universal',
    speeds: 'Standart',
    brakes: 'N/A',
    weightKgs: 0.85,
    sizes: ['M (54-58 sm)', 'L (58-62 sm)'],
    colors: [
      { name: 'Mat Qara', hex: '#18181B' },
      { name: 'Göy / Gümüşü', hex: '#1E3A8A' }
    ],
    description: 'Gündəlik və idman sürüşü üçün zəruri olan peşəkar dəst: MIPS texnologiyalı ventilyasiyalı aero dəbilqə, sukeçirməz sükan çantası, 800 lumen USB doldurulan LED fənər və 16 funksiyalı kompakt multitool alət.',
    keyFeatures: [
      'MIPS qoruyucu sistemi ilə təchiz olunmuş sertifikatlı dəbilqə',
      '800 Lumen gücündə alüminium korpuslu ön fənər (IPX6 suya davamlı)',
      'Sürətli bərkidilən sukeçirməz kordura sükan çantası',
      'Xrom-vanadium poladdan 16 funksiyalı kompakt velo aləti'
    ]
  },
  {
    id: 'velo-acc-essential-security',
    name: 'Velo Sentinel U-Lock & Siqnalizasiya',
    sku: 'VL-ACC-044',
    category: 'accessories',
    categoryLabel: 'Aksesuar & Qoruyucu',
    priceAZN: 95,
    image: ACCESSORIES_IMAGE,
    rating: 4.9,
    reviewCount: 48,
    inStock: true,
    stockCount: 25,
    frameMaterial: 'Bərkidilmiş 14mm Xrom Polad',
    wheelSize: 'Universal',
    speeds: 'N/A',
    brakes: 'N/A',
    weightKgs: 1.2,
    sizes: ['Standart'],
    colors: [
      { name: 'Qara / Sarı', hex: '#09090B' }
    ],
    description: 'Şəhərdə velosipedinizi etibarlı qorumaq üçün 14mm möhkəmləndirilmiş polad U-kilid və vibrasiyaya həssas 110dB siqnalizasiya sensoru. Kəsilməyə və qırılmaya qarşı maksimum mühafizə.',
    keyFeatures: [
      '14mm qızdırılmış xüsusi polad qövs',
      'Hərəkət sensorlu 110 dB səs siqnalı',
      'Çərçivəyə bərkitmə üçün rahat kilid tutacağı daxildir',
      '2 ədəd lazer kəsimli yüksək təhlükəsizlik açarı'
    ]
  }
];

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    id: 'srv-express',
    title: 'Ekspres Diaqnostika & Tənzimləmə',
    duration: '45 dəqiqə',
    priceAZN: 25,
    description: 'Mövsümə hazırlıq və sürətli sazlama üçün əsas baxış paketi.',
    features: [
      'Ön və arxa ötürücülərin dəqiq tənzimlənməsi',
      'Əyləc sisteminin sazlanması və yastıqcıqların yoxlanması',
      'Zəncirin təmizlənməsi və xüsusi teflon yağla sürtgülənməsi',
      'Şinlərin təzyiqinin optimal səviyyəyə çatdırılması',
      'Bütün bolt və bərkidicilərin tork açarı ilə yoxlanması'
    ],
    recommendedFor: 'Hər 2-3 aydan bir aktiv sürüş edənlər üçün'
  },
  {
    id: 'srv-standard',
    title: 'Tam Mövsümi Baxım (Standard Tune-Up)',
    duration: '2.5 saat',
    priceAZN: 60,
    description: 'Velosipedin detallı sökülmədən tam təmizlənməsi, sazlanması və saz vəziyyətə gətirilməsi.',
    features: [
      'Ekspres paketinin bütün xidmətləri daxildir',
      'Təkər disklərinin 8-lik və balans qüsurlarının düzəldilməsi',
      'Sükan kalonkası və pedalların podşipniklərinin yoxlanması',
      'Transmissiyanın ultra-səs vannasında dərindən yuyulması',
      'Kabel və kanatların vəziyyətinin yoxlanması və dəyişdirilməsi'
    ],
    recommendedFor: 'İldə ən azı bir dəfə hər bir velosiped üçün mütləqdir'
  },
  {
    id: 'srv-master',
    title: 'Kapital Master & Hidravlika Servisi',
    duration: '1 iş günü',
    priceAZN: 120,
    description: 'Dağ və peşəkar velosipedlər üçün tam sökülmə, podşipniklərin dəyişimi və amortizator xidməti.',
    features: [
      'Standart paketin bütün bəndləri',
      'Hidravlik əyləclərin təmiz mineral yağla havalandırılması (Bleeding)',
      'Ön və arxa amortizatorların ilkin yağ dəyişimi və təmizliyi',
      'Bütün göbək və vtulka mexanizmlərinin təzə litium sürtgüsü ilə yağlanması',
      'Çərçivə və çəngəlin mikroçatlara qarşı peşəkar yoxlanışı'
    ],
    recommendedFor: 'MTB, dağ enişi və yarış velosipedçiləri üçün'
  }
];

export const STORE_INFO = {
  name: 'velo.az',
  tagline: 'Bakıda Velosiped və Aksessuarların Rəsmi Mərkəzi',
  address: 'Bakı şəhəri, Nəsimi rayonu, Bülbül prospekti 42 (Sahil m/s yaxınlığı)',
  phone: '+994 (12) 490-25-25',
  mobile: '+994 (50) 880-25-25',
  whatsapp: '994508802525',
  email: 'info@velo.az',
  hours: 'Hər gün: 10:00 - 20:00 (Fasiləsiz)',
  deliveryNote: 'Bakı şəhəri daxilində 100 ₼-dən yuxarı sifarişlər PULSUZDUR. Bölgələrə poçt və ya kuryerlə çatdırılma 24-48 saat ərzində.',
  warrantyNote: 'Bütün velosipedlərə 2 il rəsmi çərçivə zəmanəti və 6 ay pulsuz servis xidməti təqdim olunur.'
};
