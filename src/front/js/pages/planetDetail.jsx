import React, {useContext, useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import CardDetail from "../component/cardDetail.jsx";


export const PlanetDetail = () => {
    const { store, actions } = useContext(Context);
    const [data, setData] = useState({})
    const {planetid} = useParams();

    useEffect(() => {
        actions.getStarWarsDetail("planets", planetid).then(resp=>setData(resp))
    }, [])

    return (
        <div className="container">
        <h2 className="m-3">Planet #{planetid}</h2>

        <CardDetail 
        title= {data.name}
        img= {`https://starwars-visualguide.com/assets/img/planets/${planetid}.jpg`}
        body= {
            <div></div>
        }
        type= "planet"
        />
        </div>
    )
}