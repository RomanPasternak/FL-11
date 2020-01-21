const myFighter = new Fighter({name: 'Maximus', damage: 25, hp: 100, strength: 30, agility: 25}); 
class Fighter {

  constructor(name, damage, hp, strength, agility) {
    this.name = name;
    this.damage = damage;
    this.hp = hp;
    this.strength = strength;
    this.agility = agility;
  }
  getName(){
    console.log(this.name);
  }
}
