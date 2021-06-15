import React from "react"
import { Link } from "react-router-dom"

const MovieList = (props) => {

    const truncateOverview = (string, maxLength) => {
        if(!string) {
            return null
        } 
        else if (string.lentgh <= maxLength) {
           return string 
        } 
        return `${string.substring(0, maxLength)} ...`
    }

    return (
        <div className="row">
            {props.movies.map((movie) => (
                <div key={movie.id} className="col-lg-4">
                    <div className="card mb-4 shadow-lg border border-dark">
                        <img src={movie.imageURL} className="card-img-top" alt="Sample Movie" />
                        <div className="card-body">
                            <h5 className="card-title">{movie.name}</h5>
                            <p className="card-text">{truncateOverview(movie.overview, 110)}</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <button type="button" onClick={(event) => {props.deleteMovie(movie)}} className="btn btn-md btn-outline-danger">Delete</button>
                                <Link type="button" className="btn btn-md btn-outline-secondary" to={`edit/${movie.id}`}>Edit Movie</Link>
                                <h2><span className="badge bg-info">{movie.rating}</span></h2>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            
        </div>
    )
}

export default MovieList