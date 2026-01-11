export default function MovieItem({movie, onDelete, onToggle}) {
  return (
    <li>
      <div className="row">
        <div>{movie.title}</div>
        <div>{movie.genre}</div>

         {movie.watched ? "Watched" : "Unwatched"}

         <button className="btn-list" onClick={() => onToggle(movie.id)}>
          {movie.watched ? "Unwatch" : "Watched"}
         </button>

         <button className="btn-list" onClick={()=> onDelete(movie.id)}>
          Delete
         </button>
      </div>
    </li>
  )
}


