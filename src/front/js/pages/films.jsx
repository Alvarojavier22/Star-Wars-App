import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const Films = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => { actions.getStarWars("films") }, [])

	return (
		<div className="container">
			<h1>Films</h1>
			
			<ul>
				{store.films.map((film, index) => (
					<li key={index}>{film.properties.title}</li>
				))}
			</ul>

		</div>
	);
};
