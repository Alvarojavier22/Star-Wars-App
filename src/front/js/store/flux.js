const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      people: [],
      planets: [],
      films: [],
      species: [],
      starships: [],
      vehicles: [],
    },
    actions: {
      getStarWars: async (resource, pagination = {}) => {
        let params = ""
        if (!! pagination.page) {
          params = `?page= ${pagination.page}&limit=${pagination.limit || 10}`
        }
        let resp = await fetch("https://swapi.tech/api/" + resource + params)
        if (!resp.ok) {
          console.error(resp.status + ": " + resp.statusText)
          return
        }
        let data = await resp.json();
        let newStore = {...getStore()}
        newStore[resource] = data.result || data.results
        setStore(newStore)
      },
    },
  };
};

export default getState;
