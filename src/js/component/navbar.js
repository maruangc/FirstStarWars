import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Dropdown from "react-bootstrap/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="bg-dark">
      <nav className="navbar navbar-dark mb-3">
        <Link to="/" className="subrayado">
          <span className="ms-5 text-light">Star Wars</span>
        </Link>
        <div className="ml-auto bg-dark">
          {store.peoples.length <= 0 ? (
            <button className="btn btn-dark me-5" type="button" disabled>
              <span
                className="spinner-grow"
                role="status"
                aria-hidden="true"
              ></span>
            </button>
          ) : (
            <Dropdown data-bs-theme="dark" className="me-5">
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                Favorites: {store.favorites.length + " "}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {store.favorites.length > 0 &&
                  store.favorites.map((item) => {
                    return (
                      <div key={item} className="d-flex mb-1">
                        <Dropdown.Item>{item}</Dropdown.Item>
                        <button
                          onClick={() => actions.removeFromFavorites(item)}
                          className="boton"
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </div>
                    );
                  })}
              </Dropdown.Menu>
            </Dropdown>
          )}
        </div>
      </nav>
    </div>
  );
};
