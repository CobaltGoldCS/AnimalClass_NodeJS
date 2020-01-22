util = require("util")
class Animal{
  constructor(faveFood, energy, attkpower, name){
    this.faveFood = faveFood;
    this.energy = energy;
    this.attkpower = attkpower;
    this.dead = false;
    this.name = name
  }
  eat(numFood, foodtype){
    if (!this.dead){
      if (foodtype == this.faveFood){
      console.log("Nom");
      return  this.energy+= 10*numFood;
      }
      else{
        return console.log(this.name, "didnt like that")
      }
    }
    else{
      return console.log(this.name, "is dead");
    }
    

  }
  check(){
    let info = [this.energy, this.attkpower];
    if (this.energy <= 0){
      this.dead = true;
    }
    return info
  }
  fight(otherAnimal){
    if (!this.dead){
      otherAnimal.energy-= this.energy * this.attkpower;
      otherAnimal.check();
      if (otherAnimal.dead == true){
        return console.log(otherAnimal.name, "is dead");
      }
    }
    else{
      return console.log(this.name, "is dead");
    }
    
  }
}

class Mushroom extends Animal{
  constructor(faveFood="Dead Plants", energy, attkpower, name) {
    super(faveFood, energy, attkpower, name);
    this.maturity = 0
  }
  fight(otherAnimal){
    super.fight(otherAnimal);
  }
  spore(num){
    for (num > 0; num--;){
      this.energy -= 10;
      this.clone();
    }
  }
  clone(){
    this.attkpower += 10;
  }
  grow(){
    this.energy -= 100;
    this.maturity++;
  }
  eat(numFood, foodtype){
    super.eat(numFood, foodtype)
  }
}
foo = new Mushroom(faveFood = "Dead Plants", energy = 1000, attkpower = 10, name ="Foo")
foo.eat(100, "Dead Plants")
console.log(foo.check())