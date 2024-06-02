import React from "react";
import TrackList from "../Tracklist/Tracklist";

const Playlist = (props) => {
    return (
        <div>
            <h2>Playlist</h2>
            <input defaultValue={"New Playlist"} />
            <TrackList />
            <button >SAVE TO SPOTIFY</button>
        </div>
    )
};

export default Playlist;