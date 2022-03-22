import React from 'react';
import Search from '../components/Search';
import Header from '../components/Header';

function Home(props) {
    const [searchValue, setSearchValue] = React.useState("");
    const [characters, setCharacters] = React.useState(props.characters);

  return (
    <div className='homeHeaderMain'>
        <Header/>
          <Search search={searchValue} setSearch={setSearchValue} />
          <div style={{ display: searchValue ? 'block' : 'none', backgroundColor: 'white', width: '50%', marginLeft: 'auto', marginRight: 'auto', marginTop: '-2%' }}>
              {characters.map((char) => {
                  let charName = char.name.toUpperCase();
                  return (
                    
                    charName.match(searchValue.toUpperCase()) ?
                      <a href={"/profile/" + char.name} style={{textDecoration: 'none'}}>
                      <div onClick={()=>console.log(char.name + ' clicked')} style={{height: 40, backgroundColor: 'white', textAlign: 'center'}}>
                              <h5 style={{color: 'black'}}>{char.name}</h5>
                                <hr style={{border: 'fafafa'}}/>
                      </div>
                      </a>
                      : null
                  )
              })}
          </div>

      </div>
  );
}

export default Home;
