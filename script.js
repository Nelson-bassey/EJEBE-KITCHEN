// 1. DATA SOURCE
const cakes = [
    { id: 1, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor(1).jpg" },
    { id: 2, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor(2).jpg" },
    { id: 3, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor(3).jpg" },
    { id: 4, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor(4).jpg" },
    { id: 5, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor(5).jpg" },
    { id: 6, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor(6).jpg" },
    { id: 7, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor(7).jpg" },
    { id: 8, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor(8).jpg" },
    { id: 9, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor(9).jpg" },
    { id: 10, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor(10).jpg" },
    { id: 11, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor(11).jpg" },
    { id: 12, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor(12).jpg" },
    { id: 12, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor(13).jpg" },
    { id: 13, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor(14).jpg" },
    { id: 14, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor(15).jpg" },
    { id: 15, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor(16).jpg" },
    { id: 16, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor(17).jpg" },
    { id: 17, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor(18).jpg" },
    { id: 18, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor(19).jpg" },
    { id: 19, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor(20).jpg" },
    { id: 20, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor(21).jpg" },
    { id: 21, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor(22).jpg" },
    { id: 22, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor(23).jpg" },
    { id: 23, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor(24).jpg" },
    { id: 24, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor(25).jpg" },
    { id: 25, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor(26).jpg" },
    { id: 26, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor(27).jpg" },
    { id: 27, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor(28).jpg" },
    { id: 28, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor(29).jpg" },
    { id: 29, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor(30).jpg" },
    { id: 31, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor(31).jpg" },
    { id: 32, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor(32).jpg" },
    { id: 33, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor(33).jpg" },
    { id: 34, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor(34).jpg" },
    { id: 35, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor(35).jpg" },
    { id: 36, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor(36).jpg" },
    { id: 37, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor(37).jpg" },
    { id: 38, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor(38).jpg" },
    { id: 39, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor(39).jpg" },
    { id: 40, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor(40).jpg" },
    { id: 41, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor(41).jpg" },
    { id: 42, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor(42).jpg" },
    { id: 43, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor(43).jpg" },
    { id: 44, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor(44).jpg" },
    { id: 45, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor(45).jpg" },
    { id: 46, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor(46).jpg" },
    { id: 47, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor(47).jpg" },
    { id: 48, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor(48).jpg" },
    { id: 49, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor(49).jpg" },
    { id: 50, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor(50).jpg" },
    { id: 51, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor(51).jpg" },
    { id: 52, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor(52).jpg" },
    { id: 53, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor(53).jpg" },
    { id: 54, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor(54).jpg" },
    { id: 55, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor(55).jpg" },
    { id: 56, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor(56).jpg" },
    { id: 57, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor(57).jpg" },
    { id: 58, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor(58).jpg" },
    { id: 59, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor(59).jpg" },
    { id: 60, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor(60).jpg" },
    { id: 61, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor(61).jpg" },
    { id: 62, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor(62).jpg" },
    { id: 63, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor(63).jpg" },
    { id: 64, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor(64).jpg" },
    { id: 65, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor(65).jpg" },
    { id: 66, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor(66).jpg" },
    { id: 67, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor(67).jpg" },
    { id: 68, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor(68).jpg" },
    { id: 69, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor(69).jpg" },
    { id: 70, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor(70).jpg" },
    { id: 71, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor(71).jpg" },
    { id: 72, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor(72).jpg" },
    { id: 73, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor(73).jpg" },
    { id: 74, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor(74).jpg" },
    { id: 75, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor(75).jpg" },
    { id: 76, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor(76).jpg" },
    { id: 77, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor(77).jpg" },
    { id: 78, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor(78).jpg" },
    { id: 79, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor(79).jpg" },
    { id: 80, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor(80).jpg" },
    { id: 81, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor(81).jpg" },
    { id: 82, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor(82).jpg" },
    { id: 83, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor(83).jpg" },
    { id: 84, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor(84).jpg" },
    { id: 85, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor(85).jpg" },
    { id: 86, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor(86).jpg" },
    { id: 87, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor(87).jpg" },
    { id: 88, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor(88).jpg" },
    { id: 89, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor(89).jpg" },
    { id: 90, name: "Chocolate Overload", category: "decor", src: "ASSETS/decor(90).jpg" }
];

// 2. STATE & DOM ELEMENTS
let filteredCakes = []; 
let currentIndex = 0;   

const galleryContainer = document.getElementById('gallery');
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

// 3. INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
    renderGallery('all');
    setupObservers();
    
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.style.opacity = '0';
            preloader.style.visibility = 'hidden';
        }, 800);
    });
});

// 4. RENDERING GALLERY
function renderGallery(category) {
    galleryContainer.innerHTML = '';
    
    if (category === 'all') {
        filteredCakes = [...cakes];
    } else {
        filteredCakes = cakes.filter(cake => cake.category === category);
    }

    if(filteredCakes.length === 0) {
        galleryContainer.innerHTML = '<p style="text-align:center; grid-column: 1/-1; padding: 2rem;">No cakes found in this category yet.</p>';
        return;
    }

    filteredCakes.forEach((cake, index) => {
        const card = document.createElement('article');
        card.className = 'cake-card reveal';
        card.onclick = () => openLightbox(index);

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
        galleryContainer.appendChild(card);
    });

    setupObservers();
}

// 5. FILTERING LOGIC
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const category = btn.getAttribute('data-category');
        renderGallery(category);
    });
});

// 6. LIGHTBOX LOGIC
function openLightbox(index) {
    currentIndex = index;
    updateLightboxContent();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

function updateLightboxContent() {
    const cake = filteredCakes[currentIndex];
    lbImg.src = cake.src;
    lbTitle.textContent = cake.name;
    lbCat.textContent = cake.category;
    
    const message = `Hello EJEBE KITCHEN, I’m interested in this cake:\n\n*Cake Name:* ${cake.name}\n*Image:* ${cake.src}`;
    const waLink = `https://wa.me/?text=${encodeURIComponent(message)}`;
    lbWhatsapp.href = waLink;
}

function nextImage() {
    currentIndex = (currentIndex + 1) % filteredCakes.length;
    updateLightboxContent();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + filteredCakes.length) % filteredCakes.length;
    updateLightboxContent();
}

lbClose.addEventListener('click', closeLightbox);
lbNext.addEventListener('click', (e) => { e.stopPropagation(); nextImage(); });
lbPrev.addEventListener('click', (e) => { e.stopPropagation(); prevImage(); });

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
});

// KEYBOARD NAVIGATION LOGIC
document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;

    switch(e.key) {
        case 'Escape':
            e.preventDefault();
            closeLightbox();
            break;
        case 'ArrowRight':
            e.preventDefault(); 
            nextImage();
            break;
        case 'ArrowLeft':
            e.preventDefault(); 
            prevImage();
            break;
    }
});

// 7. SCROLL REVEAL ANIMATION
function setupObservers() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));
}