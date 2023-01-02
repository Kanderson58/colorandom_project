class Color{
    constructor(hex){
        hexCode = hex;
        locked = false;
    }
};

class Palette{
    constructor(){
        id = Date.now();
        colors = [];
    }
};


var array = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']

window.addEventListener('load', randomIndex)

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
console.log(getRandomHexCode());

function getRandomPalette(){
    // for loop
    // get hex code x5
    //push into array, make new instance 
};



function lockColors(){
    
};
