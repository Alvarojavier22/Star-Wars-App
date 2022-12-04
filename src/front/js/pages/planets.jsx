import React, { useContext, useEffect } from "react";
import CardList from "../component/cardList.jsx"
import { Context } from "../store/appContext";
import Pagination from "../component/pagination.jsx";


export const Planets = (props) => {
	const { store, actions } = useContext(Context)
	useEffect(() => { actions.getStarWars("planets") }, [])

	return (
		<div className="container">
			<h1 className="m-3">Planets</h1>
			<div className="container">
				<div className="row">
					{store.planets.map((planet, index) => (
						<div key={planet.uid} className="col col-md-4">
							<CardList
								id={planet.uid}
								type="planeta"
								title={planet.name}
								text={planet.description}
								img={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`}
							/>
						</div>
					))}
				</div>
			</div>
			<div className="row">
				<div className="col">
					<Pagination
						pages={props.pages}
						currentPage={props.currentPage}
						type={"planets"}
					/>
				</div>
			</div>
		</div>
	)
}