import React from 'react';
import SearchBar from 'material-ui-search-bar';

function Search(props) {
    
  return (
    <>
    <SearchBar
        value={props.search}
        onChange={props.setSearch}
        onRequestSearch={()=>console.log('searching' + props.search)}
        onCancelSearch={()=>{props.setSearch("")}}
        style={{width: props.width, marginLeft: 'auto', marginRight: 'auto', marginTop: '1%'}}
        className="searchBar"
    />
    </>
  );
}

export default Search;
