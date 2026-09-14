import worlds from '../data/worlds';
import './Navigation.css';
export default function Navigation({
  currentWorld,
  setCurrentWorld
}) {
  return <nav className="navigation" aria-label="World navigation"><button type="button" aria-label="Previous world" onClick={() => setCurrentWorld(value => Math.max(1, value - 1))} disabled={currentWorld === 1}>❮</button><div className="world-indicator" aria-live="polite"><span className="world-number">{String(currentWorld).padStart(2, '0')} / 04</span><span className="world-name">{worlds[currentWorld - 1].name}</span><div className="world-dots" aria-hidden="true">{worlds.map((world, index) => <i key={world.name} className={index + 1 === currentWorld ? 'active' : ''} />)}</div></div><button type="button" aria-label="Next world" onClick={() => setCurrentWorld(value => Math.min(worlds.length, value + 1))} disabled={currentWorld === worlds.length}>❯</button></nav>;
}
