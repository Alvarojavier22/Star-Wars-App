import React, { useState, useEffect, useContext } from "react";
import propTypes from "prop-types";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

export const Films = props => {
	const { store, actions } = useContext(Context);
	const params = useParams()

	return (
		<div className="container">
			
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
