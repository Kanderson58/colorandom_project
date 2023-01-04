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
        var currentPalette = document.querySelector(".current-palette")
        currentPalette.innerHTML = ''
        this.colors = [];
        var randomColor;
        for(var i = this.lockedColors.length; i < 5; i++){
            randomColor = new Color
            randomColor.randomIndex()
            this.colors.push(randomColor)
            currentPalette.innerHTML +=
            `
            <fieldset class="${randomColor.hexCode}">
            <div class="boxes color${i}"></div>
            <label>${randomColor.hexCode}</label>
            </fieldset>
            `;
         }
    };
    lockThisColor(currentColorHex) {
        for(var i = 0; i < this.colors.length; i++) {
            if (currentColorHex === this.colors[i].hexCode && !this.colors[i].locked && this.lockedColors.length < 5) {
                this.colors[i].locked = true;
                this.lockedColors.push(this.colors[i])
                // this.checkForDoubles(currentColorHex)
            } else if (currentColorHex === this.colors[i].hexCode && this.lockedColors.length <= 5){
                this.colors[i].locked = false;
                this.lockedColors.splice(this.lockedColors.indexOf(this.colors[i]), 1);
            } 
        } console.log(this.lockedColors)
    }
    // checkForDoubles(givenColorHex) {
    //     var doubles = [];
    //     for(var i = 0; i < this.lockedColors.length; i++) {
    //         if(givenColorHex === this.lockedColors[i].hexCode){
    //             doubles.push(this.lockedColors[i].hexCode)
    //         }
    //         if(doubles.length >= 2) {
    //             this.lockedColors.splice(i, 1)
    //         }
    //     }
    // }
};

var randomPalette = new Palette
var newPaletteButton = document.querySelector(".new-button")
var currentPalette = document.querySelector(".current-palette")

window.addEventListener('load', function() {randomPalette.getRandomPalette()})
newPaletteButton.addEventListener('click', getNewRandom)
currentPalette.addEventListener('click', lockColor)

function getNewRandom() {
    if(randomPalette.lockedColors.length < 5) {
        randomPalette.getRandomPalette()
    } else {
        alert("Uh oh!  All the colors are locked!")
    }
}

function lockColor(event) {
    randomPalette.lockThisColor(event.target.parentNode.classList.value);
}