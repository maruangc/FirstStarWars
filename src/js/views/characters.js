import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Planets } from "./planets";

export const Characters = () => {
  const params = useParams();
  const { store, actions } = useContext(Context);
  const array = store.peoples[store.idxPeoples][1];
  const element = array[params.index];

  useEffect(() => {
    actions.originValue(1);
    actions.getArticle(element.character.homeworld);
  }, []);

  return (
    <div className="d-flex row container mx-auto">
      <div className="col-12 col-lg-6">
        <div className="d-flex">
          <div className="card bg-black viewCharacter">
            <img
              className="card-img-top"
              src={
                "https://starwars-visualguide.com/assets/img/characters/" +
                element.uid +
                ".jpg"
              }
              onError={({ currentTarget }) => {
                currentTarget.src =
                  "https://pablogonzalezblasco.com.br/wp-content/uploads/sites/5/2020/03/star-wars-1-capa-862x582.jpg";
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
              <h5 className="text-light card-title">
                {element.character.name}
              </h5>
            </div>
          </div>
          <div className="">
            <ul className="list-group list-group-flush bg-black">
              <li className="text-light list-group-item bg-dark">
                Gender: {element.character.gender}
              </li>
              <li className="text-light list-group-item bg-dark">
                Birth year: {element.character.birth_year}
              </li>
              <li className="text-light list-group-item bg-dark">
                Eye Color: {element.character.eye_color}
              </li>
              <li className="text-light list-group-item bg-dark">
                Hair color: {element.character.hair_color}
              </li>
              <li className="text-light list-group-item bg-dark">
                Skin Color: {element.character.skin_color}
              </li>
              <li className="text-light list-group-item bg-dark">
                Height: {element.character.height}
              </li>
              <li className="text-light list-group-item bg-dark">
                Mass: {element.character.mass}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column col-12 col-lg-6">
        <div className="p-3">
          <h5 className="text-light">Home World</h5>
        </div>
        <div>
          {store.whileArticle == 0 ? (
            <Planets />
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
    </div>
  );
};
