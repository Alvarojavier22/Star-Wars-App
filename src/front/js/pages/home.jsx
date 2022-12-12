import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link, useParams } from "react-router-dom";
import CardList from "../component/cardList.jsx";
export const Home = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	
	useEffect(() => { actions.getStarWars() }, [])
	return (
		<div className="container">
			<h1 className="m-3">STAR WARS</h1>
			<div className="container">
				<div className="row">
					
			</div>
			</div>
		</div>
	);
};