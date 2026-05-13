// ===================================================================
// FICHIER DU MEDIA CART
// ===================================================================
// Ce fichier contient la logique pour gérer le panier des supports physiques,
// y compris l'ajout, la suppression d'articles, la modification des quantités
// et le passage à la caisse.
// Il inclut également la gestion des demandes de production personnalisée.
// ===================================================================

let mediaCart = JSON.parse(localStorage.getItem('mediaCart')) || {};

function addMediaItem(mediaId, mediaName, price) {
    if (!mediaCart[mediaId]) {
        mediaCart[mediaId] = { name: mediaName, price: price, qty: 25 };
    } else {
        mediaCart[mediaId].qty += 25;
    }
    saveMediaCart();
    updateMediaCartDisplay();
}

function saveMediaCart() {
    localStorage.setItem('mediaCart', JSON.stringify(mediaCart));
}

function removeMediaItem(mediaId) {
    delete mediaCart[mediaId];
    saveMediaCart();
    updateMediaCartDisplay();
}

function changeMediaQty(mediaId, newQty) {
    if (newQty < 25) newQty = 25;
    saveMediaCart();
    mediaCart[mediaId].qty = newQty;
    updateMediaCartDisplay();
}

function updateMediaCartDisplay() {
    const cartDiv = document.getElementById('media-cart');
    let totalQty = 0;
    let totalPrice = 0;

    if (Object.keys(mediaCart).length === 0) {
        cartDiv.innerHTML = '<p style="color: var(--text-muted); text-align: center; padding: 2rem;">Cliquez sur un support pour l\'ajouter à votre commande</p>';
    } else {
        let html = '';
        for (const [id, item] of Object.entries(mediaCart)) {
            const itemTotal = item.price * item.qty;
            totalPrice += itemTotal;
            totalQty += item.qty;
            html += `
                <div style="background: rgba(99, 102, 241, 0.1); padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
                        <strong style="color: var(--primary);">${item.name}</strong>
                        <button onclick="removeMediaItem('${id}')" style="background: rgba(236, 72, 153, 0.3); border: none; color: var(--accent); cursor: pointer; padding: 0.25rem 0.75rem; border-radius: 4px;">✕</button>
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.9rem;">
                        <div>
                            <input type="number" value="${item.qty}" min="25" step="25" onchange="changeMediaQty('${id}', parseInt(this.value))" style="width: 70px; padding: 0.25rem; background: rgba(0,0,0,0.3); border: 1px solid var(--primary); color: var(--text); border-radius: 4px;">
                            <span style="color: var(--text-muted); margin-left: 0.5rem;">unités</span>
                        </div>
                        <span style="color: var(--success); font-weight: bold;">${itemTotal}$</span>
                    </div>
                </div>
            `;
        }
        cartDiv.innerHTML = html;
    }

    document.getElementById('media-total-qty').textContent = totalQty;
    document.getElementById('media-total-price').textContent = totalPrice + '$';
}

function clearMediaCart() {
    saveMediaCart();
    mediaCart = {};
    updateMediaCartDisplay();
}

function checkoutMediaCart() {
    if (Object.keys(mediaCart).length === 0) {
        alert('Veuillez ajouter au moins un support à votre commande');
        return;
    }

    let totalQty = 0;
    let totalPrice = 0;
    let itemsList = [];

    for (const [id, item] of Object.entries(mediaCart)) {
        const itemTotal = item.price * item.qty;
        totalPrice += itemTotal;
        totalQty += item.qty;
        itemsList.push(`${item.name} (×${item.qty})`);
    }

    const variant = itemsList.join(', ');
    addToCart('Supports Physiques', totalPrice, variant);
    saveMediaCart();
    
    mediaCart = {};
    updateMediaCartDisplay();
}

function requestProduction(serviceName) {
    alert(`Service: ${serviceName}\n\nNous vous contacterons bientôt pour discuter de votre projet.\nContactez-nous: support@cartouche-studio.com\nTéléphone: +33 (0) 123 456 789`);
}

function requestProductionQuote() {
    const email = prompt('Entrez votre email pour recevoir un devis personnalisé:');
    if (email && email.length > 0) {
        alert(`Merci! Un expert prendra contact avec vous à: ${email}\n\nNous étudierons votre projet et vous proposerons une solution adaptée.`);
    }
}

// Hover effect for service cards
document.addEventListener('DOMContentLoaded', function() {
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.borderColor = 'var(--accent)';
            this.style.background = 'rgba(236, 72, 153, 0.05)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.borderColor = 'rgba(99, 102, 241, 0.3)';
            this.style.background = 'rgba(0, 0, 0, 0.2)';
        });
    });
});