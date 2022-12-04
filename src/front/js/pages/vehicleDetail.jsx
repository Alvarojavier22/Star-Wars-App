import React, {useContext, useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const VehicleDetail = () => {
    const { store, actions } = useContext(Context);
    const {vehicleid} = useParams();
    return (
        <div className="container">
        <h2 className="m-3">Vehicle #{vehicleid}</h2>
        </div>
    )
}