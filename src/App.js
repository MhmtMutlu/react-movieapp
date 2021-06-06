import React from "react"
import SearchBar from "./components/SearchBar"
import MovieList from "./components/MovieList"


class App extends React.Component {
    state = {
        movies: [
            {
              "name": "The Matrix 3",
              "rating": "8.1",
              "overview": "Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents ",
              "imageURL": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/dXNAPwY7VrqMAo51EKhhCJfaGb5.jpg",
              "id": 1
            },
            {
              "name": "The Matrix Reloaded",
              "rating": "6.9",
              "imageURL": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/jBegA6V243J6HUnpcOILsRvBnGb.jpg",
              "overview": "Six months after the events depicted in The Matrix, Neo has proved to be a good omen for the free humans, as more and more ",
              "id": 2
            },
            {
              "name": "Saw 3D",
              "rating": "7.5",
              "overview": "SAW legacy, a group of Jigsaw survivors gathers to seek the support of self-help guru and fellow survivor Bobby Dagen, a man ",
              "imageURL": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/qHCZ6LjtmqWDfXXN28TlIC9OppK.jpg",
              "id": 3
            },
            {
              "name": "Blitz 007",
              "rating": "11",
              "overview": "A tough, renegade cop with a gay sidekick is dispatched to take down a serial killer who has been targeting police officers. ",
              "imageURL": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/qCPMjT8Ld8tvs1zs7LY2jpKlRIK.jpg",
              "id": 4
            },
            {
              "name": "Hostage",
              "rating": "6.3",
              "imageURL": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/4hne3v6jN4MlCnhSkxOW7YspJhr.jpg",
              "overview": "When a mafia accountant is taken hostage on his beat, a police officer – wracked by guilt from a prior stint as a negotiator",
              "id": 5
            }
          ]
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SearchBar />
                    </div>
                </div>
                <MovieList
                  movies={this.state.movies}
                />
            </div>
        )
    }
}

export default App