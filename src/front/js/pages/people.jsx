import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";


export const People = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {

	}, [])

	return (
		<div className="container text-center mt-5">
			<h1>People</h1>
			<button className="btn btn-success" onClick={() => actions.getPeople()}>
				Cargar Personas
			</button>
			<ul>
				{store.people.map((people, index) => (
					<li key={index}>{people.name}</li>
				))}
			</ul>
		</div>

	);
};

