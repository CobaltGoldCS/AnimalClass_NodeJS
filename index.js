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
      this.energy+= 10*numFood
      }
    }
    else{
      console.log(this.name, "is dead")
    }
    

  }
  check(){
    let info = [this.energy, this.attkpower]
    if (this.energy <= 0){
      this.dead = true;
    }
    return info
  }
  fight(otherAnimal){
    if (!this.dead){
      otherAnimal.energy-= this.energy * this.attkpower
      otherAnimal.check()
      if (otherAnimal.dead == true){
        console.log(otherAnimal.name, "is dead")
      }
    }
    else{
      console.log(this.name, "is dead")
    }
    
  }
}
chinchilla = new Animal("Grass", 1000, 10, "Jerry");
chinchilla.eat(100, "Grass");
wolf = new Animal("chinchilla", 1000, 10, "Dax");
wolf.fight(chinchilla);
chinchilla.fight(wolf);