import "./SearchBar.css"

const SearchBar = (props) => {
  const onSearch = props.onSearch;
  const seach = (term) =>{
    onSearch(term);
  }
  const handleTermChange = (e) => {
    seach(e.target.value)

  }
  return (
    <div className="SearchBar">
      <input placeholder="Enter A Song, Album, or Artist" onChange={handleTermChange} />
      <button className="SearchButton">SEARCH</button>
    </div>
  )
}

export default SearchBar