import React, {useContext, useState, useEffect} from "react";

import { Context } from "../store/appContext";


export const Planets = () => {
    const {store, actions } = useContext(Context)
    useEffect (() => { }, [])

    return (
        <div className="container">
        <h1>Planets</h1>
        <button className="btn btn-success" onClick={() => actions.getPlanets()}>
            Cargar Planetas
        </button>
        <ul>
            {store.planets.map((planet, index) =>(
                <li key={index}>{planet.name}</li>
            ))}
        </ul>
        </div>
    )
}