import React from "react"
import SearchBar from "./components/SearchBar"
import MovieList from "./components/MovieList"


class App extends React.Component {
    state = {
        movies: [],

        searchQuery: ""
    }

    //! Getting data from src/api/movies.json (fake.api)
    async componentDidMount() {
      const baseURL = "http://localhost:3002/movies"
      const response = await fetch(baseURL)
      const data = await response.json()
      this.setState({movies: data})
    }

    deleteMovie = (movie) => {
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