import React, { useEffect, useContext } from "react";
import CardList from "../component/cardList.jsx";
import { Context } from "../store/appContext";
import Pagination from "../component/pagination.jsx";

export const Starships = (props) => {
    const { store, actions } = useContext(Context)
    useEffect(() => { actions.getStarWars("starships") }, [])


    return (
        <div className="container">
            <h1 className="m-3">Starships</h1>
            <div className="container">
                <div className="row">
                    {store.starships.map((starships, index) => (
                        <div key={starships.uid} className="col col-md-4">
                            <CardList
                                id={starships.uid}
                                type="starships"
                                title={starships.name}
                                text={starships.description}
                                img={`https://starwars-visualguide.com/assets/img/starships/${starships.uid}.jpg`}
                            />
                        </div>
                    ))}
                </div>
                <div className="row">
                    <div className="col">
                        <Pagination
                            pages={6}
                            currentPage={1}
                            type={"starships"}
                        />
                    </div>
                </div>
            </div >
        </div>
    )
}