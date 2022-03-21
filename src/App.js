import './App.css';
import React from 'react';
import Home from './components/Home';
import Profile from './components/Profile';

function App() {
  const [loading, setLoading] = React.useState(true);
  const [people, setPeople] = React.useState(null);
  // function to call star wars api once on app init
  const getStarWarsCharacters = async () => {
    if(people == null){
      let results = await fetch('https://swapi.dev/api/people');
      let data =  await results.json();
      setPeople(data.results);
      console.log(data.results);
      setLoading(false);
    }
  }
  getStarWarsCharacters();

  return (
    
    <div className="App" style={{ backgroundColor: '#1e2427', height: '100vh', width: '100vw', position: 'relative' }}>
      {loading ?
        <h3 style={{ color: 'white', marginTop: '0%', paddingTop: '25%', fontSize: 30 }}>Loading...</h3>
        :
        <Home characters={people}/>
        }

    </div>
    
  );

}

export default App;
