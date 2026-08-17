import worlds from "../data/worlds"
import "./Navigation.css";

function Navigation(props) {
  return (
    <div className="navigation">

      <button
        onClick={() => props.setCurrentWorld(props.currentWorld - 1)}
        disabled={props.currentWorld === 1}
      >
        ⬅️
      </button>

      {worlds[props.currentWorld - 1].name}

      <button
        onClick={() => props.setCurrentWorld(props.currentWorld + 1)}
        disabled={props.currentWorld === worlds.length}
      >
        ➡️
      </button>
    </div>
  );  
}

export default Navigation