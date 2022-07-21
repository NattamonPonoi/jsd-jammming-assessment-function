import "./SearchResults.css"
import TrackList from "../TrackList/TrackList"

const SearchResults = (props) => {
  const tracks=props.searchResults
  const addOn = props.onAdd
  return (
    <div className="SearchResults">
  <h2>Results</h2>
  <TrackList tracks={tracks} onAdd={addOn} isRemoval={false}/>
  
</div>
  )
}

export default SearchResults