import React, {useEffect, useState, useContext} from "react";

import { Context } from "../store/appContext";


export const Species = () => {
    const { store, actions } = useContext(Context);
	useEffect(() => { }, [])

    return (
        <div className="container">
        <h1>Species</h1>
        <button className="btn btn-success" onClick={() => actions.getSpecies()}>
				Cargar Species
			</button>
			<ul>
				{store.species.map((species, index) => (
					<li key={index}>{species.name}</li>
				))}
			</ul>
       
            </div>
    )
}