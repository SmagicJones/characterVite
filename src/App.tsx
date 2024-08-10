import "./App.css";

import { makePerson, makeSuperPerson } from "./utils/actions";

const people = [];

const superPeople = [];

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

superPeople.push(megaClaire);

function App() {
  return (
    <>
      <header className="m-2">
        <div className="grid grid-cols-1">
          <div className="bg-slate-500 rounded-xl text-white p-4">
            <div className="text-center">
              <h1 className="text-8xl">Characters</h1>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="grid grid-cols-1 m-2">
          <div className="bg-slate-500 rounded-xl text-white p-4">
            <div className="text-center">
              <h3 className="text-4xl">Normal Characters</h3>
            </div>
          </div>
        </div>

        <section className="grid md:grid-cols-2 gap-4 pt-4 m-2">
          {people.map((person) => {
            return (
              <div className="bg-slate-500 rounded-xl text-white p-4">
                <div className="text-center">
                  <h3 className="text-4xl">{person.name}</h3>
                  <hr />
                </div>

                <div className="p-2">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-xl text-black p-4">
                      <h3 className="text-2xl">Character Age:</h3>
                    </div>
                    <div className="bg-white rounded-xl text-black p-4">
                      <h3 className="text-2xl">{person.age}</h3>
                    </div>
                    <div className="bg-white rounded-xl text-black p-4">
                      <h3 className="text-2xl">Character Level:</h3>
                    </div>
                    <div className="bg-white rounded-xl text-black p-4">
                      <h3 className="text-2xl">{person.level}</h3>
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
              <h3 className="text-4xl">Super Characters</h3>
            </div>
          </div>
        </div>
        <section className="grid md:grid-cols-2 gap-4 pt-4 m-2">
          {superPeople.map((person) => {
            return (
              <div className="bg-slate-500 rounded-xl text-white p-4">
                <div className="text-center">
                  <h3 className="text-4xl">{person.name}</h3>
                  <hr />
                </div>

                <div className="p-2">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-xl text-black p-4">
                      <h3 className="text-2xl">Character Age:</h3>
                    </div>
                    <div className="bg-white rounded-xl text-black p-4">
                      <h3 className="text-2xl">{person.age}</h3>
                    </div>
                    <div className="bg-white rounded-xl text-black p-4">
                      <h3 className="text-2xl">Character Level:</h3>
                    </div>
                    <div className="bg-white rounded-xl text-black p-4">
                      <h3 className="text-2xl">{person.level}</h3>
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
