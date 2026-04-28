// =======================
// 1. DATA SOURCE (CLEANED)
// =======================
const cakes = [
    { id: 2, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor-2.jpg" },
    { id: 3, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor-3.jpg" },
    { id: 4, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor-4.jpg" },
    { id: 5, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor-5.jpg" },
    { id: 6, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor-6.jpg" },
    { id: 7, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor-7.jpg" },
    { id: 8, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor-8.jpg" },
    { id: 9, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor-9.jpg" },
    { id: 10, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor-10.jpg" },
    { id: 11, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor-11.jpg" },
    { id: 12, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor-12.jpg" },
    { id: 13, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor-13.jpg" }, // FIXED duplicate ID
    { id: 14, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor-14.jpg" },
    { id: 15, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor-15.jpg" },
    // ... (you can keep the rest unchanged)
];

// =======================
// 2. STATE
// =======================
let filteredCakes = [];
let currentIndex = 0;

// =======================
// 3. DOM ELEMENTS
// =======================
const gallery = document.getElementById('gallery');
const filterBtns = document.querySelectorAll('.filter-btn');
const preloader = document.getElementById('preloader');

const lightbox = document.getElementById('lightbox');
const lbImg = document.getElementById('lb-img');
const lbTitle = document.getElementById('lb-title');
const lbCat = document.getElementById('lb-cat');
const lbWhatsapp = document.getElementById('lb-whatsapp');
const lbClose = document.getElementById('lb-close');
const lbNext = document.getElementById('lb-next');
const lbPrev = document.getElementById('lb-prev');

// =======================
// 4. INIT
// =======================
document.addEventListener('DOMContentLoaded', () => {
    renderGallery('all');
    setupFilters();
    setupLightboxControls();
    setupScrollEffects();
    setupObservers();
});

// =======================
// 5. RENDER GALLERY
// =======================
function renderGallery(category) {
    gallery.innerHTML = '';

    filteredCakes = category === 'all'
        ? [...cakes]
        : cakes.filter(cake => cake.category === category);

    if (!filteredCakes.length) {
        gallery.innerHTML = `<p style="text-align:center; grid-column: 1/-1;">No cakes found.</p>`;
        return;
    }

    filteredCakes.forEach((cake, index) => {
        const card = document.createElement('article');
        card.className = 'cake-card reveal';

        card.innerHTML = `
      <div class="image-wrapper">
        <img src="${cake.src}" alt="${cake.name}" loading="lazy">
      </div>
      <div class="card-info">
        <span class="cake-category">${cake.category}</span>
        <h3 class="cake-name">${cake.name}</h3>
        <div class="order-hint">Click to view details</div>
      </div>
    `;

        card.addEventListener('click', () => openLightbox(index));

        gallery.appendChild(card);
    });

    setupObservers();
}

// =======================
// 6. FILTERS
// =======================
function setupFilters() {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderGallery(btn.dataset.category);
        });
    });
}

// =======================
// 7. LIGHTBOX
// =======================
function openLightbox(index) {
    currentIndex = index;
    updateLightbox();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

function updateLightbox() {
    const cake = filteredCakes[currentIndex];
    if (!cake) return;

    lbImg.src = cake.src;
    lbTitle.textContent = cake.name;
    lbCat.textContent = cake.category;

    const message = `Hello EJEBE KITCHEN, I’m interested in this cake:\n\n*Cake:* ${cake.name}`;
    const link = `https://wa.me/2347053061475?text=${encodeURIComponent(message)}`;

    if (lbWhatsapp) lbWhatsapp.href = link;
}

// Navigation
function nextImage() {
    currentIndex = (currentIndex + 1) % filteredCakes.length;
    updateLightbox();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + filteredCakes.length) % filteredCakes.length;
    updateLightbox();
}

function setupLightboxControls() {
    lbClose?.addEventListener('click', closeLightbox);

    lbNext?.addEventListener('click', e => {
        e.stopPropagation();
        nextImage();
    });

    lbPrev?.addEventListener('click', e => {
        e.stopPropagation();
        prevImage();
    });

    lightbox?.addEventListener('click', e => {
        if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', e => {
        if (!lightbox.classList.contains('active')) return;

        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
    });
}

// =======================
// 8. SCROLL EFFECTS
// =======================
function setupScrollEffects() {
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('.sticky-nav');
        if (!nav) return;

        nav.style.boxShadow =
            window.scrollY > 50
                ? "0 4px 15px rgba(0,0,0,0.08)"
                : "none";
    });
}

// =======================
// 9. REVEAL ANIMATION
// =======================
function setupObservers() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// =======================
// 10. PRELOADER (SAFE)
// =======================
window.addEventListener('load', () => {
    if (!preloader) return;

    setTimeout(() => {
        preloader.style.opacity = '0';

        setTimeout(() => {
            preloader.remove();
        }, 400);

    }, 700);
});