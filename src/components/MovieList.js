import React from "react"

const MovieList = (props) => {


    return (
        <div className="row">
            {props.movies.map((movie) => (
                <div className="col-lg-4">
                    <div key={movie.id} className="card mb-4 shadow-lg border border-dark">
                        <img src={movie.imageURL} className="card-img-top" alt="Sample Movie" />
                        <div className="card-body">
                            <h5 className="card-title">{movie.name}</h5>
                            <p className="card-text">{movie.overview}</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <button type="button" onClick={() => {props.deleteMovie(movie)}} className="btn btn-md btn-outline-danger">Delete</button>
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