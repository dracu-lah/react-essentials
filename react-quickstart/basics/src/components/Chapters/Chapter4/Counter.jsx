import { useState } from "react"

const Counter = () => {
  const [value, setValue] = useState(0)
  return (
    <div style={{ display: "flex", gap: 4 }}>
      <button onClick={() => setValue(prev => prev - 1)}>
        -
      </button>

      <div>

        {value}
      </div>
      <button onClick={() => setValue(prev => prev + 1)}>
        +
      </button>
    </div>
  )
}

export default Counter
