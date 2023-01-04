class Color{
    constructor(hex){
        this.hexCode = hex;
        this.locked = false;
    }
};

class Palette{
    constructor(){
        this.id = Date.now();
        this.colors = [];

    }
    // lockColor(){
    //     console.log('hello');
    //     for(var i = 0; i < this.colors.length; i++){
    //         if (event.target.class === this.colors[i].hexCode){
    //             this.colors[i].locked = true;
    //             console.log(this.colors[i].locked)
    //         }
    //     }
        
    // }
};
// How might we use our lockColor function within the palette class? 

var array = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']
var lockedColors = []
var currentPalette = document.querySelector(".current-palette")
var randomPalette;
var newPaletteButton = document.querySelector(".new-button")

window.addEventListener('load', getRandomPalette)
currentPalette.addEventListener('click', lockColor)
newPaletteButton.addEventListener('click', getRandomPalette)

function randomIndex(array){
    return array[Math.floor(Math.random()*array.length)]
};

function getRandomHexCode(){
    var hexCode = '#'
    for(var i = 0; i < 6; i++){
        hexCode += randomIndex(array)
    }
    return hexCode
    
};

function getRandomPalette(){
    currentPalette.innerHTML = '';
    randomPalette = new Palette;
    console.log(randomPalette);
    for(var i = 1; i < 6; i++){
       var thisHex = getRandomHexCode()
       randomPalette.colors.push(new Color(thisHex))
       currentPalette.innerHTML +=
       `
       <fieldset class="${thisHex}">
       <div class="boxes color${i}">test text</div>
       <label>${thisHex}</label>
       </fieldset>
       `;
     }
};


 // Great place to practice refactoring:
function lockColor(event) {
    console.log(event.target.parentNode.classList.value);
    for(var i = 0; i < randomPalette.colors.length; i++) {
        if (event.target.parentNode.classList.value === randomPalette.colors[i].hexCode && !randomPalette.colors[i].locked) {
            randomPalette.colors[i].locked = true;
            // pushColor(randomPalette.colors[i]);
            lockedColors.push(randomPalette.colors[i])
            console.log(randomPalette.colors[i].locked);
        }
        else if  (event.target.parentNode.classList.value === randomPalette.colors[i].hexCode){
            randomPalette.colors[i].locked = false;
            console.log(randomPalette.colors[i].locked);
        }
    }
    console.log(lockedColors);
}
// function pushColor(colorInstance) {
//         if (lockedColors.includes(colorInstance)) {
//             lockedColors.push(colorInstance);
//         }
//         }