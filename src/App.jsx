import "./App.css"
import Sidebar from "./components/Sidebar"
import Navigation from "./components/Navigation"
import { useState } from "react"
import worlds from "./data/worlds"


function App() {

  const [currentWorld, setCurrentWorld] = useState(1)
  const currentWorldData = worlds[currentWorld - 1]
  const CurrentWorld = currentWorldData.component

  return (
    <>

      <div className="app">
        <Sidebar />

        <main>
          <Navigation
            currentWorld={currentWorld}
            setCurrentWorld={setCurrentWorld}
          />
          <CurrentWorld />
        </main>
      </div>
    </>
  );
}

export default App