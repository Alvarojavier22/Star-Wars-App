const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      people: [],
      planets: [],
      films: [],
      species: [],
      starships: [],
      vehicles: [],
      favorites: [],
    },
    actions: {
      getStarWars: async (resource, pagination = {}) => {
        let params = "";
        if (!!pagination.page) {
          params = `?page= ${pagination.page}&limit=${pagination.limit || 10}`;
        }
        let resp = await fetch("https://swapi.tech/api/" + resource + params);
        if (!resp.ok) {
          console.error(resp.status + ": " + resp.statusText);
          return;
        }
        let data = await resp.json();
        let newStore = { ...getStore() };
        newStore[resource] = data.result || data.results;
        setStore(newStore);
        return {
          records: data.total_records || null,
          pages: data.total_pages || null,
        };
      },
      getStarWarsDetail: async (resource, id) => {
        let resp = await fetch(`https://swapi.tech/api/${resource}/${id}`);
        if(!resp.ok) {
          console.error(`Error: ${resp.status} : ${resp.statusText}`)
          return
        }
        let data = await resp.json()
        return {
          ...data.result.properties
        }
      },
      addFavorites: (element) => {
          let currentStore = getStore()
          setStore({...currentStore,
            favorites: [...currentStore.favorites, element]})
      },
      removeFavorites: (index) => {
        let currentStore = getStore()
        let newFavorites = [...currentStore.favorites]
        newFavorites.splice(index, 1)
        setStore ({
          ...currentStore,
          favorites: newFavorites
        })
      }
    },
  };
};

export default getState;
