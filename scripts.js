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
};


var array = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']

window.addEventListener('load', getRandomPalette)

function randomIndex(array){
    return array[Math.floor(Math.random()*array.length)]
};

function getRandomHexCode(){
    var hexCode = '#'
    for(var i = 0; i < 6; i++){
        hexCode += randomIndex(array)
    }
    return hexCode
    // put into new instance of Color

    // push into colors array in Palette Class
    // new instance of Palette
};
// console.log(getRandomHexCode());

function getRandomPalette(){
    var randomPalette = new Palette
    for(var i = 0; i < 5; i++){
       randomPalette.colors.push(new Color(getRandomHexCode()))
       console.log(randomPalette.colors[0].hexCode) 
    }

};



function lockColors(){
    
};
