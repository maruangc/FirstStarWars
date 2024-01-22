import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CaruselPersonajes from "../component/carusel";

export const Home = () => {
  const { store, actions } = useContext(Context);

  const controlIndex = (controlType, wichItem) => {
    let idxTemp = 0;
    let arrayTemp = [];
    let urlDefault = "";
    if (wichItem == "Characters") {
      idxTemp = store.idxPeoples;
      arrayTemp = store.peoples;
      urlDefault = store.peopleUrl;
    }
    if (wichItem == "Planets") {
      idxTemp = store.idxPlanets;
      arrayTemp = store.planets;
      urlDefault = store.planetsUrl;
    }
    if (wichItem == "starShips") {
      idxTemp = store.idxShips;
      arrayTemp = store.starShips;
      urlDefault = store.starShipsUrl;
    }
    console.log(
      "Valores a procesar: ",
      idxTemp,
      arrayTemp,
      urlDefault,
      wichItem
    );
    let urlToSend = "";
    if (controlType == 0) {
      urlToSend = arrayTemp[idxTemp][0].previous
        ? arrayTemp[idxTemp][0].previous
        : urlDefault;
      idxTemp > 0 ? (idxTemp -= 1) : (idxTemp = 0);
    } else {
      urlToSend = arrayTemp[idxTemp][0].next
        ? arrayTemp[idxTemp][0].next
        : urlDefault;
      idxTemp = arrayTemp[idxTemp][0].next ? idxTemp + 1 : idxTemp;
    }
    console.log("Enviando", wichItem, idxTemp, urlToSend);
    if (wichItem == "Characters") {
      actions.getPeoples(idxTemp, urlToSend);
    }
    if (wichItem == "Planets") {
      actions.getPlanets(idxTemp, urlToSend);
    }
    if (wichItem == "starShips") {
      actions.getStarShips(idxTemp, urlToSend);
    }
  };

  return (
    <div className="container row justify-content-center mx-auto pt-5">
      <div className="col-12 col-lg-4">
        <CaruselPersonajes //----Personajes----
          elements={store.peoples}
          idx={store.idxPeoples}
          wichItem={"characters"}
        />
        <div className="d-flex justify-content-evenly gap-0 py-0">
          {store.swSpinnerCharacters == 0 ? (
            <>
              <button
                className="btn btn-dark btn-sm mb-3"
                onClick={() => controlIndex(0, "Characters")}
              >
                Previous
              </button>
              <button
                className="btn btn-dark btn-sm mb-3"
                onClick={() => controlIndex(1, "Characters")}
              >
                Next Characters
              </button>
            </>
          ) : (
            <div className="spinner-border text-secondary mb-3" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          )}
        </div>
      </div>
      <div className="col-12 col-lg-4">
        <CaruselPersonajes // -----Planets ------
          elements={store.planets}
          idx={store.idxPlanets}
          wichItem={"planets"}
        />
        <div className="d-flex justify-content-evenly gap-0 py-0">
          {store.swSpinnerPlanets == 0 ? (
            <>
              <button
                className="btn btn-dark btn-sm mb-3"
                onClick={() => controlIndex(0, "Planets")}
              >
                Previous
              </button>
              <button
                className="btn btn-dark btn-sm mb-3"
                onClick={() => controlIndex(1, "Planets")}
              >
                Next Planets
              </button>{" "}
            </>
          ) : (
            <div className="spinner-border text-secondary mb-3" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          )}
        </div>
      </div>
      <div className="col-12 col-lg-4">
        <CaruselPersonajes //----Ships----
          elements={store.starShips}
          idx={store.idxShips}
          wichItem={"starships"}
        />
        <div className="d-flex justify-content-evenly gap-0 py-0">
          {store.swSpinnerShips == 0 ? (
            <>
              <button
                className="btn btn-dark btn-sm mb-3"
                onClick={() => controlIndex(0, "starShips")}
              >
                Previous
              </button>
              <button
                className="btn btn-dark btn-sm mb-3"
                onClick={() => controlIndex(1, "starShips")}
              >
                Next Starships
              </button>
            </>
          ) : (
            <div className="spinner-border text-secondary mb-3" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
