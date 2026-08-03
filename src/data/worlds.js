import AboutWorld from "../worlds/AboutWorld";
import ProjectsWorld from "../worlds/ProjectsWorld";
import SkillsWorld from "../worlds/SkillsWorld";
import ExperienceWorld from "../worlds/ExperienceWorld";
import ContactWorld from "../worlds/ContactWorld";

const worlds = [
  {
    name: "About Me",
    component: AboutWorld
  },
  {
    name: "Projects",
    component: ProjectsWorld
  },
  {
    name: "Skills",
    component: SkillsWorld
  },
  {
    name: "Experience",
    component: ExperienceWorld
  },
  {
    name: "Contact",
    component: ContactWorld
  },
];

export default worlds;
