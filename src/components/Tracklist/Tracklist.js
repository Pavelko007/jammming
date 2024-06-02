import React from "react";
import Track from "../Track/Track";

const TrackList = (props) => {
  return (
    <div>
      {props.tracks.map(track => {
        return <Track key={track.id} track={track} />
      })}

    </div>
  )
};

export default TrackList;