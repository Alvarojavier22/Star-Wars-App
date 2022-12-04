import React, {useContext, useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const PlanetDetail = () => {
    const { store, actions } = useContext(Context);
    const {planetid} = useParams();
    return (
        <div className="container">
        <h2 className="m-3">Planet #{planetid}</h2>
        </div>
    )
}