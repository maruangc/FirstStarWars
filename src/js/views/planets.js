import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { object } from "prop-types";

export const Planets = () => {
  const params = useParams();
  const { store, actions } = useContext(Context);
  const [array, setArray] = useState(store.planets[store.idxPlanets][1]);

  useEffect(() => {
    if (store.swOrigin == 0) {
      actions.planetValue(array[params.index]);
    } else {
      actions.planetValue(store.article);
    }
  }, [store.article]);

  return (
    <div className="d-flex container justify-content-center">
      {Object.keys(store.planet).length > 0 ? (
        <>
          <div className="d-flex">
            <div className="card flex-column bg-black">
              <img
                className="card-img-top imgViewPlanets"
                src={
                  "https:/starwars-visualguide.com/assets/img/planets/" +
                  store.planet.uid +
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
                      actions.addToFavorites(store.planet.character.name)
                    }
                  >
                    <FontAwesomeIcon icon={faHeart} />
                  </button>
                </div>
                <div>
                  <h5 className="text-light card-title">
                    {store.planet.character.name}
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <ul className="list-group list-group-flush bg-black">
              <li className="text-light list-group-item bg-dark">
                Diameter : {store.planet.character.diameter}
              </li>
              <li className="text-light list-group-item bg-dark">
                Gravity : {store.planet.character.gravity}
              </li>
              <li className="text-light list-group-item bg-dark">
                Orbital period : {store.planet.character.orbital_period}
              </li>
              <li className="text-light list-group-item bg-dark">
                Rotation period: {store.planet.character.rotation_period}
              </li>
              <li className="text-light list-group-item bg-dark">
                Climate: {store.planet.character.climate}
              </li>
              <li className="text-light list-group-item bg-dark">
                Terrain: {store.planet.character.terrain}
              </li>
              <li className="text-light list-group-item bg-dark">
                Surface water: {store.planet.character.surface_water}
              </li>
              <li className="text-light list-group-item bg-dark">
                Population: {store.planet.character.population}
              </li>
            </ul>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
