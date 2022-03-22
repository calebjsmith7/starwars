

async function StarwarsDataService(endpoint) {

    let reply;

          let results = await fetch(endpoint, { mode: 'cors', headers: {
            'Content-Type': 'application/json'
          }, });
          let data =  await results.json();
          endpoint === "https://swapi.dev/api/people/" ? 
          reply = data.results
          :
          reply = data;
    
  return reply;
}

export default StarwarsDataService;
