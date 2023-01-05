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
                console.log(this.lockedColors)
            } 
        } 
    }
};

var currentPalette = new Palette
var newPaletteButton = document.querySelector(".new-button")
var currentPaletteSection = document.querySelector(".current-palette")

window.addEventListener('load', displayCurrent)
newPaletteButton.addEventListener('click', displayCurrent)
currentPaletteSection.addEventListener('click', lockColor)

function lockColor(event) {
    currentPalette.lockThisColor(event.target.parentNode.classList.value);
}

function displayCurrent() {
    currentPalette.getRandomPalette()
    currentPaletteSection.innerHTML = ''
    for(var i = 0; i < 5; i++){
        currentPaletteSection.innerHTML +=
        `
        <fieldset class="${currentPalette.colors[i].hexCode}">
        <div class="boxes color${i}"></div>
        <label>${currentPalette.colors[i].hexCode}</label>
        </fieldset>
        `;
        var colorBrick = document.querySelector(`.color${i}`)
        colorBrick.style.backgroundColor = `${currentPalette.colors[i].hexCode}`
    }
}