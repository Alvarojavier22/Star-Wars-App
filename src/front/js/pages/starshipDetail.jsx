import React, {useContext, useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const StarshipDetail = () => {
    const { store, actions } = useContext(Context);
    const {starshipid} = useParams();
    return (
        <div className="container text-center mt-5">
        <h1>Starship</h1>
        <h2>Starship #{starshipid}</h2>
        </div>
    )
}