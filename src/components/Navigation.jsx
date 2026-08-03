import worlds from "../data/worlds"

function Navigation(props) {
  return (
    <div>
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