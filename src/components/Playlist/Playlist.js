import React, { useCallback } from "react";
import TrackList from "../Tracklist/Tracklist";

const Playlist = (props) => {
  const handleNameChange = useCallback((e) => {
    props.onNameChange(e.target.value);
  }, [props.onNameChange]);
  return (
    <div>
      <h2>Playlist</h2>
      <input onChange={handleNameChange} defaultValue={"New Playlist"} />
      <TrackList 
      tracks={props.playlistTracks} />
      <button >SAVE TO SPOTIFY</button>
    </div>
  )
};

export default Playlist;