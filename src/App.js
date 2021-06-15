import React from "react";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import AddMovie from "./components/AddMovie";
import EditMovie from "./components/EditMovie";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  state = {
    movies: [],

    searchQuery: "",
  };

  //! Getting data from src/api/movies.json (fake.api)
  //! using fetch
  // async componentDidMount() {
  //   const baseURL = "http://localhost:3002/movies"
  //   const response = await fetch(baseURL)
  //   const data = await response.json()
  //   this.setState({movies: data})
  // }

  // npx json-server --watch movies.json --port 3002
  //! using axios
  async componentDidMount() {
    this.getMovies()
  }
  async getMovies() {
    const response = await axios.get("http://localhost:3002/movies");
    this.setState({ movies: response.data });
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
  //   this.setState(state => ({
  //     movies: newMovieList
  //   }))
  // }

  //! Delete func with axios
  deleteMovie = async (movie) => {
    axios.delete(`http://localhost:3002/movies/${movie.id}`)
    const newMovieList = this.state.movies.filter(
        m => m.id !== movie.id
    );
    this.setState(state => ({
        movies: newMovieList
    }))
}

  //! Search movie 
  searchMovie = (e) => {
    this.setState({ searchQuery: e.target.value });
  };

  //! Add movie
  addMovie = async (movie) => {
    await axios.post(`http://localhost:3002/movies/`, movie)
    this.setState( state => ( {
      movies: state.movies.concat([movie])
    }))
    this.getMovies()
  }

  //! Edit movie
  editMovie = async (id, updatedMovie) => {
    await axios.put(`http://localhost:3002/movies/${id}`, updatedMovie)
    this.getMovies()
  }

  render() {
    let filteredMovies = this.state.movies.filter((movie) => {
      return (
        movie.name
          .toLowerCase()
          .indexOf(this.state.searchQuery.toLowerCase()) !== -1
      );
    }).sort((a, b) => {
      return a.id < b.id ? 1 : a.id > b.id ? -1 : 0
    });

    return (
      <Router>
        <div className="container">
          <Switch>
            <Route path="/" exact render={() => (
                <React.Fragment>
                  <div className="row">
                    <div className="col-lg-12">
                      <SearchBar searchMovieProp={this.searchMovie} />
                    </div>
                  </div>

                  <MovieList
                    movies={filteredMovies}
                    deleteMovie={this.deleteMovie}
                  />
                </React.Fragment>
              )}
            ></Route>

            <Route path="/add" exact render={({ history }) => (
                <AddMovie 
                  onAddMovie = {(movie) => {
                    this.addMovie(movie)
                    history.push("/")
                  }}
                />
              )}
            ></Route>

            <Route path="/edit/:id" exact render={(props) => (
                <EditMovie 
                  {...props}
                  onEditMovie = {(id, movie) => {
                    this.editMovie(id, movie)
                  }}
                />
              )}
            ></Route>

          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
