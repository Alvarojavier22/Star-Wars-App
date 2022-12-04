import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import CardList from "../component/cardList.jsx";
import Pagination from "../component/pagination.jsx";

export const People = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => { actions.getStarWars("people") }, [])

	return (
		<div className="container">
			<h1 className="m-3">People</h1>

			<div className="container">
				<div className="row">
					{store.people.map((people, index) => (
						<div key={people.uid} className="col col-md-4">
							<CardList
								id={people.uid}
								type="people"
								title={people.name}
								text={people.description}
								img={`https://starwars-visualguide.com/assets/img/characters/${people.uid}.jpg`}
							/>
						</div>
					))}
				</div>
				<div className="row">
					<div className="col">
						<Pagination
							pages={6}
							currentPage={1}
							type={"people"}
						/>
					</div>
				</div>
			</div>
		</div>

	);
};

