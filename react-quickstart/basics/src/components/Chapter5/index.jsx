import { useEffect } from "react"
import { useState } from "react"

const Chapter5 = () => {
  const [value, setValue] = useState(0)
  useEffect(() => {

    setValue(34)
  }, [])
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

export default Chapter5
