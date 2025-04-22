const Chapter3 = () => {
  function handleClick() {
    alert("Another Alert Button Clicked!")
  }
  return (
    <>
      <button onClick={() => alert("Another Alert Button Clicked!")}>
        Alert Button
      </button>

      <button onClick={handleClick}>
        Another Alert Button
      </button>
    </>
  )
}

export default Chapter3
