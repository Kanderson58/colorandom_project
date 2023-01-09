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

