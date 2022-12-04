import React, {useContext, useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const StarshipDetail = () => {
    const { store, actions } = useContext(Context);
    const {starshipid} = useParams();
    return (
        <div className="container">
        <h2 className="m-3">Starship #{starshipid}</h2>
        </div>
    )
}