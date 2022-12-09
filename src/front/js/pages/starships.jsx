import React, { useEffect, useContext, useState } from "react";
import CardList from "../component/cardList.jsx";
import { Context } from "../store/appContext";
import Pagination from "../component/pagination.jsx";
import { useSearchParams } from "react-router-dom";

export const Starships = (props) => {
    const { store, actions } = useContext(Context)
    const [searchParams, setSearchParams] = useSearchParams();
	const [pages, setPages] = useState(0)
	const [records, setRecords] = useState(0)

    useEffect(() => {
		actions.getStarWars("starships").then((resp) => {
			if (resp) {
				setPages(resp.pages)
				setRecords(resp.records)
			}
		})
		console.log(searchParams)
	}, []);

	useEffect(() => {
		actions.getStarWars("starships", { page: searchParams.get("page") }).then((resp) => {
			if (resp) {
				setPages(resp.pages)
				setRecords(resp.records)
			}
		})
	}, [searchParams.get("page")]);



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
                            pages={pages}
                            currentPage={searchParams.get("page") || "1"}
                            type={"starships"}
                        />
                    </div>
                </div>
            </div >
        </div>
    )
}