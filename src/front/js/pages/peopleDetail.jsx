import React, {useContext, useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const PeopleDetail = () => {
    const { store, actions } = useContext(Context);
    const {peopleid} = useParams();
    return (
        <div className="container">
        <h2 className="m-3">People #{peopleid}</h2>
        
        </div>
    )
}