import "./App.css";
import { useState } from "react";
import { SyntheticEvent } from "react";

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
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [level, setLevel] = useState("");
  const array: string[] = [];

  function handleSubmit(e: SyntheticEvent<HTMLFormElement, SubmitEvent>) {
    e.preventDefault();
    array.push(name, age, level);
    const strName = array[0];
    const ageNum = Number(array[1]);
    const levelNum = Number(array[2]);
    const newPerson = makePerson(strName, ageNum, levelNum);
    people.push(newPerson);
    console.log(people);
  }

  return (
    <>
      <div className="full-size">
        <header className="m-2">
          <div className="grid grid-cols-1">
            <div className="bg-slate-500 rounded-xl text-white p-4">
              <div className="text-center">
                <h1 className="lg:text-8xl md:text-4xl sm:text-3xl">
                  Characters
                </h1>
              </div>
            </div>
          </div>
        </header>

        <section className="m-2">
          <div className="grid grid-cols-1">
            <div className="bg-slate-900 rounded-xl text-white p-4">
              <div className="text-center">
                <h3>Test Area</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4 m-2">
                <div className="bg-slate-500 rounded-xl p-4">
                  <form
                    className="grid grid-cols-2 gap-4 text-black"
                    onSubmit={handleSubmit}
                  >
                    <div className="flex justify-center items-center">
                      <label htmlFor="name" className="text-2xl">
                        Name
                      </label>
                    </div>
                    <input
                      className="p-4 rounded-xl"
                      name="name"
                      id="name"
                      type="text"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                    <div className="flex justify-center items-center">
                      <label className="text-2xl" htmlFor="age">
                        Age
                      </label>
                    </div>

                    <input
                      className="p-4 rounded-xl"
                      name="age"
                      id="age"
                      type="text"
                      onChange={(e) => {
                        setAge(e.target.value);
                      }}
                    />
                    <div className="flex justify-center items-center">
                      <label className="text-2xl" htmlFor="level">
                        Level
                      </label>
                    </div>

                    <input
                      className="p-4 rounded-xl"
                      name="level"
                      id="level"
                      type="text"
                      onChange={(e) => {
                        setLevel(e.target.value);
                      }}
                    />
                    <div></div>
                    <button className="p-4 bg-slate-900 rounded-xl text-white">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <main>
          <div className="grid grid-cols-1 m-2">
            <div className="bg-slate-500 rounded-xl text-white p-4">
              <div className="text-center">
                <h3 className="lg:text-4xl md:text-2xl">Normal Characters</h3>
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
                    <h3 className="lg:text-8xl md:text-4xl sm:text-2xl">
                      {person.name}
                    </h3>
                    <hr />
                  </div>

                  <div className="p-2">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white rounded-xl text-black p-4 flex justify-center">
                        <h3 className="lg:text-2xl md:text-xl sm:text-md">
                          Age:
                        </h3>
                      </div>
                      <div className="bg-white rounded-xl text-black p-4 flex justify-center">
                        <h3 className="lg:text-2xl md:text-xl sm:text-md">
                          {person.age}
                        </h3>
                      </div>
                      <div className="bg-white rounded-xl text-black p-4 flex justify-center items-center">
                        <h3 className="lg:text-2xl md:text-xl sm:text-md">
                          Level:
                        </h3>
                      </div>
                      <div className="bg-white rounded-xl text-black p-4 flex justify-center items-center">
                        <h3 className="lg:text-2xl md:text-xl sm:text-md">
                          {person.level}
                        </h3>
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
                <h3 className="lg:text-4xl md:text-2xl">Super Characters</h3>
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
                    <h3 className="lg:text-8xl md:text-4xl sm:text-2xl">
                      {person.name}
                    </h3>
                    <hr />
                  </div>

                  <div className="p-2">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white rounded-xl text-black p-4 flex justify-center items-center">
                        <h3 className="lg:text-2xl md:text-xl sm:text-md">
                          Age:
                        </h3>
                      </div>
                      <div className="bg-white rounded-xl text-black p-4 flex justify-center items-center">
                        <h3 className="lg:text-2xl md:text-xl sm:text-md">
                          {person.age}
                        </h3>
                      </div>
                      <div className="bg-white rounded-xl text-black p-4 flex justify-center items-center">
                        <h3 className="lg:text-2xl md:text-xl sm:text-md">
                          Level:
                        </h3>
                      </div>
                      <div className="bg-white rounded-xl text-black p-4 flex justify-center items-center">
                        <h3 className="lg:text-2xl md:text-xl sm:text-md">
                          {person.level}
                        </h3>
                      </div>
                      <div className="bg-white rounded-xl text-black p-4 flex justify-center items-center">
                        <h3 className="lg:text-2xl md:text-xl sm:text-md">
                          Power:
                        </h3>
                      </div>
                      <div className="bg-white rounded-xl text-black p-4 flex justify-center items-center">
                        <h3 className="lg:text-2xl md:text-xl sm:text-md">
                          {person.power}
                        </h3>
                      </div>
                      <div className="bg-white rounded-xl text-black p-4 flex justify-center items-center">
                        <h3 className="lg:text-2xl md:text-xl sm:text-md">
                          Special Move:
                        </h3>
                      </div>
                      <div className="bg-white rounded-xl text-black p-4 flex justify-center items-center">
                        <h3 className="lg:text-2xl md:text-xl sm:text-md">
                          {person.special}
                        </h3>
                      </div>
                      <div className="bg-white rounded-xl text-black p-4 flex justify-center items-center">
                        <h3 className="lg:text-2xl md:text-xl sm:text-md">
                          Armour:
                        </h3>
                      </div>
                      <div className="bg-white rounded-xl text-black p-4 flex justify-center items-center">
                        <h3 className="lg:text-2xl md:text-xl sm:text-md">
                          {person.armour}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
