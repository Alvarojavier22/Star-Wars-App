import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link, useParams } from "react-router-dom";
import CardList from "../component/cardList.jsx";
export const Home = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const [pages, setPages] = useState(0)
	const [records, setRecords] = useState(0)

	useEffect(() => {
		actions.getStarWars("people").then((resp) => {
			if (resp) {
				setPages(resp.pages)
				setRecords(resp.records)
				}
				
		})
		actions.getStarWars("planets").then((resp) => {
			if (resp) {
				setPages(resp.pages)
				setRecords(resp.records)
				}
				
		})
		console.log(store.planets)
	}, [])

	return (
		<div className="text-center-mt-5">
			<h1 className="m-3">STAR WARS</h1>

			<h5>People</h5>

			<ul className="list-group-horizontal overflow-scroll d-flex"
				style={{ overflowY: "hidden !important" }}>
				{store.people.map((people, index) => (
					index < 5 ?
					<li key={people.uid} className="col col-md-4">
						<CardList
							id={people.uid}
							type="people"
							title={people.name}
							text={people.description}
							img={`https://starwars-visualguide.com/assets/img/characters/${people.uid}.jpg`}
						/>
					</li>
					: null
				))}
			</ul>


			<h5 className="mt-3">Planets</h5>

			<ul className="list-group-horizontal overflow-scroll d-flex">
				{store.planets.map((planet, index) => (
					index < 5 ?
					<li key={planet.uid} className="col col-md-4">
						<CardList
							id={planet.uid}
							type="planets"
							title={planet.name}
							text={planet.description}
							img={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`}
						/>
					</li>
					: null
				))}

			</ul>
		</div>

	);
};