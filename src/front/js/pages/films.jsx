import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const Films = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => { }, [])

	return (
		<div className="container">
			<h1>Films</h1>
			<button className="btn btn-success" onClick={() => actions.getFilms()}>
				Cargar Peliculas
			</button>
			<ul>
				{store.films.map((film, index) => (
					<li key={index}>{film.name}</li>
				))}
			</ul>

		</div>
	);
};
