import React from 'react';
import SearchBar from 'material-ui-search-bar';

function Search(props) {
    
  return (
    <>
    <SearchBar
        value={props.search}
        onChange={props.setSearch}
        onRequestSearch={()=>console.log('searching' + props.search)}
        style={{width: '50%', marginLeft: 'auto', marginRight: 'auto', marginTop: '1%'}}
    />
    </>
  );
}

export default Search;
