import React, {useContext, useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const VehicleDetail = () => {
    const { store, actions } = useContext(Context);
    const {vehicleid} = useParams();
    return (
        <div className="container text-center mt-5">
        <h1>Vehicles</h1>
        <h2>Vehicle #{vehicleid}</h2>
        </div>
    )
}