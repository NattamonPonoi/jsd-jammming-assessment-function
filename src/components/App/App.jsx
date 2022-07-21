import "./App.css";

//import 3 components
import SearchResults from "../SearchResults/SearchResults";
import React, { useState } from "react";
import Playlist from "../Playlist/Playlist";
import SearchBar from "../SearchBar/SearchBar";
import Spotify from "../../utils/Spotify";
const App = () => {
  const [searchResults, setsearchResults] = useState([]);
  const [playlistName, setplaylistName] = useState("New Playlist");
  const [playlistTracks, setplaylistTracks] = useState([]);

  const addTrack = async (track) => {
    let compare = false;
    for (let i = 0; i < playlistTracks.length; i++) {
      if (track.id === playlistTracks[i].id) {
        compare = true;
      }
    }
    if (compare === false) {
      setplaylistTracks([...playlistTracks,track]);
    }
  };
  const removeTrack = (track) => {
    let remove = playlistTracks.filter((song) => track !== song);
    setplaylistTracks(remove);
  };
  const updatePlaylistName = (name) => {
    setplaylistName(name);
  };
  const savePlaylist = async () => {
    const trackURIs = playlistTracks.map((data) => data.uri);
    await Spotify.savePlaylist(playlistName,trackURIs);
    setplaylistName("New Playlist");
    setplaylistTracks([]);
    setsearchResults([]);
  };
  const search = async (term) => {
    const result = await Spotify.search(term);
    setsearchResults(result);
  };

  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar onSearch={search} />
        <div className="App-playlist">
          <SearchResults searchResults={searchResults} onAdd={addTrack} />
          <Playlist
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onRemove={removeTrack}
            onNameChange={updatePlaylistName}
            onSave={savePlaylist}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
