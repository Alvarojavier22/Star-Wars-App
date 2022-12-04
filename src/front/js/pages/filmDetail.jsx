import React, {useContext, useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const FilmDetail = () => {
    const { store, actions } = useContext(Context);
    const {filmid} = useParams();
    return (
        <div className="container">
        <h2 className="m-3">Film #{filmid}</h2>
        </div>
    )
}