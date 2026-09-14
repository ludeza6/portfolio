import { useState } from 'react';
import skills from '../data/skills';
import { Landscape, Island } from '../components/PixelArt';
import WorldHeading from '../components/WorldHeading';
import './SkillsWorld.css';
export default function SkillsWorld() {
  const [open, setOpen] = useState(false);
  return <section className="world skills-world" aria-label="Skills"><Landscape biome="desert" /><WorldHeading number={3} title="SKILLS">Tools collected along the way.<br />Open the chest to see my inventory.</WorldHeading><div className={`desert-scene ${open ? 'chest-open' : ''}`}><div className="desert-island"><div className="cactus cactus-one" aria-hidden="true" /><div className="cactus cactus-two" aria-hidden="true" /><button className="chest-button" type="button" aria-expanded={open} aria-controls="skills-inventory" onClick={() => setOpen(!open)}><span className="chest-lid" /><span className="chest-base" /><span className="chest-lock" /><span className="chest-prompt">{open ? 'CLOSE INVENTORY' : 'OPEN INVENTORY'} {open ? '−' : '+'}</span></button><Island desert /></div>{open && <div id="skills-inventory" className="skills-scroll"><span className="inventory-label">TREASURE FOUND</span><h2>My inventory</h2><div className="skill-groups">{skills.map(group => <section key={group.category}><h3>{group.category}</h3><ul>{group.items.map(skill => <li key={skill}>{skill}</li>)}</ul></section>)}</div></div>}</div><p className="scene-caption">ALWAYS LEARNING. ALWAYS ADDING TO THE TOOLKIT.</p></section>;
}
