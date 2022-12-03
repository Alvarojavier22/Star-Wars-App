import React, { useState, useEffect, useContext } from "react";

import { Context } from "../store/appContext";


export const Starships = () => {
    const {store, actions } = useContext(Context)
    useEffect(() => { actions.getStarWars("starships") }, [])


    return (
        <div className="container">
            <h1>Starships</h1>

            <ul>
                {store.starships.map((starship, index) => (
                    <li key={index}>{starship.name}</li>
                ))}
            </ul>
        </div >
    )
}