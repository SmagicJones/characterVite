import { Person, SuperPerson } from "./characters";

export function makePerson(name: string, age: number, level: number) {
  return new Person(name, age, level);
}

export function makeSuperPerson(
  name: string,
  age: number,
  level: number,
  power: number,
  special: string,
  armour: string
) {
  return new SuperPerson(name, age, level, power, special, armour);
}
