import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Navigation from './components/Navigation';
import worlds from './data/worlds';
import './App.css';
export default function App() {
  const [currentWorld, setCurrentWorld] = useState(1);
  const CurrentWorld = worlds[currentWorld - 1].component;
  return <div className="app"><Sidebar /><main id="main-content"><div className="world-stage" key={currentWorld}><CurrentWorld /></div><Navigation currentWorld={currentWorld} setCurrentWorld={setCurrentWorld} /></main></div>;
}
