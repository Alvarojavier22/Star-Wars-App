import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const People = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<div className="container">
			<h1>People</h1>
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
		
	);
};

