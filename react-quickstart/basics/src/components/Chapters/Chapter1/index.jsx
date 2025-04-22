const Chapter1 = () => {
  const employee = {
    name: "Nevil",
    age: 23
  }
  return (
    <div>
      <h1 style={{ marginBottom: "12px" }}><u>Chapter 1 | JSX</u></h1>
      <h4>Name: {employee.name}</h4>
      <p>Age: {employee.age}</p>
    </div>
  )
}

export default Chapter1
