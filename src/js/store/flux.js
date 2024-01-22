const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      peopleUrl: "https://www.swapi.tech/api/people/",
      planetsUrl: "https://www.swapi.tech/api/planets/",
      starShipsUrl: "https://www.swapi.tech/api/starships/",
      peoples: [],
      planets: [],
      starShips: [],
      idxPeoples: 0,
      idxPlanets: 0,
      idxShips: 0,
      swSpinnerCharacters: 0,
      swSpinnerPlanets: 0,
      swSpinnerShips: 0,
      favorites: [],
    },
    actions: {
      getPeoples: async (i, url) => {
        //---------- PEOPLES -------------//
        const store = getStore();
        if (store.peoples[i]) {
          setStore({ idxPeoples: i });
          console.log("-Peoples previously loaded, index: ", i);
          return;
        }
        setStore({ swSpinnerCharacters: 1 });
        console.log("///Loadind peoples ...");
        const response = await fetch(url);
        const data = await response.json();
        let peopleArray =
          store.peoples.length > 0 ? [...store.peoples, []] : [[]];
        peopleArray[i][0] = {
          previous: data.previous,
          next: data.next,
        };
        peopleArray[i][1] = [];
        for (let item of data.results) {
          const itemResponse = await fetch(item.url);
          const itemData = await itemResponse.json();
          peopleArray[i][1].push({
            character: itemData.result.properties,
            uid: itemData.result.uid,
          });
        }
        setStore({ peoples: peopleArray });
        setStore({ idxPeoples: i });
        console.log("///Done people page loaded: ", store.peoples);
        setStore({ swSpinnerCharacters: 0 });
      },
      getPlanets: async (i, url) => {
        //------ PLANETS ------------//
        const store = getStore();
        if (store.planets[i]) {
          setStore({ idxPlanets: i });
          console.log("-Planets previously loaded, index: ", i);
          return;
        }
        setStore({ swSpinnerPlanets: 1 });
        console.log("///Loadind planets ...");
        const response = await fetch(url);
        const data = await response.json();
        let arrayTemp =
          store.planets.length > 0 ? [...store.planets, []] : [[]];
        arrayTemp[i][0] = {
          previous: data.previous,
          next: data.next,
        };
        arrayTemp[i][1] = [];
        for (let item of data.results) {
          const itemResponse = await fetch(item.url);
          const itemData = await itemResponse.json();
          arrayTemp[i][1].push({
            character: itemData.result.properties,
            uid: itemData.result.uid,
          });
        }
        setStore({ planets: arrayTemp });
        setStore({ idxPlanets: i });
        console.log("///Done planets page loaded: ", store.planets);
        setStore({ swSpinnerPlanets: 0 });
      },
      getStarShips: async (i, url) => {
        //------ STARSHIPS ------------//
        const store = getStore();
        if (store.starShips[i]) {
          setStore({ idxShips: i });
          console.log("-StarShips previously loaded, index: ", i);
          return;
        }
        setStore({ swSpinnerShips: 1 });
        console.log("///Loadind StarShips ...");
        const response = await fetch(url);
        const data = await response.json();
        let arrayTemp =
          store.starShips.length > 0 ? [...store.starShips, []] : [[]];
        arrayTemp[i][0] = {
          previous: data.previous,
          next: data.next,
        };
        arrayTemp[i][1] = [];
        for (let item of data.results) {
          const itemResponse = await fetch(item.url);
          const itemData = await itemResponse.json();
          arrayTemp[i][1].push({
            character: itemData.result.properties,
            uid: itemData.result.uid,
          });
        }
        setStore({ starShips: arrayTemp });
        setStore({ idxShips: i });
        console.log("///Done StarShips page loaded: ", store.starShips);
        setStore({ swSpinnerShips: 0 });
      },
      addToFavorites: (e) => {
        const store = getStore();
        if (store.favorites.find((item) => item === e)) {
          return;
        }
        const a = [...store.favorites, e];
        setStore({ favorites: a });
      },
      removeFromFavorites: (e) => {
        const store = getStore();
        const a = store.favorites.filter((item) => item != e);
        setStore({ favorites: a });
      },
    },
  };
};

export default getState;
