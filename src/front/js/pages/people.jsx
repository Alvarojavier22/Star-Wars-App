import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";


export const People = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => { actions.getPeople() }, [])

	return (
		<div className="container">
			<h1>People</h1>
			
			<ul>
				{store.people.map((people, index) => (
					<li key={index}>{people.name}</li>
				))}
			</ul>
		</div>

	);
};

