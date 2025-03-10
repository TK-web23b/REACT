import { useState } from 'react'

import * as React from 'react'
import Tervehdys from './Tervehdys.jsx'
import OpiskelijaTiedot from './OpiskelijaTiedot';
import Infolista from './infolista.jsx';
import Linkkilista from './linkkilista.jsx';
import Kayttajakortti from './Kayttajakortti.jsx';

function App() {
  const [count, setCount] = React.useState(0)
  const opiskelija = { nimi: "Toivo Kalliokoski", ika: 17, kurssi: "Ohjelmistokomponentit" };
  const tiedot = ["React", "JavaScript", "CSS"];
  const links = [
    { nimi: "Google", url: "https://www.google.com" },
    { nimi: "Facebook", url: "https://www.facebook.com" },
    { nimi: "GitHub", url: "https://www.github.com" }
  ];
  const linkit = [
    { nimi: "Google", url: "https://google.com" },
    { nimi: "React", url: "https://react.dev" }
  ];

  return (
    <>
      <h1>Hello world!</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <Tervehdys name="TK"/>
      <OpiskelijaTiedot opiskelija={opiskelija} />
      <Infolista taulukko={tiedot} />
      <Linkkilista lista={linkit} />
      <Kayttajakortti nimi="TK" lista={tiedot} />
    </>
  )
}

export default App