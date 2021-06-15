import React from "react"
import { Link } from "react-router-dom"

class SearhBar extends React.Component {

    render() {
        return (
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="row form-row mb-5 mt-3">
                    <div className="col-lg-10">
                        <input onChange={this.props.searchMovie} type="search" className="form-control" placeholder="Search a movie..." />
                    </div>
                    <div className="col-lg-2">
                        <Link 
                            to="/add"
                            type="button"
                            className="btn btn-md btn-success"
                            style={{ float: "right" }}
                        >
                            Add Movie
                        </Link>
                    </div>
                </div>
            </form>
        )
    }
}

export default SearhBar