import { useState } from 'react'
import MovieForm from './components/MovieForm'
import MovieList from './components/MovieList'
import './App.css'

 const GENRE=["Drama","Sci-Fi","Action","Comedy","Other"]

 function createId() {
  if(typeof crypto !== "undefined" && crypto.randomUUID){
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`
 }

function App() {
  const [movies ,setMovie] = useState([
    {id: createId(), title: 'John Wick',genre:"Action",watched: true},
    {id: createId(), title: 'Conjuring',genre:"Horror",watched: false}
  ]);
    const [filter, setFilter] = useState("all");

  function handleAddMovie(data) {
    const newMovie= {
      id: createId(),
      ...data,
    };

    setMovie((prev) => [newMovie,...prev]);
  }
  
  function handleToggleWatched(id) {
    setMovie(prev => prev.map(movie => movie.id === id ?
       { ...movie, watched: !movie.watched }
          : movie
      )
    );
  }

  function handleDeleteMovie(id) {
  setMovie(prev => prev.filter(e => e.id !== id));
}

   const filteredMovies = movies.filter(movie => {
    if (filter === "watched") return movie.watched;
    if(filter === "unwatched") return !movie.watched;
    return true;
   })

    const totalMovies = movies.length;
    const watchedCount = movies.filter(m => m.watched).length;
    const unwatchedCount = totalMovies - watchedCount;

  return (
    <div className='page'>
      <header className='header'>
        <div>
          <h1 className='title'> Movie Watchlist Manager</h1>
        </div>
      </header>

      <MovieForm onAddMovie={handleAddMovie} />

      <div className="filters row">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("watched")}>Watched</button>
        <button onClick={() => setFilter("unwatched")}>Unwatched</button>
      </div>

      <div className="summary row">
        <p>Total: {totalMovies}</p>
        <p>Watched: {watchedCount}</p>
        <p>Unwatched: {unwatchedCount}</p>
      </div>

     {totalMovies > 0 && watchedCount === totalMovies ? (
      <p className="all-watched-msg"> You watched all movies!</p>
      ) : (
     <MovieList movies={filteredMovies} onToggle={handleToggleWatched} onDelete={handleDeleteMovie}/>
      )}

    </div>
  )
}

export default App
