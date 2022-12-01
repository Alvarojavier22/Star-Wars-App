import React, {useState, useEffect, useContext} from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";


export const Vehicles = props => {
    return (
        <div className="container">
        <h1>Vehicles</h1>
        <Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
            </div>
    )
}