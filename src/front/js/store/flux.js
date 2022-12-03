const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      planets: [],
      people: [],
      films: [],
      species: [],
      starships: [],
      vehicles: [],
    },
    actions: {
      getPlanets: async () => {
        let resp = await fetch("https://swapi.tech/api/planets/");
        let data = await resp.json();
        setStore({
          ...getStore(),
          planets: data.results,
        });
      },

      getPeople: async () => {
        let resp = await fetch("https://swapi.tech/api/people/");
        let data = await resp.json();
        setStore({
          ...getStore(),
          people: data.results,
        });
      },
      getFilms: async () => {
        let resp = await fetch("https://www.swapi.tech/api/films/");
        let data = await resp.json();
        console.log(data)
        setStore({
          ...getStore(),
          films: data.result || data.results,
        });
      },
      getSpecies: async () => {
        let resp = await fetch("https://swapi.tech/api/species/");
        let data = await resp.json();
        setStore({
          ...getStore(),
          species: data.results,
        });
      },
      getStarships: async () => {
        let resp = await fetch("https://swapi.tech/api/starships/");
        let data = await resp.json();
        setStore({
          ...getStore(),
          starships: data.results,
        });
      },
      getVehicles: async () => {
        let resp = await fetch("https://swapi.tech/api/vehicles/");
        let data = await resp.json();
        setStore({
          ...getStore(),
          vehicles: data.results,
        });
      },
    },
  };
};

export default getState;
