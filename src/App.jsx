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
    {id: createId(), title: 'John Wick',genre:"Action",watched: false},
    {id: createId(), title: 'Conjuring',genre:"Horror",watched: false}
  ]);

  function handleAddMovie(data) {
    const newMovie= {
      id: createId(),
      ...data,
    };

    setMovie((prev) => [newMovie,...prev]);
  }

  function toggleWatched(id) {
    setMovie(prev => prev.map(movie => movie.id === id ? 
      {...movie, watched: !movie.watched} : movie
    ))
  }

  function handleDeleteMovie(id) {
  setMovie(prev => prev.filter(e => e.id !== id));
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
          <MovieList movies={movies} onToggleWatched={toggleWatched} onDeleteMovie={handleDeleteMovie}/>
    
        </div>

      </section>
    </div>
  )
}

export default App
//next i have to create movie list and movie item 