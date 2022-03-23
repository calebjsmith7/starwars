import StarwarsDataService from "./StarwarsDataService";

test('returns object from api call', () => {
    expect(typeof StarwarsDataService('https://swapi.dev/api/people/')).toBe("object");
});