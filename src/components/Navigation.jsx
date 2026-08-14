import worlds from "../data/worlds"
import "./Navigation.css";

function Navigation(props) {
  return (
    <div className="navigation">
      {worlds[props.currentWorld - 1].name}

      <button 
        onClick={() => props.setCurrentWorld(props.currentWorld + 1)}
        disabled={props.currentWorld === 5}>➡️</button>

      <button 
        onClick={() => props.setCurrentWorld(props.currentWorld - 1)}
        disabled={props.currentWorld === 1}>⬅️</button>
    </div>
  )  
}

export default Navigation