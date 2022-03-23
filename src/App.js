import './App.css';
import React from 'react';
import { Routes, Route} from "react-router-dom";
import Home from './components/Home';
import Profile from './components/profile/Profile';
import Loading from './components/common/Loading';
import StarwarsDataService from './services/StarwarsDataService';
import FirstAndLastNames from './util/FirstAndLastNames';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [loading, setLoading] = React.useState(true);
  const [people, setPeople] = React.useState(null);

  // function to call star wars api once on app init
  React.useEffect(() => {
    const starwarsApiService = async () => {
        let results = await StarwarsDataService('https://swapi.dev/api/people/');
        let data = await results;
        await setPeople(data);
        await setLoading(false); 
    }
    starwarsApiService();
  }, [])
  

  return (

    <div className="App">
      {loading ?
        <Loading/>
        :
        <Routes>
          <Route path="/" element={<Home characters={people} />} />
          {people.map((person) => {
            let nameObject = FirstAndLastNames(person.name);
            return (
              <Route path={"/profile/" + nameObject.first + nameObject.last} element={<Profile character={person} characters={people} key={uuidv4()} />} />
            );
          })}
        </Routes>
      }
    </div>
  );
}

export default App;
