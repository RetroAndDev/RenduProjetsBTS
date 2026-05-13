// ===================================================================
// FICHIER DU PRODUIT
// ===================================================================
// Ce fichier contient la logique pour gérer les produits physiques,
// y compris l'affichage des options de supports, des configurations
// de stations de travail et des kits de développement.
// Il génère dynamiquement le contenu de la page produits.
// ===================================================================

function generateMediaSection() {
    const container = document.getElementById('media-options-container');
    if (!container) return;

    let html = '';
    
    // Loop through each category
    Object.values(physicalMediaData).forEach(category => {
        html += `
            <div style="margin-bottom: 2rem;">
                <h4 style="margin-bottom: 1rem; color: var(--text);">${category.title}</h4>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">`;
        
        // Add items in category
        category.items.forEach(item => {
            html += `
                    <div class="media-option-row" onclick="addMediaItem('${item.id}', '${item.name}', ${item.price})">
                        ${item.icon} ${item.display}
                    </div>`;
        });
        
        html += `
                </div>
            </div>`;
    });
    
    container.innerHTML = html;
}

// Generate Workstation Configurations
function generateWorkstationConfigs() {
    const container = document.getElementById('workstation-configs-container');
    if (!container) return;

    let html = '';
    
    workstationConfigs.forEach(config => {
        const featuredClass = config.featured ? ' featured' : '';
        const featuredStyle = config.featured 
            ? 'box-shadow: 0 20px 60px rgba(236, 72, 153, 0.3);' 
            : '';
        const iconSize = config.featured ? '3.5rem' : '3rem';
        const titleSize = config.featured ? '2rem' : '1.8rem';
        const titleColor = config.featured ? 'color: var(--accent);' : '';
        const priceSize = config.featured ? '2.5rem' : '2.2rem';
        const priceStyle = config.featured 
            ? 'background: linear-gradient(135deg, var(--success), var(--accent)); -webkit-background-clip: text; -webkit-text-fill-color: transparent;'
            : '';
        const buttonText = config.featured ? '🛒 Commander Maintenant' : '🛒 Commander';
        const buttonPadding = config.featured ? '1.2rem' : '1rem';
        const buttonSize = config.featured ? '1.2rem' : '1.1rem';
        const buttonStyle = config.featured 
            ? 'background: linear-gradient(135deg, var(--accent), var(--primary)); box-shadow: 0 8px 20px rgba(236, 72, 153, 0.3);'
            : '';
        const badgeStyle = config.featured 
            ? `${config.badge.gradient}; box-shadow: 0 4px 15px rgba(236, 72, 153, 0.4);`
            : config.badge.gradient;

        html += `
            <div class="workstation-option fade-in${featuredClass}" style="position: relative; ${featuredStyle}">
                <div class="workstation-badge" style="background: ${badgeStyle}">${config.badge.text}</div>
                <div style="font-size: ${iconSize}; margin-bottom: 1rem; text-align: center;">${config.icon}</div>
                <h5 style="font-size: ${titleSize}; text-align: center; margin-bottom: 1rem; ${titleColor}">${config.name}</h5>
                <div class="storage-info">
                    <p style="font-size: 1.1rem; margin-bottom: 0.75rem;"><strong>${config.storage.ssd.size}</strong> ${config.storage.ssd.type}</p>
                    <p style="font-size: 1.1rem; margin-bottom: 0;"><strong>${config.storage.hdd.size}</strong> ${config.storage.hdd.type}</p>
                </div>
                <div class="workstation-price" style="text-align: center; font-size: ${priceSize}; ${priceStyle}">${config.price}$</div>
                <button class="btn btn-primary" style="width: 100%; padding: ${buttonPadding}; font-size: ${buttonSize}; ${buttonStyle}" 
                    onclick="addToCart('Cartouche Workstation', ${config.price}, '${config.description}')">${buttonText}</button>
            </div>`;
    });
    
    container.innerHTML = html;
}

// Generate DevKits Overview Cards
function generateDevkitsCards() {
    const container = document.getElementById('devkits-grid');
    if (!container) return;

    devkitsOverview.forEach(kit => {
        const card = document.createElement('a');
        card.href = `kits.html?kit=${kit.id}`;
        card.style.textDecoration = 'none';
        
        card.innerHTML = `
            <div class="devkit-card fade-in" style="background: rgba(30, 41, 59, 0.6); border: 2px solid rgba(99, 102, 241, 0.2); padding: 2rem; border-radius: 12px; transition: all 0.3s; cursor: pointer; height: 100%;">
                <div style="font-size: 3rem; margin-bottom: 1rem; text-align: center;">${kit.icon}</div>
                <h3 style="color: var(--text); margin-bottom: 0.5rem; text-align: center;">${kit.title}</h3>
                <p style="color: var(--text-muted); font-size: 0.9rem; text-align: center; margin-bottom: 1rem;">${kit.subtitle}</p>
                <p style="color: var(--success); font-weight: bold; text-align: center; font-size: 1.3rem;">À partir de ${kit.price}$</p>
                <p style="color: var(--primary); font-size: 0.85rem; text-align: center; margin-top: 1rem;">→ Voir les détails</p>
            </div>
        `;
        
        const cardDiv = card.querySelector('.devkit-card');
        card.addEventListener('mouseenter', () => {
            cardDiv.style.borderColor = 'var(--primary)';
            cardDiv.style.background = 'rgba(99, 102, 241, 0.1)';
            cardDiv.style.transform = 'translateY(-5px)';
        });
        card.addEventListener('mouseleave', () => {
            cardDiv.style.borderColor = 'rgba(99, 102, 241, 0.2)';
            cardDiv.style.background = 'rgba(30, 41, 59, 0.6)';
            cardDiv.style.transform = 'translateY(0)';
        });
        
        container.appendChild(card);
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    generateMediaSection();
    generateWorkstationConfigs();
    generateDevkitsCards();
});
