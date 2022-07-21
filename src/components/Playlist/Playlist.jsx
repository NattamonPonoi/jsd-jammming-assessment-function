import "./Playlist.css";
import TrackList from "../TrackList/TrackList";

const Playlist = (props) => {
  const playlistTracksList = props.playlistTracks;
  const removeTrack = props.onRemove;
  const changePlaylistName = props.onNameChange;
  const onSave = props.onSave;
  const playlistName = props.playlistName;
  const handleNameChange = (e) =>{
    changePlaylistName(e.target.value);
  }

  return (
    <div className="Playlist">
      <input
        value={playlistName}
        onChange={handleNameChange}
      />
      <TrackList
        tracks={playlistTracksList}
        onRemove={removeTrack}
        isRemoval={true}
      />
      <button className="Playlist-save" onClick={onSave}>
        SAVE TO SPOTIFY
      </button>
    </div>
  );
};

export default Playlist;
