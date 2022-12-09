import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import CardList from "../component/cardList.jsx";
import Pagination from "../component/pagination.jsx";
import { useSearchParams } from "react-router-dom";

export const People = (props) => {
	const { store, actions } = useContext(Context);
	const [searchParams, setSearchParams] = useSearchParams();
	const [pages, setPages] = useState(0)
	const [records, setRecords] = useState(0)

	useEffect(() => {
		actions.getStarWars("people").then((resp) => {
			if (resp) {
				setPages(resp.pages)
				setRecords(resp.records)
			}
		})
		console.log(searchParams)
	}, []);

	useEffect(() => {
		actions.getStarWars("people", { page: searchParams.get("page") }).then((resp) => {
			if (resp) {
				setPages(resp.pages)
				setRecords(resp.records)
			}
		})
	}, [searchParams.get("page")]);

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

			</div>
			<div className="row">
				<div className="col">
					<Pagination
						pages={pages}
						currentPage={searchParams.get("page") || "1"}
						type={"people"}
					/>
				</div>
			</div>
		</div>

	);
};

