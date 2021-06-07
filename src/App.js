import React from "react"
import SearchBar from "./components/SearchBar"
import MovieList from "./components/MovieList"
import axios from "axios"


class App extends React.Component {
    state = {
        movies: [],

        searchQuery: ""
    }

    //! Getting data from src/api/movies.json (fake.api)
    //! using fetch
    // async componentDidMount() {
    //   const baseURL = "http://localhost:3002/movies"
    //   const response = await fetch(baseURL)
    //   const data = await response.json()
    //   this.setState({movies: data})
    // }

    //! using axios
    async componentDidMount() {
      const response = await axios.get("http://localhost:3002/movies")
      this.setState({movies: response.data})
    }

    //! Delete func with fetchapi
    // deleteMovie = async (movie) => {
    //   const baseURL = `http://localhost:3002/movies/${movie.id}`
    //   await fetch(baseURL, {
    //     method: "DELETE"
    //   })
    //   const newMovieList = this.state.movies.filter(
    //     m => m.id !== movie.id
    //   )
    //   //! If we dont have any state value, we can use that codes
    //   // this.setState({
    //   //   movies: newMovieList
    //   // })
    //   //! If we have state values, we can use that codes
    //   this.setState(state => ({
    //     movies: newMovieList
    //   }))
    // }

    //! Delete func with axios
    deleteMovie = async (movie) => {
      axios.delete(`http://localhost:3002/movies/${movie.id}`)
      const newMovieList = this.state.movies.filter(
        m => m.id !== movie.id
      )
      //! If we dont have any state value, we can use that codes
      // this.setState({
      //   movies: newMovieList
      // })
      //! If we have state values, we can use that codes
      this.setState(state => ({
        movies: newMovieList
      }))
    }

    searchMovie = (e) => {
      this.setState({searchQuery: e.target.value})
    }

    render() {

      let filteredMovies = this.state.movies.filter(
        (movie) => {
          return movie.name.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1
        }
      )

        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SearchBar searchMovie={this.searchMovie} />
                    </div>
                </div>
                <MovieList
                  movies={filteredMovies}
                  deleteMovie={this.deleteMovie}
                />
            </div>
        )
    }
}

export default App