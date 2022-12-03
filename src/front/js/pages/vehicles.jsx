import React, {useState, useEffect, useContext} from "react";

import { Context } from "../store/appContext";


export const Vehicles = () => {
    const {store, actions } = useContext(Context)
    useEffect (() => { actions.getStarWars("vehicles") }, [])

    return (
        <div className="container">
        <h1>Vehicles</h1>

        <ul>
            {store.vehicles.map((vehicle, index) =>(
                <li key={index}>{vehicle.name}</li>
            ))}
        </ul>
        
            </div>
    )
}