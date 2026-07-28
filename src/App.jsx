import Background from "./components/Background"
import Sidebar from "./components/Sidebar"
import Navigation from "./components/Navigation"
import AboutWorld from "./worlds/AboutWorld"
import { useState } from "react"

function App() {
  const [currentWorld, setCurrentWorld] = useState(1)
  return (
    <>
      <Background />
      <Sidebar />
      <Navigation />
      <AboutWorld />
    </>
  )
}

export default App