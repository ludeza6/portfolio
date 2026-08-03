function Navigation(props) {
  return (
    <div>
      {props.currentWorld}

      <button 
        onClick={() => props.setCurrentWorld(props.currentWorld + 1)}
        disabled={props.currentWorld === 5}>(" ")➡️(" ")</button>

      <button 
        onClick={() => props.setCurrentWorld(props.currentWorld - 1)}
        disabled={props.currentWorld === 1}>(" ")⬅️(" ")</button>
    </div>
  )  
}

export default Navigation