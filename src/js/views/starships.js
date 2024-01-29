import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { object } from "prop-types";

export const StarShips = () => {
  const params = useParams();
  const { store, actions } = useContext(Context);
  const [array, setArray] = useState(store.starShips[store.idxShips][1]);
  const [pilots, setPilots] = useState([]);

  useEffect(() => {
    actions.shipValue(array[params.index]);
    const thePilots = store.ship.character.pilots.map((item) => {
      return item;
    });
    actions.getPilots(thePilots);
  }, []);

  useEffect(() => {
    setPilots(store.pilots);
  }, [store.pilots]);

  return (
    <div className="d-flex container flex-column justify-content-center">
      <div className="d-flex">
        {Object.keys(store.ship).length > 0 ? (
          <>
            <div className="d-flex">
              <div className="card flex-column bg-black">
                <img
                  className="card-img-top imgViewPlanets"
                  src={
                    "https:/starwars-visualguide.com/assets/img/starships/" +
                    store.ship.uid +
                    ".jpg"
                  }
                  onError={({ currentTarget }) => {
                    currentTarget.src =
                      "https://pablogonzalezblasco.com.br/wp-content/uploads/sites/5/2020/03/star-wars-1-capa-862x582.jpg";
                  }}
                ></img>
                <div className="card-body d-flex justify-content-start">
                  <div>
                    <Link to="/">
                      <button className="boton">
                        <FontAwesomeIcon
                          icon={faCircleArrowLeft}
                        ></FontAwesomeIcon>{" "}
                      </button>
                    </Link>
                  </div>
                  <div>
                    <button
                      className="boton"
                      onClick={() =>
                        actions.addToFavorites(store.ship.character.name)
                      }
                    >
                      <FontAwesomeIcon icon={faHeart} />
                    </button>
                  </div>
                  <div>
                    <h5 className="text-light card-title">
                      {store.ship.character.name}
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <ul className="list-group list-group-flush bg-black">
                <li className="text-light list-group-item bg-dark">
                  Model : {store.ship.character.model}
                </li>
                <li className="text-light list-group-item bg-dark">
                  Class : {store.ship.character.starship_class}
                </li>
                <li className="text-light list-group-item bg-dark">
                  Manufacturer : {store.ship.character.manufacturer}
                </li>
                <li className="text-light list-group-item bg-dark">
                  Cost in credits: {store.ship.character.cost_in_credits}
                </li>
                <li className="text-light list-group-item bg-dark">
                  Length: {store.ship.character.length}
                </li>
                <li className="text-light list-group-item bg-dark">
                  Crew: {store.ship.character.crew}
                </li>
                <li className="text-light list-group-item bg-dark">
                  Passengers: {store.ship.character.passengers}
                </li>
                <li className="text-light list-group-item bg-dark">
                  Max atmosphering speed:{" "}
                  {store.ship.character.max_atmosphering_speed}
                </li>
                <li className="text-light list-group-item bg-dark">
                  Hyperdrive rating: {store.ship.character.hyperdrive_rating}
                </li>
                <li className="text-light list-group-item bg-dark">
                  MGLT: {store.ship.character.MGLT}
                </li>
                <li className="text-light list-group-item bg-dark">
                  Cargo capacity: {store.ship.character.cargo_capacity}
                </li>
                <li className="text-light list-group-item bg-dark">
                  Consumables: {store.ship.character.consumables}
                </li>
              </ul>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
      <div className="ms-2 mt-2">
        {store.whileArticle == 0 ? (
          <div>
            {pilots.length > 0 ? (
              <>
                <h5 className="text-light">Pilots:</h5>;
              </>
            ) : (
              <></>
            )}
            {pilots.length > 0 &&
              pilots.map((item, index) => {
                return (
                  <div key={index}>
                    <ul className="">
                      <li className="text-light">{item.character.name}</li>
                    </ul>
                  </div>
                );
              })}
          </div>
        ) : (
          <>
            <button className="btn btn-dark me-5" type="button" disabled>
              <span
                className="spinner-grow"
                role="status"
                aria-hidden="true"
              ></span>
            </button>
          </>
        )}
      </div>
    </div>
  );
};
