import React, { useCallback } from "react";

const Track = (props) => {
  const addTrack = useCallback((event) =>{
    props.onAdd(props.track);

  },[props.onAdd, props.track]);

  const renderAction = ()=>{
    return (
      <button onClick={addTrack}>
        +
      </button>
    )
  };
  return (
    <div >
      <div >
        <h3>{props.track.name}</h3>
        <p>{props.track.artist} | {props.track.album}</p>
      </div>
      {renderAction()}
    </div>
  )
};

export default Track;