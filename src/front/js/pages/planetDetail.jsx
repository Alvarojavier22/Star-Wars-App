import React, {useContext, useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const PlanetDetail = () => {
    const { store, actions } = useContext(Context);
    const {planetid} = useParams();
    return (
        <div className="container text-center mt-5">
        <h1>Planets</h1>
        <h2>Planet #{planetid}</h2>
        </div>
    )
}