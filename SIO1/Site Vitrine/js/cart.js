// ===================================================================
// FICHIER DU PANIER D'ACHAT - GLOBAL ET PERSISTANT
// ===================================================================
// Ce fichier gère un panier unique et synchronisé entre toutes les pages
// Utilise localStorage comme source de vérité
// ===================================================================

// Fonction pour charger le panier depuis localStorage
function loadCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

// Fonction pour sauvegarder le panier dans localStorage
function saveCart(cartData) {
    localStorage.setItem('cart', JSON.stringify(cartData));
}

// Getter pour accéder au panier (toujours à jour depuis localStorage)
function getCart() {
    return loadCart();
}

function toggleCart() {
    const sidebar = document.getElementById('cartSidebar');
    if (sidebar) {
        sidebar.classList.toggle('open');
    }
}

function updateCart() {
    const cartItems = document.getElementById('cartItems');
    const cartFooter = document.getElementById('cartFooter');
    const cartCount = document.getElementById('cartCount');
    const cartTotal = document.getElementById('cartTotal');

    // Vérifier que les éléments existent
    if (!cartItems || !cartFooter || !cartCount || !cartTotal) {
        return;
    }

    const cart = getCart();

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <p style="font-size: 3rem; margin-bottom: 1rem;">🛒</p>
                <p>Votre panier est vide</p>
            </div>
        `;
        cartFooter.style.display = 'none';
        cartCount.textContent = '0';
    } else {
        cartItems.innerHTML = cart.map((item, index) => `
            <div class="cart-item">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>${item.variant || ''}</p>
                </div>
                <div style="display: flex; align-items: center;">
                    <div class="cart-item-price">${item.price}$</div>
                    <button class="remove-item" onclick="removeFromCart(${index})">×</button>
                </div>
            </div>
        `).join('');
        
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        cartTotal.textContent = total.toFixed(2) + '$';
        cartFooter.style.display = 'block';
        cartCount.textContent = cart.length;
    }
}

function addToCart(name, price, variant = '') {
    const cart = getCart();
    cart.push({ name, price, variant });
    saveCart(cart);
    updateCart();
    
    // Show notification
    alert(`✅ ${name} ajouté au panier !`);
}

function removeFromCart(index) {
    const cart = getCart();
    cart.splice(index, 1);
    saveCart(cart);
    updateCart();
}

function checkout() {
    const cart = getCart();
    if (cart.length === 0) return;
    
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    alert(`🎉 Commande validée !\n\nTotal: ${total.toFixed(2)}$\n\nMerci pour votre achat chez Cartouche Studio !`);
    saveCart([]);
    updateCart();
    toggleCart();
}

// Smooth scrolling
document.addEventListener('DOMContentLoaded', () => {
    // Initialize cart display on page load
    if (document.getElementById('cartItems')) {
        updateCart();
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

    // Set active nav link
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('nav a').forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
});
