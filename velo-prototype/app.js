/**
 * velo.az - Standalone Prototype Vanilla JavaScript
 * Zero external library dependencies - Works in all modern browsers
 */

const PRODUCTS_DATA = [
  {
    id: 'velo-mtb-carbon-pro',
    name: 'Velo Peak Carbon FS 29',
    sku: 'VL-MTB-2901',
    category: 'mountain',
    categoryLabel: 'Dağ Velosipedləri (MTB)',
    priceAZN: 1850,
    originalPriceAZN: 2150,
    image: '../src/assets/images/velo_mountain_bike_1792403936849.jpg',
    inStock: true,
    isSale: true,
    frame: 'Full Carbon Toray T800',
    wheel: '29"',
    speeds: '1x12 Shimano Deore XT',
    brakes: 'Shimano MT501 Hidravlik',
    weight: '11.8 kq',
    sizes: ['S (15")', 'M (17")', 'L (19")', 'XL (21")'],
    desc: 'Qafqaz dağ yolları və çətin relyeflər üçün hazırlanmış tam asqılı (Full Suspension) premium dağ velosipedi. Fox pnevmatik amortizator və Maxxis təkərlər.'
  },
  {
    id: 'velo-gravel-argon-apex',
    name: 'Velo Strata Gravel All-Road',
    sku: 'VL-GRV-7002',
    category: 'road',
    categoryLabel: 'Yol və Gravel',
    priceAZN: 2290,
    originalPriceAZN: 2490,
    image: '../src/assets/images/velo_gravel_road_1792403937893.jpg',
    inStock: true,
    isSale: true,
    frame: 'Yüngül Karbon Monokok',
    wheel: '28" (700x42c)',
    speeds: '2x11 Shimano GRX 810',
    brakes: 'Shimano GRX Hidravlik Disk',
    weight: '8.9 kq',
    sizes: ['52cm (S)', '54cm (M)', '56cm (L)', '58cm (XL)'],
    desc: 'Bakı küçələri və Abşeronun çınqıllı yollarında rahat və sürətli sürüş üçün ideal universal gravel velosiped.'
  },
  {
    id: 'velo-urban-aurora-ebike',
    name: 'Velo Aurora Urban E-Commuter',
    sku: 'VL-EBK-5501',
    category: 'electric',
    categoryLabel: 'Elektrikli (E-Bike)',
    priceAZN: 1980,
    image: '../src/assets/images/velo_urban_ebike_1792403937467.jpg',
    inStock: true,
    frame: 'Alüminium 6061 Hydroformed',
    wheel: '28"',
    speeds: 'Shimano Nexus 8 Daxili',
    brakes: 'Tektro E-Bike Hidravlik Disk',
    weight: '17.5 kq',
    sizes: ['M (165-178 sm)', 'L (176-190 sm)'],
    desc: 'Bakının təpəli relyefində gündəlik işə və gəzintiyə çıxmaq üçün 75 km məsafə qət edən inteqrasiya olunmuş elektrikli velosiped.'
  },
  {
    id: 'velo-mtb-trail-comp',
    name: 'Velo Hardtail Trail 29 Comp',
    sku: 'VL-MTB-2905',
    category: 'mountain',
    categoryLabel: 'Dağ Velosipedləri (MTB)',
    priceAZN: 890,
    originalPriceAZN: 990,
    image: '../src/assets/images/velo_mountain_bike_1792403936849.jpg',
    inStock: true,
    isSale: true,
    frame: 'Alüminium Alloy 6061-T6',
    wheel: '29"',
    speeds: '1x10 Shimano Cues',
    brakes: 'Shimano MT200 Hidravlik',
    weight: '13.4 kq',
    sizes: ['S (15")', 'M (17")', 'L (19")'],
    desc: 'SR Suntour 100mm bloklanan amortizator və Shimano hidravlik əyləclər ilə etibarlı universal seçim.'
  },
  {
    id: 'velo-acc-aero-pro-kit',
    name: 'Aero Pro Dəbilqə və Aksessuar Dəsti',
    sku: 'VL-ACC-091',
    category: 'accessories',
    categoryLabel: 'Aksesuar & Qoruyucu',
    priceAZN: 185,
    originalPriceAZN: 220,
    image: '../src/assets/images/velo_accessories_gear_1792403953318.jpg',
    inStock: true,
    isSale: true,
    frame: 'Kompozit & Polikarbonat',
    wheel: 'Universal',
    speeds: 'Standart',
    brakes: 'N/A',
    weight: '0.85 kq',
    sizes: ['M (54-58 sm)', 'L (58-62 sm)'],
    desc: 'MIPS qoruyucu sistemli aero dəbilqə, sukeçirməz sükan çantası, 800 lumen USB LED fənər və 16 funksiyalı multitool.'
  }
];

// App State
let state = {
  cart: JSON.parse(localStorage.getItem('velo_standalone_cart') || '[]'),
  category: 'all',
  searchQuery: '',
  maxPrice: 3000,
  sortBy: 'featured'
};

