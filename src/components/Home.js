import React from 'react';
import Search from '../components/Search';
import Header from '../components/Header';
import SearchResults from './SearchResults';

function Home(props) {
    const [searchValue, setSearchValue] = React.useState("");
    const [characters, setCharacters] = React.useState(props.characters);

  return (
    <div className='homeHeaderMain'>
      <Header/>
      <Search search={searchValue} setSearch={setSearchValue} />
      <SearchResults characterList={characters} searchEntry={searchValue} />
    </div>
  );
}

export default Home;
