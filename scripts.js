class Color{
    constructor(hex){
        this.hexCode = hex;
        this.locked = false;
    }
    randomIndex(){
        this.hexCode ='#'
        for(var i = 0; i < 6; i++){
            var possibleHexes = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
            this.hexCode += possibleHexes[Math.floor(Math.random()*possibleHexes.length)];
        } return this.hexCode;
    };
};

class Palette{
    constructor(){
        this.id = Date.now();
        this.colors = [];
        this.lockedColors = [];
        this.savedColors = [];
    }
    getRandomPalette(){
        this.id = Date.now();
        this.colors = [];
        if(this.lockedColors.length !== 0) {
            for(var i = 0; i < this.lockedColors.length; i++) {
                this.colors.push(this.lockedColors[i]);
            }
        }
        for(var i = this.lockedColors.length; i < 5; i++){
            var randomColor = new Color;
            randomColor.randomIndex();
            this.colors.push(randomColor);
         }
    };
    lockThisColor(currentColorHex) {
        for(var i = 0; i < this.colors.length; i++) {
            if (currentColorHex === this.colors[i].hexCode && !this.colors[i].locked && this.lockedColors.length < 5) {
                this.addToLocked(this.colors[i]);
            } else if (currentColorHex === this.colors[i].hexCode && this.lockedColors.length <= 5){
                this.removeFromLocked(this.colors[i]);
            } 
        } 
    }
    addToLocked(color) {
        color.locked = true;
        this.lockedColors.push(color);
    }
    removeFromLocked(color) {
        color.locked = false;
        this.lockedColors.splice(this.lockedColors.indexOf(color), 1);
    }
};

var currentPalette = new Palette;
var newPaletteButton = document.querySelector(".new-button");
var currentPaletteSection = document.querySelector(".current-palette");
var savedSection = document.querySelector(".saved-palettes");
var savedButton = document.querySelector(".save-button");

window.addEventListener('load', getRandom);
newPaletteButton.addEventListener('click', getRandom);
currentPaletteSection.addEventListener('click', lockColor);
savedButton.addEventListener('click', displaySavedPalette);

window.onkeydown = function getNewOnSpace(event) {
    if (event.keyCode == 32) {
      getRandom();
    } return !(event.keyCode == 32);
};

function lockColor(event) {
    currentPalette.lockThisColor(event.target.parentNode.classList.value);
    toggleToLock(event);
};

function toggleToLock(event){
    for(var i = 0; i < currentPalette.colors.length; i++) {
        if(currentPalette.colors[i].locked === true) {
        event.target.parentNode.children[1].children[0].nextSibling.classList.add("hidden")
        event.target.parentNode.children[1].children[0].classList.remove("hidden")
        } else {
            event.target.parentNode.children[1].children[0].nextSibling.classList.remove("hidden")
            event.target.parentNode.children[1].children[0].classList.add("hidden")
            displayCurrent();
        }
    }
};

function getRandom() {
    currentPalette.getRandomPalette();
    displayCurrent();
}

function displayCurrent() {
    currentPaletteSection.innerHTML = ''
    for(var i = 0; i < 5; i++){
        if(!currentPalette.colors[i].locked){
            currentPaletteSection.innerHTML +=
            `
            <fieldset class="${currentPalette.colors[i].hexCode}">
            <div class="boxes color${i}"></div>
            <label><img src="./assets/lock.png" class="hidden" alt="locked lock"><img src= "./assets/unlock.png" alt="unlocked lock"> ${currentPalette.colors[i].hexCode}</label>
            </fieldset>
            `;
        } else {
            currentPaletteSection.innerHTML +=
            `
            <fieldset class="${currentPalette.colors[i].hexCode}">
            <div class="boxes color${i}"></div>
            <label><img src="./assets/lock.png" alt="locked lock"><img src="./assets/unlock.png" class="hidden" alt="unlocked lock"> ${currentPalette.colors[i].hexCode}</label>
            </fieldset>
            `;
        }
        var colorBrick = document.querySelector(`.color${i}`);
        colorBrick.style.backgroundColor = `${currentPalette.colors[i].hexCode}`;
    }
};

function displaySavedPalette() {
    if(currentPalette.savedColors.includes(currentPalette.id)) {
        return;
    }
    savedSection.innerHTML += `<div class="lil-box-container" id="${currentPalette.id}"></div>`;
    var lilBoxContainer = savedSection.lastChild
    for(var i = 0; i < 5; i++){
        lilBoxContainer.innerHTML +=
        `
        <fieldset class="to-go-box ${currentPalette.colors[i].hexCode}">
        <div class="saved-boxes${i} little-brick" style="background-color:${currentPalette.colors[i].hexCode}">
        </div>
        </fieldset>
        `;
        }
        lilBoxContainer.innerHTML += '<button class="trash" onclick="doubleCheck(event)">🗑️</button>';
        currentPalette.savedColors.push(currentPalette.id);
};

function doubleCheck(event) {
    var currentPaletteInfo = event.target.parentNode.innerHTML;
    var currentPaletteTarget = event.target.parentNode;
    if(event.target.innerText === "🗑️") {
        event.target.parentNode.innerHTML = '<button class="confirm">Delete palette</button><button class="go-back">Actually, keep it!</button>';
        var goBack = document.querySelector(".go-back");
        goBack.addEventListener('click', function() {putPaletteBack(currentPaletteInfo, currentPaletteTarget)});
        var confirm = document.querySelector(".confirm");
        confirm.addEventListener('click', deletePalette);
    }
}

function putPaletteBack(currentPaletteInfo, currentPaletteTarget) {
    var newNode = document.createElement("div");
    newNode.classList.add("lil-box-container");
    newNode.id = currentPaletteTarget.id;
    newNode.innerHTML = currentPaletteInfo;
    currentPaletteTarget.innerHTML = '';
    currentPaletteTarget.insertAdjacentElement('afterend', newNode);
    currentPaletteTarget.remove();
}

function deletePalette(event) {
    event.target.parentNode.remove();
    currentPalette.savedColors.splice(currentPalette.savedColors.indexOf(event.target.parentNode.id), 1);
};