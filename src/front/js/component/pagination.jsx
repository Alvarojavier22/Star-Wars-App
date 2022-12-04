import React from "react";
import { Link } from "react-router-dom";

const Pagination = (props) => {

    return (
        <nav>
            <ul className="pagination bg-transparent m-3">
                <li className={"page-item" + props.currentPage == 1? " disabled" : ""}>
                    <a className="page-link">Previous</a>
                </li>
                {Array(props.pages).fill("").map((val, page) => (
                    <li key={page} 
                    className= {`page-item${props.currentPage == page + 1 ? " active" : ""}`}>
                    <Link className="page-link" 
                    to={`/${props.type}?page=${page +1}`}>
                        {page +1}
                    </Link>
                </li>
                ))}
                <li className={"page-item" + props.currentPage == props.pages? " disabled" : ""}>
                    <a className="page-link" href="#">Next</a>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination