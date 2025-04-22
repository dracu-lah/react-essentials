const Chapter3 = () => {
  function handleClick() {
    alert("Another Alert Button Clicked!")
  }
  return (
    <div>
      <h1 style={{ marginBottom: "12px" }}><u>Chapter 3 | Event Handling</u></h1>
      <button onClick={() => alert("Another Alert Button Clicked!")}>
        Alert Button
      </button>

      <button onClick={handleClick}>
        Another Alert Button
      </button>
    </div>
  )
}

export default Chapter3
