import React from 'react';
import Header from './Header';
import Search from './Search';
import SearchResults from './SearchResults';
import StarwarsDataService from '../services/StarwarsDataService';
import ProfileBox from './ProfileBox';

function Profile(props) {
  const [searchValue, setSearchValue] = React.useState("");
  const [characters, setCharacters] = React.useState(props.characters);
  const [retreivedData, setRetreivedData] = React.useState(0);
  const [filmData, setFilmData] = React.useState([]);
  const [species, setSpecies] = React.useState(null);
  const [starships, setStarships] = React.useState([]);

  // One time function per profile to call Starwars api for specific character
  React.useEffect(() => {
    const getCharacterInformation = async () => {
      let localFilmData = [];
      let localStarshipData = [];
      // retreive film data
      for (let i = 0; i < props.character.films.length; i++) {
        let results = await StarwarsDataService(props.character.films[i]);
        await localFilmData.push(results.title);
        setRetreivedData(i + 1);
      }
      await setFilmData(localFilmData);

      // retreieve species data
      if (props.character.species.length >= 1) {
        let speciesResults = await StarwarsDataService(props.character.species[0]);
        await setSpecies(speciesResults);
      } else {
        // when no species is provided, default to human
        setSpecies({
          name: 'Human',
          average_lifespan: '72.6 Years'
        });
      }
      // retreive starships flown
      for (let i = 0; i < props.character.starships.length; i++) {
        let results = await StarwarsDataService(props.character.starships[i]);
        await localStarshipData.push(results.name);
      }
      await setStarships(localStarshipData);
    }
    getCharacterInformation();
  }, []);

  
  return (
    <div className='profilePage'>
      <Header width={150} />
      <Search search={searchValue} setSearch={setSearchValue} width={window.innerWidth > 400 ? "30%" : '85%'}/>
      <SearchResults characterList={characters} searchEntry={searchValue} width={window.innerWidth > 400 ? "30%" : '85%'} />
      <ProfileBox charName={props.character.name} charHeight={props.character.height} charMass={props.character.mass} charHairColor={props.character.hair_color} charBirthday={props.character.birth_year} specInfo={species} retData={retreivedData} char={props.character} films={filmData} theStarShips={starships}/>
    </div>
  );
}

export default Profile;
