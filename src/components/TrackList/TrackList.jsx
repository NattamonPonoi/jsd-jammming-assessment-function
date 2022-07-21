import "./TrackList.css"
import Track from "../Track/Track"

const TrackList = (props) => {
  const tracks = props.tracks
  const addOn = props.onAdd
  const removeTrack = props.onRemove
  const isRemoval = props.isRemoval
  const newTrack = tracks.map((track) =>
  <Track key={track.id} item={track} onAdd={addOn} onRemove={removeTrack} isRemoval={isRemoval}/>
  );
  return <div className="TrackList">
    {newTrack}
</div>;
};

export default TrackList;
