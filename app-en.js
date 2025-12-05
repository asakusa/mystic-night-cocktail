// Application state
let selectedBubbles = [];
let currentCocktail = null;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initBubbles();
    setupEventListeners();
});

// Create bubbles
function initBubbles() {
    const container = document.getElementById('bubble-container');
    const containerWidth = window.innerWidth;
    const containerHeight = container.offsetHeight;
    
    bubbleData.forEach((bubble, index) => {
        const bubbleEl = document.createElement('div');
        bubbleEl.className = `bubble ${bubble.color}`;
        bubbleEl.textContent = bubble.text;
        bubbleEl.dataset.id = bubble.id;
        
        // Random position
        const x = Math.random() * (containerWidth - bubble.size - 40) + 20;
        const y = Math.random() * (containerHeight - bubble.size - 40) + 20;
        
        bubbleEl.style.width = bubble.size + 'px';
        bubbleEl.style.height = bubble.size + 'px';
        bubbleEl.style.left = x + 'px';
        bubbleEl.style.top = y + 'px';
        bubbleEl.style.animationDelay = (index * 0.2) + 's';
        
        bubbleEl.addEventListener('click', () => toggleBubble(bubble, bubbleEl));
        container.appendChild(bubbleEl);
    });
}

// Toggle bubble selection
function toggleBubble(bubble, element) {
    const index = selectedBubbles.findIndex(b => b.id === bubble.id);
    
    if (index > -1) {
        selectedBubbles.splice(index, 1);
        element.classList.remove('selected');
    } else {
        selectedBubbles.push(bubble);
        element.classList.add('selected');
    }
    
    updateSelectionBar();
}

// Update selection bar
function updateSelectionBar() {
    const selectedContainer = document.getElementById('selected-bubbles');
    const generateBtn = document.getElementById('generate-btn');
    const count = generateBtn.querySelector('.count');
    
    selectedContainer.innerHTML = '';
    selectedBubbles.forEach(bubble => {
        const tag = document.createElement('div');
        tag.className = 'selected-tag';
        tag.innerHTML = `
            <span>${bubble.text}</span>
            <span class="remove" data-id="${bubble.id}">×</span>
        `;
        selectedContainer.appendChild(tag);
    });
    
    // Update button state
    count.textContent = `(${selectedBubbles.length}/3)`;
    generateBtn.disabled = selectedBubbles.length < 3;
    
    // Remove tag events
    document.querySelectorAll('.selected-tag .remove').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(e.target.dataset.id);
            const bubble = bubbleData.find(b => b.id === id);
            const bubbleEl = document.querySelector(`.bubble[data-id="${id}"]`);
            toggleBubble(bubble, bubbleEl);
        });
    });
}

// Setup event listeners
function setupEventListeners() {
    document.getElementById('generate-btn').addEventListener('click', generateCocktail);
    document.getElementById('share-btn').addEventListener('click', shareCocktail);
    document.getElementById('restart-btn').addEventListener('click', restart);
}

// Generate cocktail
function generateCocktail() {
    // Hide selection bar
    document.getElementById('selection-bar').classList.add('hidden');
    
    // Show fusion overlay
    const fusionOverlay = document.getElementById('fusion-overlay');
    fusionOverlay.classList.add('active');
    
    // Play fusion animation
    playFusionAnimation();
    
    // Generate cocktail and show result
    setTimeout(() => {
        currentCocktail = selectCocktail();
        displayResult();
        
        // Hide fusion overlay
        fusionOverlay.classList.remove('active');
        
        // Switch to result section
        document.getElementById('bubble-section').classList.remove('active');
        document.getElementById('result-section').classList.add('active');
        
        // Update header
        const header = document.getElementById('app-header');
        header.classList.add('compact');
        document.getElementById('subtitle-text').textContent = 'Your Soul Cocktail';
    }, 3000);
}

