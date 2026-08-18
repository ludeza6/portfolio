import worlds from "../data/worlds"
import "./Navigation.css";

function Navigation(props) {
  return (
    <div className="navigation">
      <button
        onClick={() => props.setCurrentWorld(props.currentWorld - 1)}
        disabled={props.currentWorld === 1}
      >
        ←
      </button>

      <div className="world-indicator">
        <span className="world-number">WORLD {props.currentWorld}</span>

        <span className="world-name">
          {worlds[props.currentWorld - 1].name}
        </span>
      </div>

      <button
        onClick={() => props.setCurrentWorld(props.currentWorld + 1)}
        disabled={props.currentWorld === worlds.length}
      >
        →
      </button>
    </div>
  );  
}

export default Navigation