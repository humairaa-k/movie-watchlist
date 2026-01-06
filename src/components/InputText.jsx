
export default function ({label, value, onChange, placeholder, type='text' }) {

  return (
    <div>
      <label>{label}</label>
       <input 
        value={value}
        onChange={(e)=> onChange(e.target.value)}
        placeholder={placeholder}
        type={type}
        />
    </div>
  )
}
