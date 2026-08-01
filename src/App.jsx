import Background from "./components/Background"
import Sidebar from "./components/Sidebar"
import Navigation from "./components/Navigation"
import AboutWorld from "./worlds/AboutWorld"

import { useState } from "react"

import ProjectsWorld from "./worlds/ProjectsWorld"
import SkillsWorld from "./worlds/SkillsWorld"
import ExperienceWorld from "./worlds/ExperienceWorld"
import ContactWorld from "./worlds/ContactWorld"


function App() {
  const [currentWorld, setCurrentWorld] = useState(1)
  return (
    <>
      <Background />
      <Sidebar />
      <Navigation
        currentWorld={currentWorld}
        setCurrentWorld={setCurrentWorld}
      />

      {currentWorld === 1 && <AboutWorld />}
      {currentWorld === 2 && <ProjectsWorld />}
      {currentWorld === 3 && <SkillsWorld />}
      {currentWorld === 4 && <ExperienceWorld />}
      {currentWorld === 5 && <ContactWorld />}
    </>
  );
}

export default App