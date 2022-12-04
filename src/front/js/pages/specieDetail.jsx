import React, {useContext, useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const SpecieDetail = () => {
    const { store, actions } = useContext(Context);
    const {specieid} = useParams();
    return (
        <div className="container">
        <h2 className="m-3">Specie #{specieid}</h2>
        </div>
    )
}