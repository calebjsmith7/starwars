import React from 'react';
import Search from '../components/Search';
import Header from '../components/Header';
import SearchResults from './SearchResults';

function Home(props) {
    const [searchValue, setSearchValue] = React.useState("");
    const [characters, setCharacters] = React.useState(props.characters);

  return (
    <div className='homeHeaderMain'>
      <Header width={255}/>
      <Search search={searchValue} setSearch={setSearchValue} width="50%"/>
      <SearchResults characterList={characters} searchEntry={searchValue} width="50%"/>
    </div>
  );
}

export default Home;
