import React from "react"
import serialize from "form-serialize"

class AddMovie extends React.Component {

    handleFormSubmit = e => {
        e.preventDefault()
        const newMovie = serialize(e.target, { hash: true });
        this.props.onAddMovie(newMovie)
    }

    render() {
        return (
            <div className="container">
            <form className="mt-5" onSubmit={this.handleFormSubmit}>
            <h2>Fill The Form To Add A Movie</h2>
                <div className="row form-row mt-5">
                    <div className="form-group col-md-10 mb-3">
                        <label htmlFor="inputName">Name</label>
                        <input  type="text" 
                                className="form-control" 
                                name="name"/>
                    </div>
                    <div className="form-group col-md-2 mb-3">
                        <label htmlFor="inputRating">Rating</label>
                        <input 
                                type="text" 
                                className="form-control" 
                                name="rating"/>
                    </div>
                </div>
                <div className="form-row mb-3">
                    <div className="form-group col-md-12">
                        <label htmlFor="inputImage">Image URL</label>
                        <input 
                                type="text" 
                                className="form-control" 
                                name="imageURL"/>
                    </div>
                </div>
                <div className="form-row mb-3">
                    <div className="form-group col-md-12">
                        <label htmlFor="overviewTextarea">Overview</label>
                        <textarea 
                                className="form-control" 
                                name="overview" rows="5"></textarea>
                    </div>
                </div>
                <div className="d-grid gap-2">
                    <input type="submit" className="btn btn-success btn-block" value="Add Movie" />
                </div>
            </form>
        </div>
        )
    }
}

export default AddMovie