import React, {useContext, useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const PeopleDetail = () => {
    const { store, actions } = useContext(Context);
    const {peopleid} = useParams();
    return (
        <div className="container text-center mt-5">
        <h1>People</h1>
        <h2>People #{peopleid}</h2>
        </div>
    )
}