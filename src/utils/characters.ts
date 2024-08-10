export class Person {
  name: string;
  age: number;
  level: number;
  constructor(name: string, age: number, level: number) {
    this.name = name;
    this.age = age;
    this.level = level;
  }
  speak(): void {
    console.log(
      `Hello my name is ${this.name}, my age is ${this.age} and I am currently at ${this.level}`
    );
  }
}

export class SuperPerson extends Person {
  power: number;
  special: string;
  armour: string;
  constructor(
    name: string,
    age: number,
    level: number,
    power: number,
    special: string,
    armour: string
  ) {
    super(name, age, level);
    this.power = power;
    this.special = special;
    this.armour = armour;
  }
  bosh(): void {
    console.log(
      `Time for my special move! ${this.special}.  Will also repel your next attack with ${this.armour}`
    );
  }
}
