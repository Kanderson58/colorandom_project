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
    lockColor(event){
        for(var i = 0; i < this.colors.length; i++){
            if (event.target.class === this.colors[i].hexCode){
                this.colors[i].locked = true;
                console.log(this.colors[i].locked)
            }
        }
        
    }
};


var array = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']
var lockedColors = []
var currentPalette = document.querySelector(".current-palette")
var randomPalette;

window.addEventListener('load', getRandomPalette)
currentPalette.addEventListener('click', randomPalette.lockColor)

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
    randomPalette = new Palette
    for(var i = 1; i < 6; i++){
        var thisHex = getRandomHexCode()
       randomPalette.colors.push(new Color(thisHex))
       currentPalette.innerHTML +=`
    <fieldset class="${thisHex}">
       <div class="boxes color${i}">test text</div>
       <label>${thisHex}</label>
   </fieldset>`
     }

};
// targetting a unique id


// function lockColor(){
    
// };
