import React from 'react'
import { Link } from 'react-router-dom'

const CardList = (props) => {
    return (
        <div className="card mt-4 bg-secondary">
            <img src={props.img} className="card-img-top" alt={props.type.toUpperCase() + " " + props.title}/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
                <Link to ={`/${props.type}/${props.id}`} className="btn btn-secondary">
                    More Details
                    </Link>
            </div>
        </div>
    )
}

export default CardList;