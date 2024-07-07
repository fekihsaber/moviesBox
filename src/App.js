import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovie from './components/AddMovie';
import inception from './images/inception.jpg';
import batman from './images/batman.jpg';
import './App.css';

const initialMovies = [
  {
    title: 'Inception',
    description: 'A mind-bending thriller',
    posterURL: inception,
    rating: 5
  },
 
  {
    title: 'Batman Begins',
    description: 'The origin story of the Dark Knight',
    posterURL: batman,
    rating: 5
  }
];

const App = () => {
  const [movies, setMovies] = useState(initialMovies);
  const [filteredMovies, setFilteredMovies] = useState(initialMovies);

  const handleFilter = ({ title, rating }) => {
    let filtered = movies;

    if (title) {
      filtered = filtered.filter(movie =>
        movie.title.toLowerCase().includes(title.toLowerCase())
      );
    }

    if (rating) {
      filtered = filtered.filter(movie =>
        movie.rating >= parseFloat(rating)
      );
    }

    setFilteredMovies(filtered);
  };

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
    setFilteredMovies([...movies, newMovie]);
  };

  return (
    <div className="app">
      <h1>My Movie App</h1>
      <Filter onFilter={handleFilter} />
      <AddMovie onAdd={handleAddMovie} />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
