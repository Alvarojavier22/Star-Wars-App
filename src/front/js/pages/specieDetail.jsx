import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import CardDetail from "../component/cardDetail.jsx";


export const SpecieDetail = () => {
    const { store, actions } = useContext(Context);
    const [data, setData] = useState({})
    const { specieid } = useParams();

    useEffect(() => {
        actions.getStarWarsDetail("species", specieid).then(resp => setData(resp))
    }, [])

    return (
        <div className="container">
            <h2 className="m-3">Specie {data.name}</h2>

            <CardDetail
                title={data.name}
                img={`https://starwars-visualguide.com/assets/img/planets/${specieid}.jpg`}
                body={
                    <ul className="list-group">
                        <li className="list-group-item"> Classification: {data.classification}</li> 
                        <li className="list-group-item"> Designation: {data.designation}</li> 
                        <li className="list-group-item"> Average Height: {data.average_height}</li> 
                        <li className="list-group-item"> Average Lifespan: {data.average_lifespan}</li> 
                        <li className="list-group-item"> Hair Colors: {data.hair_colors}</li> 
                        <li className="list-group-item"> Skin Colors: {data.skin_colors}</li> 
                        <li className="list-group-item"> Eye Colors: {data.eye_colors}</li> 
                        <li className="list-group-item"> Homeworld: {data.homeworld}</li> 
                        <li className="list-group-item"> Language: {data.language}</li> 
                        <li className="list-group-item"> People: {data.people}</li> 
                        <li className="list-group-item"> Created: {data.created}</li> 
                        <li className="list-group-item"> Edited: {data.edited}</li> 
                        <li className="list-group-item"> Name: {data.name}</li> 
                        <li className="list-group-item"> URL: {data.url}</li>
                    </ul>
                }
                type="species"
            />
        </div>
    )
}