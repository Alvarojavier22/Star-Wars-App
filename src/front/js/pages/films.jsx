import React, { useState, useEffect, useContext } from "react";
import propTypes from "prop-types";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

export const Films = props => {
	const { store, actions } = useContext(Context);
	const params = useParams()

	return (
		<div className="container text-center mt-5">
			<h1>Films</h1>
			
		</div>
	);
};
