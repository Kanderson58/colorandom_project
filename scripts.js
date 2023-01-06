class Color{
    constructor(hex){
        this.hexCode = hex;
        this.locked = false;
    }
    randomIndex(){
        this.hexCode ='#'
        for(var i = 0; i < 6; i++){
            var possibleHexes = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']
            this.hexCode += possibleHexes[Math.floor(Math.random()*possibleHexes.length)]
        } return this.hexCode
    };
};

class Palette{
    constructor(){
        this.id = Date.now();
        this.colors = [];
        this.lockedColors = [];
    }
    getRandomPalette(){
        this.colors = [];
        if(this.lockedColors.length !== 0) {
            for(var i = 0; i < this.lockedColors.length; i++) {
                this.colors.push(this.lockedColors[i]);
                console.log(this.colors)
            }
        }
        for(var i = this.lockedColors.length; i < 5; i++){
            var randomColor = new Color
            randomColor.randomIndex()
            this.colors.push(randomColor)
         }
    };
    lockThisColor(currentColorHex) {
        for(var i = 0; i < this.colors.length; i++) {
            if (currentColorHex === this.colors[i].hexCode && !this.colors[i].locked && this.lockedColors.length < 5) {
                this.colors[i].locked = true;
                this.lockedColors.push(this.colors[i])
                console.log(this.lockedColors)
            } else if (currentColorHex === this.colors[i].hexCode && this.lockedColors.length <= 5){
                this.colors[i].locked = false;
                this.lockedColors.splice(this.lockedColors.indexOf(this.colors[i]), 1);
            } 
        } 
    }
};

var currentPalette = new Palette
var newPaletteButton = document.querySelector(".new-button")
var currentPaletteSection = document.querySelector(".current-palette")
var savedSection = document.querySelector(".saved-palettes")
var savedButton = document.querySelector(".save-button")
var lockEmojiToggle = document.querySelectorAll(".toggle-lock")

window.addEventListener('load', displayCurrent)
newPaletteButton.addEventListener('click', displayCurrent)
currentPaletteSection.addEventListener('click', lockColor)
savedButton.addEventListener('click', displaySavedPalette)

function lockColor(event) {
    currentPalette.lockThisColor(event.target.parentNode.classList.value);
    console.log(event.target)
    toggleLockIcon()
};

function toggleLockIcon(){
    console.log(currentPalette.colors[0].locked)
    if(colors.locked === false){

    }
};

function displayCurrent() {
    currentPalette.getRandomPalette()
    currentPaletteSection.innerHTML = ''
    for(var i = 0; i < 5; i++){
        // if(currentPalette.colors[i].locked){

        
        currentPaletteSection.innerHTML +=
        `
        <fieldset class="${currentPalette.colors[i].hexCode}">
        <div class="boxes color${i}"></div>
        <label><span class="toggle-lock"></span>${currentPalette.colors[i].hexCode}</label>
        </fieldset>
        `;
        var colorBrick = document.querySelector(`.color${i}`)
        colorBrick.style.backgroundColor = `${currentPalette.colors[i].hexCode}`
        // } else {
        //     currentPaletteSection.innerHTML +=
        // `
        // <fieldset class="${currentPalette.colors[i].hexCode}">
        // <div class="boxes color${i}"></div>
        // <label><img src="./unlock.png">${currentPalette.colors[i].hexCode}</label>
        // </fieldset>
        // `;
        // var colorBrick = document.querySelector(`.color${i}`)
        // colorBrick.style.backgroundColor = `${currentPalette.colors[i].hexCode}`
        // }
    }
};
// Instead of if else HTML just If Else IMG

function displaySavedPalette() {
    savedSection.innerHTML += `<div class="lil-box-container" id="${currentPalette.id}"></div>`
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
        lilBoxContainer.innerHTML += '<button class="trash">🗑️</button>'
};