import MovieItem from "./MovieItem"

export default function MovieList({movies, onToggleWatched ,onDeleteMovie}) {
    if(movies.length === 0) {
        return <p className="empty">No movies yet. Add your movies </p>
    }
  return (
   <ul className="list">
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} onToggle={onToggleWatched} onDelete={onDeleteMovie}/>
      ))}
   </ul>
  )
}

