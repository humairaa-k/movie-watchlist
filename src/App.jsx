import { useState } from 'react'
import MovieForm from './components/MovieForm'
import './App.css'

 const GENRE=["Drama","Sci-Fi","Action","Comedy"]

 function createId() {
  if(typeof crypto !== "undefined" && crypto.randomUUID){
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`
 }

function App() {
  const [movies ,setMovie] = useState([
    {id: createId(), title: 'John Wick',genre:"Action",watched: false},
    {id: createId(), title: 'Conjuring',genre:"Horror",watched: false}
  ]);

  function handleAddMovie(moviedata) {
    const newMovie= {
      id: createId(),
      ...data,
    };

    setMovie((prev) => [newMovie,...prev]);
  }

  return (
    <div className='page'>
      <header className='header'>
        <div>
          <h1 className='title'> Movie Watchlist Manager</h1>
          <p className='sub-title'> yap yap yap</p>
        </div>
      </header>

      <section className='card'>
        <div className='cardHeader'>
          <h2 className='sectionTitle'> Add Movie</h2>
        </div>
        <div className='cardBody'>
         <MovieForm onAddMovie={handleAddMovie}/>
         <ol>
         {movies.map(movie => (
         <li key={movie.id}>
         {movie.title} ({movie.genre}) - {movie.watched ? "Watched" : "Unwatched"}
         </li>
         ))}
        </ol>

        </div>

      </section>
    </div>
  )
}

export default App
