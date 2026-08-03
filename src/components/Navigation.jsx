function Navigation(props) {
  const worlds = ["About Me", "Projects", "Skills", "Experience", "Contact"];
  return (
    <div>
      {worlds[props.currentWorld - 1]}

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