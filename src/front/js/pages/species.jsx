import React, {useEffect, useState, useContext} from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";


export const Species = props => {
    return (
        <div className="container">
        <h1>Species</h1>
        <Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
            </div>
    )
}