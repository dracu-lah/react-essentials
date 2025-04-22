import AnotherComponent from "./AnotherComponent"

const Chapter2 = () => {
  const employee = {
    name: "Nevil",
    age: 23
  }
  return (
    <div>
      <h1 style={{ marginBottom: "12px" }}><u>Chapter 2 | Props</u></h1>
      <h1>Name: {employee.name}</h1>
      <h2>Age: {employee.age}</h2>
      <AnotherComponent age={employee.age} />
    </div>
  )
}

export default Chapter2
