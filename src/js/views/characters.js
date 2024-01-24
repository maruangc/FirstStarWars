import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";

export const Characters = () => {
  const params = useParams();
  const { store, actions } = useContext(Context);
  const array = store.peoples[store.idxPeoples][1];
  const element = array[params.index];

  useEffect(() => {
    actions.getArticle(element.character.homeworld);
  }, []);

  console.log("homeworld: ", store.article);

  return (
    <div className="d-flex container justify-content-center">
      <div className="card w-40 h-60 bg-black">
        <img
          className="card-img-top"
          src={
            "https:/starwars-visualguide.com/assets/img/characters/" +
            element.uid +
            ".jpg"
          }
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
            Gender : {element.character.gender}
          </li>
          <li className="text-light list-group-item bg-dark">
            Birth year: {element.character.birth_year}
          </li>
          <li className="text-light list-group-item bg-dark">
            Eye Color : {element.character.eye_color}
          </li>
          <li className="text-light list-group-item bg-dark">
            Hair color: {element.character.hair_color}
          </li>
          <li className="text-light list-group-item bg-dark">
            Skin Color: {element.character.skin_color}
          </li>
          <li className="text-light list-group-item bg-dark">
            Height : {element.character.height}
          </li>
          <li className="text-light list-group-item bg-dark">
            Mass : {element.character.mass}
          </li>
        </ul>
      </div>
    </div>
  );
};
