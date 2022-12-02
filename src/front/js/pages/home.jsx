import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link, useParams } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<div className="text-center mt-5">
			<h1>STAR WARS</h1>
			
			
		</div>
	);
};
