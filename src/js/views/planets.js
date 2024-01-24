import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";

export const Planets = () => {
  const params = useParams();
  const { store, actions } = useContext(Context);
  const array = store.planets[store.idxPlanets][1];
  const element = array[params.index];

  return (
    <div className="d-flex container justify-content-center">
      <div className="card w-40 h-60 bg-black">
        <img
          className="card-img-top"
          src={
            "https:/starwars-visualguide.com/assets/img/planets/" +
            element.uid +
            ".jpg"
          }
          onError={({ currentTarget }) => {
            currentTarget.src =
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsSVurYkmkVu0tGuwXevYebFUU-R16RJ1Lrp6MapsEDw&s";
          }}
        ></img>
        <div className="card-body d-flex">
          <Link to="/">
            <button className="boton">
              <FontAwesomeIcon icon={faCircleArrowLeft}></FontAwesomeIcon>{" "}
            </button>
          </Link>
          <button
            className="boton"
            onClick={() => actions.addToFavorites(element.character.name)}
          >
            <FontAwesomeIcon icon={faHeart} />
          </button>
          <h5 className="text-light card-title">{element.character.name}</h5>
        </div>
      </div>
      <div>
        <ul className="list-group list-group-flush bg-black">
          <li className="text-light list-group-item bg-dark">
            Diameter : {element.character.diameter}
          </li>
          <li className="text-light list-group-item bg-dark">
            Gravity : {element.character.gravity}
          </li>
          <li className="text-light list-group-item bg-dark">
            Orbital period : {element.character.orbital_period}
          </li>
          <li className="text-light list-group-item bg-dark">
            Rotation period: {element.character.rotation_period}
          </li>
          <li className="text-light list-group-item bg-dark">
            Climate: {element.character.climate}
          </li>
          <li className="text-light list-group-item bg-dark">
            Terrain: {element.character.terrain}
          </li>
          <li className="text-light list-group-item bg-dark">
            Surface water: {element.character.surface_water}
          </li>
          <li className="text-light list-group-item bg-dark">
            Population: {element.character.population}
          </li>
        </ul>
      </div>
    </div>
  );
};
