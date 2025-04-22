import { useState } from "react"

const Form = () => {
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const handleSubmit = () => {
    alert(`Submitted Name : ${name}, Age  : ${age}`)
  }
  return (
    <div style={{ display: "flex", gap: 4 }}>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <input value={age} onChange={(e) => setAge(e.target.value)} />
      <button onClick={handleSubmit}>
        Submit
      </button>
    </div>
  )
}

export default Form
