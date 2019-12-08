import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  render(){
    return (
      <div className="SearchBar">
      <input placeholder="Enter A Song, Album, or Artist" />
      <button clasName="SearchButton">SEARCH</button>
    </div>
    )
  }
}

export default SearchBar;
