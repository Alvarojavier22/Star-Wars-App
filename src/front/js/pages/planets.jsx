import React, {useContext, useState, useEffect} from "react";
import CardList from "../component/cardList.jsx"
import { Context } from "../store/appContext";


export const Planets = () => {
    const {store, actions } = useContext(Context)
    useEffect (() => { actions.getStarWars("planets") }, [])

    return (
        <div className="container">
        <h1>Planets</h1>
        <div className="container">
				<div className="row">
					{store.planets.map((planet, index)=> (
						<div key={planet.uid} className="col col-md-4">
							<CardList
								id={planet.uid}
								type="planeta"
								title={planet.name}
								text={planet.description}
								img={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`}
							/>
						</div>
					))}
				</div>
			</div>
        
        </div>
    )
}