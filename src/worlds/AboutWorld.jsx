import { Avatar, Landscape, Island, Tree } from '../components/PixelArt';
import WorldHeading from '../components/WorldHeading';
import './AboutWorld.css';
export default function AboutWorld() {
  return <section className="world about-world" aria-label="About me"><Landscape /><WorldHeading number={1} title="ABOUT ME">A little curiosity. A lot of building.<br />Welcome to my corner of the world.</WorldHeading><div className="about-scene"><div className="about-panel"><span className="dialogue-label">PLAYER 01 · LUCAS</span><h2>Hi! I’m Lucas <span aria-hidden="true">✦</span></h2><p>Computer Systems Engineering student at Carleton University.</p><p>I build software, AI systems, automation, and interactive projects.</p></div><div className="floating-island"><Tree /><Avatar /><Island /></div></div><p className="scene-caption">CURIOUS BY NATURE. ENGINEER IN THE MAKING.</p></section>;
}
