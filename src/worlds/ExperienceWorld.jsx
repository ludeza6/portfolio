import { useState } from 'react';
import experience from '../data/experience';
import { Landscape } from '../components/PixelArt';
import WorldHeading from '../components/WorldHeading';
import './ExperienceWorld.css';
export default function ExperienceWorld() {
  const [active, setActive] = useState(null);
  return <section className="world experience-world" aria-label="Experience"><Landscape biome="ruins" /><WorldHeading number={4} title="EXPERIENCE">Learning by doing. Building with purpose.<br />Hover, focus, or select a monument.</WorldHeading><div className="ruins-scene"><div className="ruin-fragment" aria-hidden="true" /><span className="torch torch-left" aria-hidden="true" /><div className="monuments">{experience.map((item, index) => <div className="monument" key={item.organization} onMouseEnter={() => setActive(index)} onMouseLeave={() => setActive(value => value === index ? null : value)}><button type="button" className="pillar-button" aria-expanded={active === index} aria-controls={`experience-${index}`} onFocus={() => setActive(index)} onBlur={() => setActive(null)} onClick={() => setActive(index)}><span className="pillar-title">{item.organization}<small>{item.role}</small></span><span className="pillar-cap" /><span className="pillar-shaft" /><span className="pillar-base" /></button>{active === index && <article className="experience-card" id={`experience-${index}`}><span className="eyebrow">{item.organization}</span><h2>{item.role}</h2><p>{item.description}</p><ul>{item.highlights.map(highlight => <li key={highlight}>{highlight}</li>)}</ul></article>}</div>)}</div><span className="torch torch-right" aria-hidden="true" /><div className="ruins-floor" /></div><p className="scene-caption">THE JOURNEY CONTINUES.</p></section>;
}
