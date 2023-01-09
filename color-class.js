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