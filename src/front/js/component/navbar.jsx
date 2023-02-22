import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import {Context} from "../store/appContext"
import starImage from "../../img/starwars.png";

export const Navbar = () => {
  const {actions, store}=useContext(Context)
  const [links, setLinks] = useState([
    { text: "Planets", link: "/planets" },
    { text: "Films", link: "/films" },
    { text: "People", link: "/people" },
    { text: "Species", link: "/species" },
    { text: "Starships", link: "/starships" },
    { text: "Vehicles", link: "/vehicles" }
  ])


  return (
    <nav className="navbar navbar-expand-md navbar-light bg-secondary">
      <div className="container-fluid">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">
            <img src={starImage} width="80" height="50" /></span>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            {
              links.map((link, index) => (
                <li key={index} className="nav-item">
                  <Link className="nav-link" to={link.link}>{link.text}</Link>
                </li>
              ))
            }
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Favorites {store.favorites.length}
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown" style={{ color: "green", backgroundColor: "black" }}>
                {store.favorites.map(favorite => (
                  <div className="d-flex">	<li className="dropdown-item" style={{ color: "green", backgroundColor: "black" }} key={favorite.index}>{favorite.name}</li>
                    <button className="buttfav" onClick={() => actions.removeFavorites(favorite.index)}>Eliminar</button></div>
                ))}

              </ul>
            </li>

          </ul>
        </div>
      </div>
    </nav>

  );
};
