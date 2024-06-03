import React from "react";
import Track from "../Track/Track";

const TrackList = (props) => {
  return (
    <div>
      {props.tracks.map(track => {
        return <Track
         key={track.id}
         onAdd={props.onAdd}
         onRemove={props.onRemove}
         isRemoval={props.isRemoval}
         track={track} />
      })}

    </div>
  )
};

export default TrackList;