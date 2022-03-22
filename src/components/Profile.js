import React from 'react';
import Logo from '../images/swlogo.png';
import Header from './Header';
import Search from './Search';
import SearchResults from './SearchResults';
import GetPoundsFromKilos from '../util/GetPoundsFromKilos';
import CapitalizeFirstLetter from '../util/CapitalizeFirstLetter';
import StarwarsDataService from '../services/StarwarsDataService';

function Profile(props) {
    const [searchValue, setSearchValue] = React.useState("");
    const [characters, setCharacters] = React.useState(props.characters);
    const [retreivedData, setRetreivedData] = React.useState(0);
    const [filmData, setFilmData] = React.useState([]);

    React.useEffect(()=>{
      const getCharacterInformation = async () => {
        let localData = [];
        for (let i = 0; i < props.character.films.length; i++) {
          let results = await StarwarsDataService(props.character.films[i]);
          await localData.push(results.title);
          await setFilmData(filmData, results.title);
          setRetreivedData(i+1);
          await console.log('results from film query are ' + results.title);
        }

        await setFilmData(localData);

      }
      getCharacterInformation();
    },[]);

console.log('total films are ' + retreivedData);
 
  return (
    <div className='profilePage'> 
        <Header width={150}/>
        <Search search={searchValue} setSearch={setSearchValue} width="30%"/>
        <SearchResults characterList={characters} searchEntry={searchValue} width="30%" />
        
        <div style={{width: '30%', marginLeft: 'auto', marginRight: 'auto', backgroundColor: '#1e2427'}}>
        <h2 style={{color: 'white', fontSize: 40, marginTop: 50}}>{props.character.name}</h2>
        <h4 style={{color: 'white', fontFamily: 'Aurek-Besh', fontSize: 10}}>{props.character.name}</h4>
          
            <h4 style={{color: 'white', fontSize: 20, textDecorationLine: 'underline', marginTop: 50, marginBottom: 10}}>About Me</h4>
            <p style={{color: 'white'}}>Height: {props.character.height}</p>
            <p style={{color: 'white'}}>Weight: {GetPoundsFromKilos(props.character.mass)} lbs</p>
            <p style={{color: 'white'}}>Hair Color: {CapitalizeFirstLetter(props.character.hair_color)}</p>
            <p style={{color: 'white'}}>Birthyear: {props.character.birth_year}</p>
            <p style={{color: 'white'}}>Species Info: {props.character.species[0] || 'None Provided'}</p>
            
            <p style={{color: 'white'}}>Films: </p>
            <div style={{textAlign: 'left', width: '60%', marginLeft: 'auto', marginRight: 'auto'}}>
            {retreivedData == props.character.films.length ? 
            filmData.map((film)=>{
                return(
                  <p style={{color: 'white'}} key={filmData.indexOf(film)}>- {film}</p>
                )
            })
            :
            <p style={{color: 'white'}}>Loading...</p>
        }
        </div>
       
        
          </div>
         
        
   
        
    </div>
  );
}

export default Profile;
