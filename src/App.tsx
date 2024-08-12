import "./App.css";

import { makePerson, makeSuperPerson } from "./utils/actions";

interface Character {
  name: string;
  age: number;
  level: number;
  speak(): void;
}

interface SuperCharacter {
  name: string;
  age: number;
  level: number;
  power: number;
  special: string;
  armour: string;
  bosh(): void;
}

const people: Character[] = [];

const superPeople: SuperCharacter[] = [];

const bob = makePerson("Bobalina", 39, 55);

people.push(bob);

const claire = makePerson("Claire", 41, 55);

people.push(claire);

const megaBob = makeSuperPerson(
  "Bobabasha",
  39,
  55,
  10000,
  "slap face",
  "bum sheild"
);

superPeople.push(megaBob);

const megaClaire = makeSuperPerson(
  "Mega Claire",
  41,
  10000,
  99999,
  "Head Butt!",
  "Confusion Spell"
);

const megaJack = makeSuperPerson(
  "Jacked Jack",
  32,
  25000,
  8989,
  "Pass out",
  "fart spray"
);

superPeople.push(megaClaire);
superPeople.push(megaJack);

function App() {
  return (
    <>
      <header className="m-2">
        <div className="grid grid-cols-1">
          <div className="bg-slate-500 rounded-xl text-white p-4">
            <div className="text-center">
              <h1 className="text-8xl sm:text-3xl">Characters</h1>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="grid grid-cols-1 m-2">
          <div className="bg-slate-500 rounded-xl text-white p-4">
            <div className="text-center">
              <h3 className="text-4xl sm:text-2xl">Normal Characters</h3>
            </div>
          </div>
        </div>

        <section className="grid md:grid-cols-2 gap-4 pt-4 m-2">
          {people.map((person, index) => {
            return (
              <div
                key={index}
                className="bg-slate-500 rounded-xl text-white p-4"
              >
                <div className="text-center">
                  <h3 className="text-4xl">{person.name}</h3>
                  <hr />
                </div>

                <div className="p-2">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-xl text-black p-4">
                      <h3 className="text-2xl">Age:</h3>
                    </div>
                    <div className="bg-white rounded-xl text-black p-4">
                      <h3 className="text-2xl sm:text-1xl">{person.age}</h3>
                    </div>
                    <div className="bg-white rounded-xl text-black p-4">
                      <h3 className="text-2xl">Level:</h3>
                    </div>
                    <div className="bg-white rounded-xl text-black p-4">
                      <h3 className="text-2xl sm:text-xl">{person.level}</h3>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </section>

        <div className="grid grid-cols-1 m-2">
          <div className="bg-slate-500 rounded-xl text-white p-4">
            <div className="text-center">
              <h3 className="text-4xl sm:text-2xl">Super Characters</h3>
            </div>
          </div>
        </div>
        <section className="grid md:grid-cols-2 gap-4 pt-4 m-2">
          {superPeople.map((person, index) => {
            person.bosh();
            return (
              <div
                key={index}
                className="bg-slate-500 rounded-xl text-white p-4"
              >
                <div className="text-center">
                  <h3 className="text-4xl sm:text-2xl">{person.name}</h3>
                  <hr />
                </div>

                <div className="p-2">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-xl text-black p-4">
                      <h3 className="text-2xl">Age:</h3>
                    </div>
                    <div className="bg-white rounded-xl text-black p-4">
                      <h3 className="text-2xl sm:text-xl">{person.age}</h3>
                    </div>
                    <div className="bg-white rounded-xl text-black p-4">
                      <h3 className="text-2xl sm:text-xl">Level:</h3>
                    </div>
                    <div className="bg-white rounded-xl text-black p-4">
                      <h3 className="text-2xl sm:text-xl">{person.level}</h3>
                    </div>
                    <div className="bg-white rounded-xl text-black p-4">
                      <h3 className="text-2xl sm:text-xl">Power:</h3>
                    </div>
                    <div className="bg-white rounded-xl text-black p-4">
                      <h3 className="text-2xl sm:text-xl">{person.power}</h3>
                    </div>
                    <div className="bg-white rounded-xl text-black p-4">
                      <h3 className="text-2xl sm:text-xl">Special Move:</h3>
                    </div>
                    <div className="bg-white rounded-xl text-black p-4">
                      <h3 className="text-2xl">{person.special}</h3>
                    </div>
                    <div className="bg-white rounded-xl text-black p-4">
                      <h3 className="text-2xl sm:text-xl">Armour:</h3>
                    </div>
                    <div className="bg-white rounded-xl text-black p-4">
                      <h3 className="text-2xl sm:text-xl">{person.armour}</h3>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </main>
    </>
  );
}

export default App;
