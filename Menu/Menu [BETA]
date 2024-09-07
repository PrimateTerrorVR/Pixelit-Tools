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

const changeBgButton = document.createElement('button');
changeBgButton.innerText = 'Change Background Color';
changeBgButton.style.width = '80%';
changeBgButton.style.margin = '20px 10%';
changeBgButton.style.padding = '10px';
changeBgButton.style.backgroundColor = '#666';
changeBgButton.style.border = 'none';
changeBgButton.style.color = 'white';
changeBgButton.style.fontSize = '16px';
changeBgButton.style.cursor = 'pointer';
changeBgButton.style.borderRadius = '5px';
menu.appendChild(changeBgButton);

changeBgButton.onclick = function() {
    const color = prompt('Enter a color (name or hex code):', '#ffffff');
    if (color) {
        document.body.style.backgroundColor = color;
    }
};

const ownerSpoofButton = document.createElement('button');
ownerSpoofButton.innerText = 'Spoof Roles to Owner';
ownerSpoofButton.style.width = '80%';
ownerSpoofButton.style.margin = '10px 10%';
ownerSpoofButton.style.padding = '10px';
ownerSpoofButton.style.backgroundColor = '#666';
ownerSpoofButton.style.border = 'none';
ownerSpoofButton.style.color = 'white';
ownerSpoofButton.style.fontSize = '16px';
ownerSpoofButton.style.cursor = 'pointer';
ownerSpoofButton.style.borderRadius = '5px';
menu.appendChild(ownerSpoofButton);

ownerSpoofButton.onclick = function() {
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
};

const tokenSpoofButton = document.createElement('button');
tokenSpoofButton.innerText = 'Spoof Tokens';
tokenSpoofButton.style.width = '80%';
tokenSpoofButton.style.margin = '10px 10%';
tokenSpoofButton.style.padding = '10px';
tokenSpoofButton.style.backgroundColor = '#666';
tokenSpoofButton.style.border = 'none';
tokenSpoofButton.style.color = 'white';
tokenSpoofButton.style.fontSize = '16px';
tokenSpoofButton.style.cursor = 'pointer';
tokenSpoofButton.style.borderRadius = '5px';
menu.appendChild(tokenSpoofButton);

tokenSpoofButton.onclick = function() {
    const tokensElement = document.getElementById('tokens');
    if (tokensElement) {
        const tokenAmount = prompt('Enter the amount of tokens you want:');
        tokensElement.textContent = tokenAmount || '0';
        alert('Tokens spoofed successfully!');
    } else {
        alert('Token element not found!');
    }
};

const freePackSpoofButton = document.createElement('button');
freePackSpoofButton.innerText = 'Spoof Pack Prices to Free';
freePackSpoofButton.style.width = '80%';
freePackSpoofButton.style.margin = '10px 10%';
freePackSpoofButton.style.padding = '10px';
freePackSpoofButton.style.backgroundColor = '#666';
freePackSpoofButton.style.border = 'none';
freePackSpoofButton.style.color = 'white';
freePackSpoofButton.style.fontSize = '16px';
freePackSpoofButton.style.cursor = 'pointer';
freePackSpoofButton.style.borderRadius = '5px';
menu.appendChild(freePackSpoofButton);

freePackSpoofButton.onclick = function() {
    const costElements = document.querySelectorAll('.pack-cost, span, div');
    costElements.forEach(element => {
        if (element.innerText.includes('Cost:')) {
            element.innerText = element.innerText.replace(/\d+/, 'Free');
        }
    });
    alert('All packs are now spoofed to "Free"!');
};

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
        const newFeatureButton = document.createElement('button');
        newFeatureButton.innerText = featureName;
        newFeatureButton.style.width = '80%';
        newFeatureButton.style.margin = '10px 10%';
        newFeatureButton.style.padding = '10px';
        newFeatureButton.style.backgroundColor = '#555';
        newFeatureButton.style.border = 'none';
        newFeatureButton.style.color = 'white';
        newFeatureButton.style.fontSize = '16px';
        newFeatureButton.style.cursor = 'pointer';
        newFeatureButton.style.borderRadius = '5px';
        newFeatureButton.onclick = function() {
            eval(featureCode);
        };
        menu.appendChild(newFeatureButton);
    }
};

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

const menuSettingsButton = document.createElement('button');
menuSettingsButton.innerText = 'Customize Menu';
menuSettingsButton.style.width = '80%';
menuSettingsButton.style.margin = '10px 10%';
menuSettingsButton.style.padding = '10px';
menuSettingsButton.style.backgroundColor = '#555';
menuSettingsButton.style.border = 'none';
menuSettingsButton.style.color = 'white';
menuSettingsButton.style.fontSize = '16px';
menuSettingsButton.style.cursor = 'pointer';
menuSettingsButton.style.borderRadius = '5px';
menu.appendChild(menuSettingsButton);

menuSettingsButton.onclick = function() {
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
};

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
