import React from 'react';

async function StarwarsDataService() {

    let reply;

          let results = await fetch('https://swapi.dev/api/people');
          let data =  await results.json();
          reply = data.results;
    
  return reply;
}

export default StarwarsDataService;
