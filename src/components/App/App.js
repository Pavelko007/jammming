import React, { useState } from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

const arr = [{ name: "name1", artist: "artist1", album: "album1", id: 1 },
{ name: "name2", artist: "artist2", album: "album2", id: 2 },
{ name: "name3", artist: "artist3", album: "album3", id: 3 }];

function App() {
  const [searchResults, setSearchResults] = useState(arr);
  const [playlistTracks, setPlaylistTracks] = useState(arr);

  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar />
        <div>
          <SearchResults searchResults={searchResults}/>
          <Playlist playlistTracks={playlistTracks}/>
        </div>
      </div>
    </div>
  );
}

export default App;