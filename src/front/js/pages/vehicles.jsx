import React, { useEffect, useContext } from "react";
import CardList from "../component/cardList.jsx";
import { Context } from "../store/appContext";


export const Vehicles = () => {
    const { store, actions } = useContext(Context)
    useEffect(() => { actions.getStarWars("vehicles") }, [])

    return (
        <div className="container">
            <h1 className="m-3">Vehicles</h1>

            <div className="row">
                {store.vehicles.map((vehicles, index) => (
                    <div key={vehicles.uid} className="col col-md-4">
                        <CardList
                            id={vehicles.uid}
                            type="vehicles"
                            title={vehicles.name}
                            text={vehicles.description}
                            img={`https://starwars-visualguide.com/assets/img/vehicles/${vehicles.uid}.jpg`}
                        />
                    </div>
                ))}
            </div>

        </div>
    )
}