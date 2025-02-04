import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import * as React from 'react'
import Tervehdys from './Tervehdys.jsx'
import OpiskelijaTiedot from './OpiskelijaTiedot';
import Infolista from './infolista.jsx';

function App() {
  const [count, setCount] = React.useState(0)
  const opiskelija = { nimi: "Matti Meikäläinen", ika: 16, kurssi: "Reactin perusteet" };
  const tiedot = ["React", "JavaScript", "CSS"];

  return (
    <>
          <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Tervehdys name="TK"/>
      <OpiskelijaTiedot opiskelija={opiskelija} />
      <Infolista taulukko={tiedot} />
    </>
  )
}

export default App