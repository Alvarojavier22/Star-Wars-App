import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const Films = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => { actions.getFilms() }, [])

	return (
		<div className="container">
			<h1>Films</h1>
			
			<ul>
				{store.films.map((film, index) => (
					<li key={index}>{film.title}</li>
				))}
			</ul>

		</div>
	);
};
