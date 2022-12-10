import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import CardDetail from "../component/cardDetail.jsx";


export const PlanetDetail = () => {
    const { store, actions } = useContext(Context);
    const [data, setData] = useState({})
    const { planetid } = useParams();

    useEffect(() => {
        actions.getStarWarsDetail("planets", planetid)
            .then(resp => setData(resp))
    }, [])

    return (
        <div className="container">
            <h2 className="m-3">Planet {data.name}</h2>

            <CardDetail
                title={data.name}
                img={`https://starwars-visualguide.com/assets/img/planets/${planetid}.jpg`}
                body={
                    <ul className="list-group">
                        <li className="list-group-item"> diameter: {data.diameter}</li>
                        <li className="list-group-item"> rotation_period: {data.rotation_period}</li>
                        <li className="list-group-item"> orbital_period: {data.orbital_period}</li>
                        <li className="list-group-item"> gravity: {data.gravity}</li>
                        <li className="list-group-item"> population: {data.population}</li>
                        <li className="list-group-item"> climate: {data.climate}</li>
                        <li className="list-group-item"> terrain: {data.terrain}</li>
                        <li className="list-group-item"> surface_water: {data.surface_water}</li>
                        <li className="list-group-item"> created: {data.created}</li>
                        <li className="list-group-item"> edited: {data.edited}</li>
                        <li className="list-group-item"> name: {data.name}</li>
                        <li className="list-group-item"> url: {data.url}</li>
                    </ul>
                }
                type="planet"
            />
        </div>
    )
}