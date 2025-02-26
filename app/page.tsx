const user = {
  name: 'John Doe',
  age: 30,
  email: 'john.doe@example.com'
}

function Button(){

  return (
    <button>Text</button>
  )
}

function Page() {
  return (
    <div>
      <Button />
    </div>
  )
}

export default Page