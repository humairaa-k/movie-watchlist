
export default function ({label, value, onChange, options}) {
  return (
    <div>
        <label>{label}</label>
        <select value={value} onChange={(e)=> onChange(e.target.value)}>
         {options.map((opt)=>(
           <option key={opt} value={opt}>
            {opt}
           </option>
         ))}
        </select>
    </div>
  )
}

