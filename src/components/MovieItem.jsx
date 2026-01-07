export default function MovieItem({movie, onDelete, onToggle}) {
  return (
    <li>
      <div>
        <div>{movie.title}</div>
        <div>{movie.genre}</div>

         <button onClick={() => onToggle(movie.id)}>
          {movie.watched ? "Unwatch" : "Watch"}
         </button>

         <button onClick={()=> onDelete(movie.id)}>
          Delete
         </button>
      </div>
    </li>
  )
}

