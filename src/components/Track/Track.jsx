import "./Track.css";

const Track = (props) => {
  const newItem = props.item;
  const newOnAdd = props.onAdd;
  const newOnRemove = props.onRemove;
  const isRemoval = props.isRemoval;
  const renderAction = () => {
    if (isRemoval) {
      return (
        <button className="Track-action" onClick={()=>removeTrack(newItem)}>
          -
        </button>
      );
    } else {
      return (
        <button className="Track-action" onClick={()=>addTrack(newItem)}>
          +
        </button>
      );
    }
  };
  const addTrack = (data) => {
    newOnAdd(data);
  };
  const removeTrack = (data) => {
    newOnRemove(data);
  };

  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{newItem.name}</h3>
        <p>
          {newItem.artist} | {newItem.album}
        </p>
      </div>
        {renderAction()}
    </div>
  );
};

export default Track;
