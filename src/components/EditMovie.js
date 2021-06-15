import axios from "axios"
import React from "react"

class EditMovie extends React.Component {

    state = {
        name: "",
        rating: "",
        overview: "",
        imageURL: ""
    }
    
    async componentDidMount() {
        const id = this.props.match.params.id
        const response = await axios.get(`http://localhost:3002/movies/${id}`)
        const movie = response.data
        this.setState({
            name: movie.name,
            rating: movie.rating,
            overview: movie.overview,
            imageURL: movie.imageURL
        })
    }

    handleFormSubmit = e => {
        e.preventDefault()
    }

    render() {
        return (
            <div className="container">
            <form className="mt-5" onSubmit={this.handleFormSubmit}>
            <h2>Edit The Form To Update This Movie</h2>
                <div className="row form-row mt-5">
                    <div className="form-group col-md-10 mb-3">
                        <label htmlFor="inputName">Name</label>
                        <input  type="text" 
                                className="form-control" 
                                name="name"
                                value={this.state.name}/>
                    </div>
                    <div className="form-group col-md-2 mb-3">
                        <label htmlFor="inputRating">Rating</label>
                        <input 
                                type="text" 
                                className="form-control" 
                                name="rating"
                                value={this.state.rating}/>
                    </div>
                </div>
                <div className="form-row mb-3">
                    <div className="form-group col-md-12">
                        <label htmlFor="inputImage">Image URL</label>
                        <input 
                                type="text" 
                                className="form-control" 
                                name="imageURL"
                                value={this.state.imageURL}/>
                    </div>
                </div>
                <div className="form-row mb-3">
                    <div className="form-group col-md-12">
                        <label htmlFor="overviewTextarea">Overview</label>
                        <textarea 
                                className="form-control" 
                                name="overview" rows="5"
                                value={this.state.overview}></textarea>
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

export default EditMovie