const WHATSAPP_NUMBER = '994508802525';

// Format AZN
function formatAZN(num) {
  return num.toLocaleString('az-AZ') + ' ₼';
}

// Render Products Grid
function renderProducts() {
  const grid = document.getElementById('products-grid');
  if (!grid) return;

  const filtered = PRODUCTS_DATA.filter(item => {
    if (state.category !== 'all' && item.category !== state.category) return false;
    if (item.priceAZN > state.maxPrice) return false;
    if (state.searchQuery.trim()) {
      const q = state.searchQuery.toLowerCase();
      return (
        item.name.toLowerCase().includes(q) ||
        item.categoryLabel.toLowerCase().includes(q) ||
        item.frame.toLowerCase().includes(q)
      );
    }
    return true;
  }).sort((a, b) => {
    if (state.sortBy === 'price-asc') return a.priceAZN - b.priceAZN;
    if (state.sortBy === 'price-desc') return b.priceAZN - a.priceAZN;
    return 0;
  });

  const countEl = document.getElementById('product-count');
  if (countEl) countEl.innerText = filtered.length;

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3rem; background: #fafafa; border-radius: 12px;">
        <h4 style="font-size: 1.1rem; margin-bottom: 0.5rem;">Uyğun məhsul tapılmadı</h4>
        <p style="color: #71717a; font-size: 0.85rem;">Filtrləri təmizləyərək yenidən yoxlayın.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(item => `
    <div class="product-card" onclick="openProductDetail('${item.id}')">
      <div class="img-box">
        <img src="${item.image}" alt="${item.name}" loading="lazy" />
        ${item.isSale ? `<span class="badge-sale">Endirim</span>` : ''}
      </div>
      <div class="details">
        <div>
          <div class="product-meta">${item.categoryLabel} · ${item.wheel}</div>
          <h3 class="product-title">${item.name}</h3>
          <p class="product-specs">${item.frame} · ${item.speeds}</p>
        </div>
        <div class="product-footer">
          <div>
            <span class="price-tag">${formatAZN(item.priceAZN)}</span>
            ${item.originalPriceAZN ? `<span class="price-old">${formatAZN(item.originalPriceAZN)}</span>` : ''}
          </div>
          <button class="btn-quick-add" onclick="event.stopPropagation(); addToCart('${item.id}')">
            Səbətə At
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// Add to Cart
function addToCart(productId, size = 'Standart', qty = 1) {
  const prod = PRODUCTS_DATA.find(p => p.id === productId);
  if (!prod) return;

  const existing = state.cart.find(c => c.id === productId && c.size === size);
  if (existing) {
    existing.qty += qty;
  } else {
    state.cart.push({
      id: prod.id,
      name: prod.name,
      price: prod.priceAZN,
      image: prod.image,
      size: size || prod.sizes[0],
      qty: qty
    });
  }
  saveCart();
  updateCartBadge();
  renderCartDrawer();
  openCartDrawer();
}

function updateCartBadge() {
  const badge = document.getElementById('cart-badge');
  const totalQty = state.cart.reduce((s, i) => s + i.qty, 0);
  if (badge) badge.innerText = totalQty;
}

function saveCart() {
  localStorage.setItem('velo_standalone_cart', JSON.stringify(state.cart));
}

// Render Cart Drawer
function renderCartDrawer() {
  const container = document.getElementById('cart-items-container');
  const subtotalEl = document.getElementById('cart-subtotal');
  const totalEl = document.getElementById('cart-total');
  if (!container) return;

  const subtotal = state.cart.reduce((s, i) => s + i.price * i.qty, 0);
  const delivery = subtotal >= 100 || subtotal === 0 ? 0 : 5;
  const finalTotal = subtotal + delivery;

  if (subtotalEl) subtotalEl.innerText = formatAZN(subtotal);
  if (totalEl) totalEl.innerText = formatAZN(finalTotal);

  if (state.cart.length === 0) {
    container.innerHTML = `<p style="text-align: center; color: #71717a; padding: 2rem 0;">Səbətiniz boşdur.</p>`;
    return;
  }

  container.innerHTML = state.cart.map((item, idx) => `
    <div style="display: flex; gap: 0.75rem; align-items: center; padding: 0.75rem 0; border-bottom: 1px solid #f4f4f5;">
      <img src="${item.image}" style="width: 50px; height: 50px; border-radius: 8px; object-fit: cover;" />
      <div style="flex: 1;">
        <h4 style="font-size: 0.85rem; font-weight: 700;">${item.name}</h4>
        <div style="font-size: 0.75rem; color: #71717a;">${item.size} · ${formatAZN(item.price)}</div>
        <div style="display: flex; align-items: center; gap: 0.5rem; margin-top: 0.25rem;">
          <button onclick="changeQty(${idx}, -1)" style="padding: 2px 6px; border: 1px solid #e4e4e7; background: #fff; border-radius: 4px; cursor: pointer;">-</button>
          <span style="font-size: 0.8rem; font-weight: 700;">${item.qty}</span>
          <button onclick="changeQty(${idx}, 1)" style="padding: 2px 6px; border: 1px solid #e4e4e7; background: #fff; border-radius: 4px; cursor: pointer;">+</button>
        </div>
      </div>
      <button onclick="removeFromCart(${idx})" style="background: none; border: none; color: #ef4444; cursor: pointer; font-size: 0.8rem;">Sil</button>
    </div>
  `).join('');
}

function changeQty(index, delta) {
  if (!state.cart[index]) return;
  state.cart[index].qty += delta;
  if (state.cart[index].qty <= 0) {
    state.cart.splice(index, 1);
  }
  saveCart();
  updateCartBadge();
  renderCartDrawer();
}

function removeFromCart(index) {
  state.cart.splice(index, 1);
  saveCart();
  updateCartBadge();
  renderCartDrawer();
}

// Drawers & Modals
function openCartDrawer() {
  document.getElementById('cart-drawer-overlay').classList.add('active');
}
function closeCartDrawer() {
  document.getElementById('cart-drawer-overlay').classList.remove('active');
}

// Product Detail Modal
function openProductDetail(id) {
  const prod = PRODUCTS_DATA.find(p => p.id === id);
  if (!prod) return;

  const modal = document.getElementById('product-detail-modal');
  const content = document.getElementById('product-detail-content');
  if (!modal || !content) return;

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Salam velo.az! "${prod.name}" (Kod: ${prod.sku}, Qiymət: ${prod.priceAZN} AZN) haqqında məlumat almaq istəyirəm.`
  )}`;

  content.innerHTML = `
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
      <div>
        <img src="${prod.image}" style="width: 100%; border-radius: 12px; aspect-ratio: 4/3; object-fit: cover;" />
        <div style="margin-top: 1rem; font-size: 0.8rem; color: #52525b; line-height: 1.5;">
          ${prod.desc}
        </div>
      </div>
      <div>
        <div style="font-size: 0.75rem; color: #a1a1aa; font-family: monospace;">SKU: ${prod.sku}</div>
        <h2 style="font-size: 1.5rem; font-weight: 800; margin: 0.25rem 0 0.75rem;">${prod.name}</h2>
        <div style="font-size: 1.75rem; font-weight: 800; color: #09090b; margin-bottom: 1rem;">${formatAZN(prod.priceAZN)}</div>
        
        <div style="font-size: 0.8rem; margin-bottom: 1rem;">
          <div><strong>Çərçivə:</strong> ${prod.frame}</div>
          <div><strong>Ötürücü:</strong> ${prod.speeds}</div>
          <div><strong>Əyləc:</strong> ${prod.brakes}</div>
          <div><strong>Çəki:</strong> ${prod.weight}</div>
        </div>

        <button onclick="addToCart('${prod.id}', '${prod.sizes[0]}'); closeProductDetail();" class="btn-primary" style="width: 100%; margin-bottom: 0.5rem;">
          Səbətə Əlavə Et
        </button>

        <a href="${whatsappUrl}" target="_blank" class="btn-secondary" style="display: block; text-align: center; background: #059669; border-color: #059669;">
          WhatsApp ilə Sifariş
        </a>
      </div>
    </div>
  `;
  modal.classList.add('active');
}

function closeProductDetail() {
  document.getElementById('product-detail-modal').classList.remove('active');
}

// Size Calculator Formula
function calculateSize() {
  const height = Number(document.getElementById('calc-height-input').value);
  const resultBox = document.getElementById('calc-result-box');
  if (!resultBox) return;

  let size = 'M';
  let inches = '17" - 18"';
  if (height < 155) { size = 'XS'; inches = '13" - 14"'; }
  else if (height <= 168) { size = 'S'; inches = '15" - 16"'; }
  else if (height <= 178) { size = 'M'; inches = '17" - 18"'; }
  else if (height <= 188) { size = 'L'; inches = '19" - 20"'; }
  else { size = 'XL'; inches = '21" - 22"'; }

  resultBox.innerHTML = `
    <div style="background: #fef3c7; border: 1px solid #fde68a; padding: 1rem; border-radius: 12px; margin-top: 1rem;">
      <h4 style="color: #92400e; font-size: 0.85rem; font-weight: 800; text-transform: uppercase;">Hesablanmış Ölçü:</h4>
      <div style="font-size: 2rem; font-weight: 800; color: #18181b;">${size} (${inches})</div>
      <p style="font-size: 0.75rem; color: #78350f; margin-top: 0.25rem;">${height} sm boy üçün optimal velosiped çərçivəsidir.</p>
    </div>
  `;
}

// Initial Listeners Setup
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  updateCartBadge();
  renderCartDrawer();

  // Search input
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      renderProducts();
    });
  }

  // Sort selector
  const sortSelect = document.getElementById('sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      state.sortBy = e.target.value;
      renderProducts();
    });
  }

  // Category buttons
  const catButtons = document.querySelectorAll('[data-category]');
  catButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      state.category = btn.getAttribute('data-category');
      catButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProducts();
    });
  });
});
