import React, { useEffect, useContext } from "react";
import CardList from "../component/cardList.jsx";
import { Context } from "../store/appContext";


export const Species = () => {
    const { store, actions } = useContext(Context);
    useEffect(() => { actions.getStarWars("species") }, [])

    return (
        <div className="container">
            <h1>Species</h1>

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

        </div>
    )
}