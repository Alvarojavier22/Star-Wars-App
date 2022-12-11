import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link, useParams } from "react-router-dom";
import CardList from "../component/cardList.jsx";

export const Home = () => {

	const [store, actions] = useContext(Context)

	return (
		<div className="container">
			<h1 className="m-3">STAR WARS</h1>
			<div className="container">
				<div className="row">
					<ul className="list-group-horizontal">
						<li className="list-group-item">
							<CardList
								id={1}
								type="planets"
								title="Dagoba"
								text="A Star Wars Planet"
								img={`https://starwars-visualguide.com/assets/img/planets/1.jpg`}
							/>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};
