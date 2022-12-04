import React, { useEffect, useContext } from "react";
import CardList from "../component/cardList.jsx";
import { Context } from "../store/appContext";
import Pagination from "../component/pagination.jsx";


export const Species = (props) => {
    const { store, actions } = useContext(Context);
    useEffect(() => { actions.getStarWars("species") }, [])

    return (
        <div className="container">
            <h1 className="m-3">Species</h1>
        <div className="container">
            <div className="row">
                {store.species.map((species, index) => (
                    <div key={species.uid} className="col col-md-4">
                        <CardList
                            id={species.uid}
                            type="species"
                            title={species.name}
                            text={species.description}
                            img={`https://starwars-visualguide.com/assets/img/species/${species.uid}.jpg`}
                        />
                    </div>
                ))}
            
            </div>
            <div className="row">
				<div className="col">
					<Pagination
					pages={6}
					currentPage= {1}
					type= {"species"}
					/>
				</div>
			</div>
            </div>
        </div>
    )
}