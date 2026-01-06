import {useState} from 'react'
import InputText from './InputText'
import SelectInput from './SelectInput'

 const GENRE=["Drama","Sci-Fi","Action","Horror","Other"]

 export default function App({onAddMovie}) {
  const [title, setTitle] = useState("")
  const [genre, setGenre] = useState(GENRE[0])
  const [error, setError] = useState("")

  function submit() {
    setError("")

    const cleanTitle = title.trim();

    if(!cleanTitle){setError("Title is required") 
    return;
    }
    
    onAddMovie({title: cleanTitle, genre});

    setTitle("")
    setGenre(GENRE[0])
  }

   return(
    <div>
    <div className="row">
      <InputText label='Movie Title' value={title} onChange={setTitle} placeholder="e.g interstellar"/>
      <SelectInput label="Genre" value={genre} onChange={setGenre} options={GENRE}/>
    </div>

    {error ? <p className='error'>{error}</p> : null }

    <button className='btn-primary' onClick={submit}>
       Add
    </button>
    </div>
   )
  
}

