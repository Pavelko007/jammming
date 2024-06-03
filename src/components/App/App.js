import React, { useCallback, useState } from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import Spotify from "../../util/Spotify";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [playlistName, setPlaylistName] = useState("New Playlist");

  const updatePlaylistName = useCallback((name) => {
    setPlaylistName(name);
  }, []);

  const addTrack = useCallback((track) => {
    if (playlistTracks.some(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    setPlaylistTracks([...playlistTracks, track]);
  }, [playlistTracks]);

  const removeTrack = useCallback(trackToRemove => {
    setPlaylistTracks(prevTracks => prevTracks
      .filter(track => track.id !== trackToRemove.id)
    );
  }, []);

  const savePlaylist = useCallback(() => {
    let trackUris = playlistTracks.map(track => track.uri);

    Spotify.savePlaylist(playlistName, trackUris).then(() => {
      setPlaylistName("New Playlist");
      setPlaylistTracks([]);
    });
  }, [playlistName, playlistTracks]);

  const search = useCallback((term) => {
    Spotify.search(term).then(tracks => setSearchResults(tracks));
  }, []);

  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar onSearch={search} />
        <div>
          <SearchResults
            searchResults={searchResults}
            onAdd={addTrack}
          />
          <Playlist
            onNameChange={updatePlaylistName}
            onRemove={removeTrack}
            onSave={savePlaylist}
            playlistTracks={playlistTracks} />
        </div>
      </div>
    </div>
  );
}

export default App;