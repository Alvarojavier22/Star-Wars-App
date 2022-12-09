import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link, useParams } from "react-router-dom";
import CardList from "../component/cardList.jsx";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const [links, setLinks] = useState([
		{ text: "Planets", link: "/planets" },
		{ text: "Films", link: "/films" },
		{ text: "People", link: "/people" },
		{ text: "Species", link: "/species" },
		{ text: "Starships", link: "/starships" },
		{ text: "Vehicles", link: "/vehicles" }
	])

	useEffect(() => { actions.getStarWars() }, [])


	return (
		<div className="container">
			<h1 className="m-3">STAR WARS</h1>
			<div className="container">
				<div className="row">
					<div className="card">
						<ul>
							{
								links.map((link, index) => (
									<li key={index} className="nav-item">
										<Link className="nav-link" to={link.link}>{link.text}</Link>
									</li>
								))
							}
						</ul>

					</div>
				</div>
			</div>
		</div>
	);
};
