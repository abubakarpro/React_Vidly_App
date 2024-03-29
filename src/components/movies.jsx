import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import ListGroup from "../common/listGroup";
import Pagination from "../common/pagination";
import { paginate } from "../utils/paginate";
import MoviesTable from "./moviesTable";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],

    pageSize: 4,
    currentPage: 1,
    selectedGenre: ""

  };

  componentDidMount() {
    const genres = [{ name: 'All Genres', _id: '' }, ...getGenres()]
    this.setState({ movies: getMovies(), genres });
  }
  render() {
    const { length: count } = this.state.movies;

    const { pageSize, currentPage, selectedGenre, movies: allMovies } = this.state;

    if (count === 0) return <p>There are no movies in DataBase</p>;


    const filtered = selectedGenre && selectedGenre._id ? allMovies.filter(m => m.genre._id === selectedGenre._id) : allMovies;

    const movies = paginate(filtered, currentPage, pageSize);

    return (
      <div >
        <div className="row">
          <div className="col-2">
            <ListGroup
              items={this.state.genres}
              selectedItem={this.state.selectedGenre}
              onItemSelect={this.handleGenresSelect}
            />
          </div>
          <div className="col">
            <p>There are {filtered.length} movies in DataBase </p>

            <MoviesTable movies={movies} onLike={this.handleLike} onDelete={this.handleDelete} />

            <Pagination
              itemsCount={filtered.length}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </div>
    );
  }

  handleDelete = movie => {

    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };

  handleLike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };

    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleGenresSelect = genre => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };


}

export default Movies;
