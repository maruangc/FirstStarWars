import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import "../../styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Carousel from "react-bootstrap/Carousel";
import { useNavigate } from "react-router-dom";

function CaruselPersonajes({ elements, idx, wichItem }) {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  return (
    <Carousel fade className="carrusel mx-auto rounded-2">
      {elements.length > 0 &&
        elements[idx][1].map((item) => {
          return (
            <Carousel.Item className="carrusel rounded-2" key={item.uid}>
              <img
                className={`d-block rounded-2 ${
                  wichItem == "characters"
                    ? "imgCharacters"
                    : wichItem == "planets"
                    ? "imgPlanets"
                    : "imgStarShips"
                }`}
                src={
                  "https:/starwars-visualguide.com/assets/img/" +
                  wichItem +
                  "/" +
                  item.uid +
                  ".jpg"
                }
                // text={item.character.name}
              />
              <Carousel.Caption className="d-flex justify-content-evenly">
                <Link to={`/${wichItem}/${item.uid}`} className="subrayado">
                  <h5 className="text-light subrayado">
                    {item.character.name}
                  </h5>
                </Link>
                <button
                  onClick={() => actions.addToFavorites(item.character.name)}
                  className="boton"
                >
                  <FontAwesomeIcon icon={faHeart} />
                </button>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
    </Carousel>
  );
}

export default CaruselPersonajes;
