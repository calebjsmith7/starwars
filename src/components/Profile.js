import React from 'react';
import Logo from '../images/swlogo.png';
import Header from './Header';
import Search from './Search';
import SearchResults from './SearchResults';
import GetPoundsFromKilos from '../util/GetPoundsFromKilos';
import GetFeetFromCm from '../util/GetFeetFromCm';
import CapitalizeFirstLetter from '../util/CapitalizeFirstLetter';
import StarwarsDataService from '../services/StarwarsDataService';
import Languages from './Languages';

function Profile(props) {
    const [searchValue, setSearchValue] = React.useState("");
    const [characters, setCharacters] = React.useState(props.characters);
    const [retreivedData, setRetreivedData] = React.useState(0);
    const [filmData, setFilmData] = React.useState([]);
    const [species, setSpecies] = React.useState(null);
    const [starships, setStarships] = React.useState([]);
    const [language, setLanguage] = React.useState('English');

    // One time function per profile to call Starwars api for specific character
    React.useEffect(()=>{
      const getCharacterInformation = async () => {
        let localFilmData = [];
        let localStarshipData = [];
        // retreive film data
        for (let i = 0; i < props.character.films.length; i++) {
          let results = await StarwarsDataService(props.character.films[i]);
          await localFilmData.push(results.title);
          setRetreivedData(i+1);
        }
        await setFilmData(localFilmData);

      // retreieve species data
      if(props.character.species.length >= 1){
        let speciesResults = await StarwarsDataService(props.character.species[0]);
        await setSpecies(speciesResults);
      } else {
      //  await setSpecies('Human');
      setSpecies({name: 'Human',
                  average_lifespan: '72.6 Years'});
      }
        
      // retreive starships flown
        for(let i = 0; i < props.character.starships.length; i++){
          let results = await StarwarsDataService(props.character.starships[i]);
          await localStarshipData.push(results.name);
          await console.log('starships ' + results.name);
        }
        await setStarships(localStarshipData);
      }
      getCharacterInformation();
    },[]);

 
  return (
    <div className='profilePage'> 
        <Header width={150}/>
        <Search search={searchValue} setSearch={setSearchValue} width="30%"/>
        <SearchResults characterList={characters} searchEntry={searchValue} width="30%" />
        <Languages lang={language} setLang={setLanguage}/>
        
        <div style={{width: '26%', marginLeft: 'auto', marginRight: 'auto', backgroundColor: '#1e2427', padding: '2%', paddingTop: 0}}>
        <h2 style={{color: 'white', fontSize: 40, marginTop: 50}}>{props.character.name}</h2>
        <h4 style={{color: 'white', fontFamily: 'Aurek-Besh', fontSize: 10}}>{props.character.name}</h4>
          
            <h4 style={{color: 'white', fontSize: 20, textDecorationLine: 'underline', marginTop: 50, marginBottom: 10}}>About Me</h4>
            <p style={{color: 'white'}}>Height: {GetFeetFromCm(props.character.height)}</p>
            <p style={{color: 'white'}}>Weight: {GetPoundsFromKilos(props.character.mass)} lbs</p>
            <p style={{color: 'white'}}>Hair Color: {CapitalizeFirstLetter(props.character.hair_color)}</p>
            <p style={{color: 'white'}}>Birthyear: {props.character.birth_year}</p>

            <p style={{color: 'white'}}>Species Info: {species ? species.name : "Loading..."}</p>
            <p style={{color: 'white'}}>Species Average Lifespan: {species ? CapitalizeFirstLetter(species.average_lifespan) : "Loading..."}</p>
            
        <p style={{ color: 'white' }}>Films: </p>
        <div style={{ textAlign: 'left', width: '40%', marginLeft: 'auto', marginRight: 'auto' }}>
          {retreivedData == props.character.films.length ?
            filmData.map((film) => {
              return (
                <p style={{ color: 'white', fontStyle: 'italic' }} key={filmData.indexOf(film)}>- {film}</p>
              )
            })
            :
            <p style={{ color: 'white' }}>Loading...</p>
          }
        </div>
        <p style={{ color: 'white' }}>Starships Flown: </p>
        {starships.length > 0 ?
        <div style={{ textAlign: 'left', width: '40%', marginLeft: 'auto', marginRight: 'auto' }}>
          
          {starships.map((ship)=>{
            return(
              <p style={{ color: 'white', fontStyle: 'italic' }} key={starships.indexOf(ship)}>- {ship}</p>
            )
          })} 
        </div>
        : <p style={{ color: 'white' }}>Not a Pilot</p>}
       
        
          </div>
         
        
   
        
    </div>
  );
}

export default Profile;
