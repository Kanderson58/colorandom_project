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
// console.log(randomIndex(array))
// console.log(randomIndex(array))
// console.log(array[0]+array[13])

function getRandomPalette(){
    var hexCode = '#'
    for(var i = 0; i < 6; i++ ){
        hexCode += randomIndex(array)
    }
    return hexCode
};

console.log(getRandomPalette())


function lockColors(){
    
};
