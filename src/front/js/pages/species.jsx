import React, {useEffect, useState, useContext} from "react";

import { Context } from "../store/appContext";


export const Species = () => {
    const { store, actions } = useContext(Context);
	useEffect(() => { actions.getSpecies() }, [])

    return (
        <div className="container">
        <h1>Species</h1>
        
			<ul>
				{store.species.map((species, index) => (
					<li key={index}>{species.name}</li>
				))}
			</ul>
       
            </div>
    )
}