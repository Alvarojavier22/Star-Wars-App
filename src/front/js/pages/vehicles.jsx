import React, {useState, useEffect, useContext} from "react";

import { Context } from "../store/appContext";


export const Vehicles = () => {
    const {store, actions } = useContext(Context)
    useEffect (() => { }, [])

    return (
        <div className="container">
        <h1>Vehicles</h1>

        <button className="btn btn-success" onClick={() => actions.getVehicles()}>
            Cargar Planetas
        </button>
        <ul>
            {store.vehicles.map((vehicle, index) =>(
                <li key={index}>{vehicle.name}</li>
            ))}
        </ul>
        
            </div>
    )
}