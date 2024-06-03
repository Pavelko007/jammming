import React, { useCallback, useState } from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import Spotify from "../../util/Spotify";

const arr1 = [{ name: "name1", artist: "artist1", album: "album1", id: 1 },
{ name: "name2", artist: "artist2", album: "album2", id: 2 },
{ name: "name3", artist: "artist3", album: "album3", id: 3 }];
const arr2 = [{ name: "name4", artist: "artist4", album: "album4", id: 4 },
{ name: "name5", artist: "artist5", album: "album5", id: 5 },
{ name: "name6", artist: "artist6", album: "album6", id: 6 }];

function App() {
  const [searchResults, setSearchResults] = useState(arr1);
  const [playlistTracks, setPlaylistTracks] = useState(arr2);
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
    //todo test remove
    trackUris = [
      'spotify:track:2YxL4H5c4NCPm19E28OPSt'];

    Spotify.savePlaylist(playlistName, trackUris).then(() => {
      setPlaylistName("New Playlist");
      setPlaylistTracks([]);
    });
  }, [playlistName, playlistTracks]);

  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar />
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