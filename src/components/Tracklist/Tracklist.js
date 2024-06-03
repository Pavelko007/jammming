import React from "react";
import Track from "../Track/Track";

const TrackList = (props) => {
  return (
    <div>
      {props.tracks.map(track => {
        return <Track
         key={track.id}
         onAdd={props.onAdd}
         track={track} />
      })}

    </div>
  )
};

export default TrackList;