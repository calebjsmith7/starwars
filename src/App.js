import './App.css';
import React from 'react';
import { Routes, Route} from "react-router-dom";
import Home from './components/Home';
import Profile from './components/Profile';
import StarwarsDataService from './services/StarwarsDataService';

function App() {
  const [loading, setLoading] = React.useState(true);
  const [people, setPeople] = React.useState(null);
  // function to call star wars api once on app init
  const starwarsApiService = async () => {
    if (people == null) {
      let results = await StarwarsDataService();
      let data = await results;
      await setPeople(data);
      await setLoading(false);
    } else {
      console.log('people are not null');
    }
  }
  starwarsApiService();

  return (
    
    <div className="App" style={{ backgroundColor: '#1e2427', height: '100vh', width: '100vw', position: 'relative' }}>
      {loading ?
        <h3 style={{ color: 'white', marginTop: '0%', paddingTop: '25%', fontSize: 30 }}>Loading...</h3>
        :
        <Routes>
          <Route path="/" element={<Home characters={people}/>}/>
          {people.map((person)=>{
            <Route path={"/profile/"+ person.name} element={<Profile character={person}/>}/>
          })}
        </Routes>
        
        }

    </div>
    
  );

}

export default App;
