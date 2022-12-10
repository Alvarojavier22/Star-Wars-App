import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../store/appContext'

const CardList = (props) => {

    const { store, actions } = useContext(Context)

    function imgError(e) {
        console.error("Error " + e.target.src)
        e.target.src = "https://imgs.search.brave.com/73728rvIlnABGuQhgqG5T4zo1_N0OEaRdkCx8vEqsYY/rs:fit:641:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC40/dlR0ZS1mR094LUg1/Q2dxek9jN0lBQUFB/QSZwaWQ9QXBp"
    }
    function handleFavorites(data){
        let favoriteIndex = store.favorites.findIndex(fav => fav.link == data.link)
        actions.addFavorites(data);
    }

    return (
        <div className="card mt-4 bg-secondary">
            <img
                src={props.img}
                className="card-img-top"
                alt={props.type.toUpperCase() + " " + props.title}
                onError={imgError}
            />

            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
                <Link
                    to={`/${props.type}/${props.id}`}
                    className="btn btn-secondary">
                    More Details
                </Link>
                <button onClick={() => handleFavorites({
                    name: props.title,
                    link: `/${props.type}/${props.id}`,
                })}
                    className='btn-secondary'>
                    <i className="bi bi-star"></i>
                </button>
            </div>
        </div>
    )
}

export default CardList;