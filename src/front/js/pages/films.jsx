import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import CardList from "../component/card.jsx"

export const Films = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => { actions.getStarWars("films") }, [])

	return (
		<div className="container">
			<h1>Films</h1>
			<div className="container">
				<div className="">
					<div className="col">
					{store.films.map((film, index) => (
						<CardList
						key = {film.id}
						id = {film.uid}
						type = "films"
						title = {film.properties.title}
						text = {film.opening_crawl}
						img = {`https://starwars-visualguide.com/assets/img/films/${film.uid}`}
						/>
				))}
					</div>
				</div>
			</div>
			
		</div>
	);
};
