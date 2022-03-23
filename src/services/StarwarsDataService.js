export default async function StarwarsDataService(endpoint) {
  let reply;
  let results = await fetch(endpoint, {
    mode: 'cors', headers: {
      'Content-Type': 'application/json'
    },
  });
  let data = await results.json();
  // determines whether asking for list of characters? if so, it sends back the data.results
  endpoint === "https://swapi.dev/api/people/" ?
    reply = data.results
    :
    reply = data;
  return reply;
}

