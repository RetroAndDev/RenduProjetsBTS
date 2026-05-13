// ===================================================================
// FICHIER DU KIT DEV
// ===================================================================
// Ce fichier contient la logique pour afficher les détails d'un DevKit,
// gérer les options de personnalisation et ajouter le kit au panier.
// ===================================================================

const urlParams = new URLSearchParams(window.location.search);
const kitId = urlParams.get('kit');

let currentKit = null;
let selectedOptions = [];

// Charger le kit depuis les données centralisées (products-data.js)
currentKit = kitsData.find(k => k.id === kitId);
if (currentKit) {
    renderKit(currentKit);
} else {
    document.getElementById('kit-content').innerHTML = '<p style="text-align: center; color: var(--text-muted);">Kit non trouvé. <a href="devkits.html">Retour aux DevKits</a></p>';
}

function renderKit(kit) {
    // Mettre à jour le titre de la page et hero
    document.getElementById('page-title').textContent = kit.title + ' - Cartouche Studio';
    document.getElementById('hero-title').textContent = kit.title;
    document.getElementById('hero-subtitle').textContent = kit.heroSubtitle;

    // Générer les quick specs
    const quickSpecsHTML = kit.quickSpecs.map(spec => `
        <div class="spec-badge">
            <h5>${spec.label}</h5>
            <p>${spec.value}</p>
        </div>
    `).join('');

    // Générer les specs détaillées
    const detailedSpecsHTML = kit.detailedSpecs.map(spec => `
        <div class="spec-card">
            <h4>${spec.icon} ${spec.title}</h4>
            <p>${spec.content}</p>
        </div>
    `).join('');

    // Générer la liste d'inclusion
    const includesHTML = kit.includes.map(item => `<li>${item}</li>`).join('');

    // Générer les options
    const optionsHTML = kit.options.map(option => `
        <div class="option-card" onclick="toggleOption('${option.id}', ${option.price})">
            <div style="font-size: 1.8rem; margin-bottom: 0.5rem;">${option.icon}</div>
            <div style="font-weight: 600; color: var(--text); margin-bottom: 0.25rem;">${option.title}</div>
            <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.5rem;">${option.description}</div>
            <div style="color: var(--success); font-weight: bold;">+${option.price}$</div>
            <input type="checkbox" id="option-${option.id}" style="display: none;" />
        </div>
    `).join('');

    // Construire le HTML complet
    const html = `
        <!-- Product Main Section -->
        <div class="kit-main">
            <!-- Gallery -->
            <div class="kit-gallery">
                <div class="kit-image-main">${kit.icon}</div>
            </div>

            <!-- Product Info -->
            <div class="kit-info">
                <h1>${kit.title}</h1>
                <p class="kit-subtitle">${kit.subtitle}</p>

                <div class="kit-price">${kit.price}$</div>
                <div class="kit-stock">${kit.stock}</div>

                <p class="kit-description">${kit.description}</p>

                <!-- Quick Specs -->
                <div class="kit-specs-grid">
                    ${quickSpecsHTML}
                </div>

                <!-- Action Buttons -->
                <div class="action-buttons">
                    <button class="btn btn-primary" onclick="scrollToOptions()">Personnaliser & Acheter</button>
                </div>
            </div>
        </div>

        <!-- Detailed Specs -->
        <div class="specs-section">
            <h2>Spécifications Techniques Détaillées</h2>
            
            <div class="specs-grid">
                ${detailedSpecsHTML}
            </div>

            <!-- Modifications -->
            <div style="background: rgba(0,0,0,0.2); padding: 1.5rem; border-radius: 8px; margin-top: 2rem; border-left: 4px solid var(--primary);">
                <h3 style="color: var(--primary); margin-bottom: 1rem;">Modifications Professionnelles Intégrées</h3>
                <p style="color: var(--text-muted); margin: 0;">${kit.modifications}</p>
            </div>
        </div>

        <!-- What's Included -->
        <div class="includes-section">
            <h3>📦 Ce qui est inclus</h3>
            <ul class="includes-list">
                ${includesHTML}
            </ul>
        </div>

        <!-- Options et personnalisation -->
        <div class="options-section" id="options">
            <h2>🎨 Modules Additionnels</h2>
            <p style="color: var(--text-muted); margin-bottom: 2rem;">
                Personnalisez votre DevKit en ajoutant des modules et accessoires optionnels
            </p>

            <div class="options-grid">
                ${optionsHTML}
            </div>

            <!-- Price Summary -->
            <div class="price-summary">
                <div class="price-row">
                    <span>Prix de base:</span>
                    <span>${kit.price}$</span>
                </div>
                <div class="price-row">
                    <span>Modules additionnels:</span>
                    <span id="options-price">0$</span>
                </div>
                <div class="price-row total">
                    <span>Total:</span>
                    <span id="total-price">${kit.price}$</span>
                </div>
            </div>

            <!-- Buy Button -->
            <button class="btn btn-primary" style="width: 100%; margin-top: 1.5rem; padding: 1rem; font-size: 1.1rem;" onclick="buyWithOptions()">🛒 Ajouter au panier</button>
        </div>
    `;

    document.getElementById('kit-content').innerHTML = html;
}

function toggleOption(optionId, price) {
    const checkbox = document.getElementById('option-' + optionId);
    const card = checkbox.parentElement;
    
    card.classList.toggle('active');
    checkbox.checked = !checkbox.checked;
    
    if (checkbox.checked) {
        selectedOptions.push({ id: optionId, price: price });
    } else {
        selectedOptions = selectedOptions.filter(opt => opt.id !== optionId);
    }
    
    updatePrice();
}

function updatePrice() {
    const optionsTotal = selectedOptions.reduce((sum, opt) => sum + opt.price, 0);
    const total = currentKit.price + optionsTotal;
    
    document.getElementById('options-price').textContent = optionsTotal + '$';
    document.getElementById('total-price').textContent = total + '$';
}

function buyWithOptions() {
    const optionsTotal = selectedOptions.reduce((sum, opt) => sum + opt.price, 0);
    const total = currentKit.price + optionsTotal;
    
    // Récupérer les noms des options sélectionnées
    const optionNames = selectedOptions.map(opt => {
        const option = currentKit.options.find(o => o.id === opt.id);
        return option ? option.title : '';
    });
    
    const variant = optionNames.length > 0 ? 
        currentKit.title.replace(' DevKit', '') + ' + ' + optionNames.join(', ') : 
        currentKit.title.replace(' DevKit', '');
    
    addToCart('DevKit ' + currentKit.title.replace(' DevKit', ''), total, variant);
    
    // Réinitialiser les sélections
    document.querySelectorAll('.option-card').forEach(card => {
        card.classList.remove('active');
    });
    document.querySelectorAll('[id^="option-"]').forEach(checkbox => {
        checkbox.checked = false;
    });
    selectedOptions = [];
    updatePrice();
    
    //alert('✓ Ajouté au panier!\n\n' + variant + '\n' + total + '$');
}

function scrollToOptions() {
    document.getElementById('options').scrollIntoView({ behavior: 'smooth' });
}