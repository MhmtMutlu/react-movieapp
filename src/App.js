import React from "react";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import AddMovie from "./components/AddMovie";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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

  //! using axios
  async componentDidMount() {
    const response = await axios.get("http://localhost:3002/movies");
    this.setState({ movies: response.data });
  }
  // npx json-server --watch movies.json --port 3002

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
    axios.delete(`http://localhost:3002/movies/${movie.id}`);
    const newMovieList = this.state.movies.filter((m) => m.id !== movie.id);
    this.setState((state) => ({
      movies: newMovieList,
    }));
  };

  searchMovie = (e) => {
    this.setState({ searchQuery: e.target.value });
  };

  render() {
    let filteredMovies = this.state.movies.filter((movie) => {
      return (
        movie.name
          .toLowerCase()
          .indexOf(this.state.searchQuery.toLowerCase()) !== -1
      );
    });

    return (
      <Router>
        <div className="container">
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <React.Fragment>
                  <div className="row">
                    <div className="col-lg-12">
                      <SearchBar searchMovieProp={this.searchMovie} />
                    </div>
                  </div>

                  <MovieList
                    movies={filteredMovies}
                    deleteMovieProp={this.deleteMovie}
                  />
                </React.Fragment>
              )}
            ></Route>

            <Route path="/add" component={AddMovie} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
