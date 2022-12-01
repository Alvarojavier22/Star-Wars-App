import React, {useContext, useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";


export const Planets = props => {
    return (
        <div className="container">
        <h1>Planets</h1>
        <Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
        </div>
    )
}