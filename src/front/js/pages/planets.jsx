import React, {useContext, useState, useEffect} from "react";

import { Context } from "../store/appContext";


export const Planets = () => {
    const {store, actions } = useContext(Context)
    useEffect (() => { actions.getStarWars("planets") }, [])

    return (
        <div className="container">
        <h1>Planets</h1>
        
        <ul>
            {store.planets.map((planet, index) =>(
                <li key={index}>{planet.name}</li>
            ))}
        </ul>
        </div>
    )
}