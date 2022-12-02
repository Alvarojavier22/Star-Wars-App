import React, {useContext, useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const FilmDetail = () => {
    const { store, actions } = useContext(Context);
    const {filmid} = useParams();
    return (
        <div className="container text-center mt-5">
        <h1>Films</h1>
        <h2>Film #{filmid}</h2>
        </div>
    )
}