// Fusion animation
function playFusionAnimation() {
    const container = document.querySelector('.fusion-animation');
    container.innerHTML = '';
    
    selectedBubbles.forEach((bubble, index) => {
        const bubbleEl = document.createElement('div');
        bubbleEl.className = `fusion-bubble ${bubble.color}`;
        
        const angle = (index / selectedBubbles.length) * Math.PI * 2;
        const startX = Math.cos(angle) * 80;
        const startY = Math.sin(angle) * 80;
        
        bubbleEl.style.left = (100 + startX) + 'px';
        bubbleEl.style.top = (100 + startY) + 'px';
        bubbleEl.style.background = getComputedStyle(document.querySelector(`.bubble.${bubble.color}`)).background;
        bubbleEl.style.animationDelay = (index * 0.2) + 's';
        
        container.appendChild(bubbleEl);
    });
}

// Select cocktail
function selectCocktail() {
    const types = selectedBubbles.map(b => b.type);
    
    // Match cocktails based on selected bubble types
    let matchedCocktails = cocktails.filter(cocktail => {
        return cocktail.tags.some(tag => types.includes(tag));
    });
    
    // If no match, select randomly
    if (matchedCocktails.length === 0) {
        matchedCocktails = cocktails;
    }
    
    // Random selection
    return matchedCocktails[Math.floor(Math.random() * matchedCocktails.length)];
}

// Display result
function displayResult() {
    document.getElementById('cocktail-name').textContent = currentCocktail.name;
    
    const ingredientsList = document.getElementById('ingredients-list');
    ingredientsList.innerHTML = '';
    currentCocktail.ingredients.forEach(ingredient => {
        const tag = document.createElement('div');
        tag.className = 'ingredient-tag';
        tag.textContent = ingredient;
        ingredientsList.appendChild(tag);
    });
    
    document.getElementById('description-text').textContent = currentCocktail.description;
    document.getElementById('suggestion-text').textContent = currentCocktail.suggestion;
    
    // Update cocktail colors
    updateCocktailGlass();
}

// Update cocktail glass colors
function updateCocktailGlass() {
    const glass = document.querySelector('.glass');
    const colors = currentCocktail.colors || ['#00BFFF', '#8A2BE2', '#FF1493'];
    
    // Set CSS custom properties for dynamic coloring
    glass.style.setProperty('--cocktail-color', colors[1]);
    glass.style.setProperty('--cocktail-glow', colors[1] + 'AA');
    
    // Create gradient for the liquid
    const liquidGradient = `linear-gradient(180deg, 
        ${colors[0]}50 0%, 
        ${colors[1]}90 50%,
        ${colors[2]}DD 100%)`;
    
    // Apply gradient to the ::after pseudo-element via a style tag
    const styleId = 'cocktail-dynamic-style';
    let styleTag = document.getElementById(styleId);
    
    if (!styleTag) {
        styleTag = document.createElement('style');
        styleTag.id = styleId;
        document.head.appendChild(styleTag);
    }
    
    styleTag.textContent = `
        .glass::after {
            background: linear-gradient(0deg, 
                ${colors[2]}DD 0%, 
                ${colors[1]}90 50%,
                ${colors[0]}50 100%) !important;
            border-top-color: ${colors[1]}DD !important;
        }
        .glass::before {
            border-top-color: ${colors[0]}25 !important;
        }
    `;
}

// Share functionality
function shareCocktail() {
    const shareText = `My soul cocktail is: ${currentCocktail.name}!\n${currentCocktail.suggestion}`;
    
    if (navigator.share) {
        navigator.share({
            title: 'Soul Cocktail',
            text: shareText,
            url: window.location.href
        }).catch(err => console.log('Share failed', err));
    } else {
        // Copy to clipboard
        navigator.clipboard.writeText(shareText).then(() => {
            alert('Copied to clipboard! Share it now~');
        });
    }
}

// Restart
function restart() {
    selectedBubbles = [];
    currentCocktail = null;
    
    // Reset bubbles
    document.querySelectorAll('.bubble').forEach(el => {
        el.classList.remove('selected');
    });
    
    // Switch back to bubble section
    document.getElementById('result-section').classList.remove('active');
    document.getElementById('bubble-section').classList.add('active');
    
    // Show selection bar
    document.getElementById('selection-bar').classList.remove('hidden');
    
    // Reset header
    const header = document.getElementById('app-header');
    header.classList.remove('compact');
    document.getElementById('subtitle-text').textContent = 'Tap bubbles to craft your personalized cocktail';
    
    // Update selection bar
    updateSelectionBar();
    
    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
