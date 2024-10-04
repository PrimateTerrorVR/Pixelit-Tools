const menu = document.createElement('div');
menu.id = 'menu';
menu.style.width = '300px';
menu.style.backgroundColor = 'black';
menu.style.position = 'absolute';
menu.style.top = '50px';
menu.style.left = '50px';
menu.style.borderRadius = '10px';
menu.style.boxShadow = 'rgba(0, 0, 0, 0.5) 0px 0px 10px';
menu.style.paddingBottom = '20px';
document.body.appendChild(menu);

const menuHeader = document.createElement('div');
menuHeader.innerText = 'Pixelit Tools';
menuHeader.style.padding = '10px';
menuHeader.style.fontSize = '18px';
menuHeader.style.textAlign = 'center';
menuHeader.style.cursor = 'move';
menuHeader.style.userSelect = 'none';
menuHeader.style.background = 'linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet)';
menuHeader.style.backgroundSize = '400% 400%';
menuHeader.style.color = 'transparent';
menuHeader.style.animation = 'rainbow 5s ease infinite';
menuHeader.style.webkitBackgroundClip = 'text';
menuHeader.style.webkitTextFillColor = 'transparent';
menuHeader.style.position = 'relative';
menu.appendChild(menuHeader);

// Function to create buttons
function createButton(text, onClick) {
    const button = document.createElement('button');
    button.innerText = text;
    button.style.width = '80%';
    button.style.margin = '10px 10%';
    button.style.padding = '10px';
    button.style.backgroundColor = '#666';
    button.style.border = 'none';
    button.style.color = 'white';
    button.style.fontSize = '16px';
    button.style.cursor = 'pointer';
    button.style.borderRadius = '5px';
    button.onclick = onClick;
    menu.appendChild(button);
}

// Background color change
createButton('Change Background Color', () => {
    const color = prompt('Enter a color (name or hex code):', '#ffffff');
    if (color) {
        document.body.style.backgroundColor = color;
    }
});

// Spoof roles to owner
createButton('Spoof Roles to Owner', () => {
    const roleElements = document.querySelectorAll('[role], .role, span.role');
    roleElements.forEach(element => {
        const text = element.innerText;
        if (['Admin', 'Helper', 'Moderator', 'Player'].includes(text)) {
            element.innerText = 'Owner';
            element.style.background = 'linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet)';
            element.style.backgroundSize = '400% 400%';
            element.style.color = 'transparent';
            element.style.animation = 'rainbowText 5s ease infinite';
            element.style.webkitBackgroundClip = 'text';
            element.style.webkitTextFillColor = 'transparent';
        }
    });
});

// Spoof tokens
createButton('Spoof Tokens', () => {
    const tokensElement = document.getElementById('tokens');
    if (tokensElement) {
        const tokenAmount = prompt('Enter the amount of tokens you want:');
        tokensElement.textContent = tokenAmount || '0';
        alert('Tokens spoofed successfully!');
    } else {
        alert('Token element not found!');
    }
});

// Spoof pack prices
createButton('Spoof Pack Prices to Free', () => {
    const costElements = document.querySelectorAll('.pack-cost, span, div');
    costElements.forEach(element => {
        if (element.innerText.includes('Cost:')) {
            element.innerText = element.innerText.replace(/\d+/, 'Free');
        }
    });
    alert('All packs are now spoofed to "Free"!');
});

// Add feature
const addFeature = document.createElement('button');
addFeature.innerText = '+ Add Feature';
addFeature.style.width = '80%';
addFeature.style.margin = '10px 10%';
addFeature.style.padding = '10px';
addFeature.style.backgroundColor = '#444';
addFeature.style.border = 'none';
addFeature.style.color = 'white';
addFeature.style.fontSize = '16px';
addFeature.style.cursor = 'pointer';
addFeature.style.borderRadius = '5px';
menu.appendChild(addFeature);

addFeature.onclick = function() {
    const featureName = prompt('Enter the feature name:');
    const featureCode = prompt('Paste the feature code:');

    if (featureName && featureCode) {
        // Save feature to localStorage
        const features = JSON.parse(localStorage.getItem('features')) || {};
        features[featureName] = featureCode;
        localStorage.setItem('features', JSON.stringify(features));

        const newFeatureButton = createButton(featureName, () => {
            eval(featureCode);
        });
    }
};

// Load saved features from localStorage
const savedFeatures = JSON.parse(localStorage.getItem('features')) || {};
for (const [name, code] of Object.entries(savedFeatures)) {
    createButton(name, () => {
        eval(code);
    });
}

const settingsSubheader = document.createElement('div');
settingsSubheader.innerText = 'Menu Settings';
settingsSubheader.style.padding = '10px';
settingsSubheader.style.fontSize = '16px';
settingsSubheader.style.textAlign = 'center';
settingsSubheader.style.userSelect = 'none';
settingsSubheader.style.background = 'linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet)';
settingsSubheader.style.backgroundSize = '400% 400%';
settingsSubheader.style.color = 'transparent';
settingsSubheader.style.animation = 'rainbow 5s ease infinite';
settingsSubheader.style.webkitBackgroundClip = 'text';
settingsSubheader.style.webkitTextFillColor = 'transparent';
menu.appendChild(settingsSubheader);

// Customize Menu
createButton('Customize Menu', () => {
    const menuColor = prompt('Enter a background color for the menu:');
    const menuSize = prompt('Enter the width of the menu in pixels (e.g., 300px):', '300px');
    const rainbowMode = confirm('Do you want rainbow mode for the menu header?');

    if (menuColor) {
        menu.style.backgroundColor = menuColor;
    }
    if (menuSize) {
        menu.style.width = menuSize;
    }
    if (rainbowMode) {
        menuHeader.style.background = 'linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet)';
        menuHeader.style.backgroundSize = '400% 400%';
        menuHeader.style.color = 'transparent';
        menuHeader.style.animation = 'rainbow 5s ease infinite';
        menuHeader.style.webkitBackgroundClip = 'text';
        menuHeader.style.webkitTextFillColor = 'transparent';
    } else {
        menuHeader.style.background = 'black';
        menuHeader.style.color = 'white';
        menuHeader.style.animation = 'none';
    }
});

// Rainbow animation styles
const rainbowStyle = document.createElement('style');
rainbowStyle.innerHTML = `
@keyframes rainbow {
    0% { background-position: 0% 0%; }
    50% { background-position: 100% 100%; }
    100% { background-position: 0% 0%; }
}
@keyframes rainbowText {
    0% { color: red; }
    14% { color: orange; }
    28% { color: yellow; }
    42% { color: green; }
    57% { color: blue; }
    71% { color: indigo; }
    85% { color: violet; }
    100% { color: red; }
}
`;
document.head.appendChild(rainbowStyle);

// Drag functionality
const dragElement = (el) => {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(el.id + 'header')) {
        document.getElementById(el.id + 'header').onmousedown = dragMouseDown;
    } else {
        el.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        el.style.top = (el.offsetTop - pos2) + "px";
        el.style.left = (el.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

dragElement(menu);
