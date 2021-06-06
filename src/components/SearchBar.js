import React from "react"

class SearhBar extends React.Component {

    render() {
        return (
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="form-row mb-5 mt-3">
                    <div className="col-12">
                        <input onChange={this.props.searchMovie} type="text" className="form-control" placeholder="Search a movie..." />
                    </div>
                </div>
            </form>
        )
    }
}

export default SearhBar