const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      planets: [],
      people: [],
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
    },
    getPeople: async () => {
      let resp = await fetch("https://swapi.tech/api/people/");
      let data = await resp.json();
      setStore({
        ...getStore(),
        people: data.results,
      });
    },
  };
};

export default getState;
