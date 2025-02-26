type ButtonProps = {
  userAges: Record<"Alice" | "Bob" | "Jose", number>
}

function Button({}: ButtonProps) {
  return <button>test</button>
}

// const Button = ({text}: ButtonProps) => {
//   return <button>{text}</button>
// }

// const Button: React.FC<ButtonProps> = ({text}) => {
//   return <button>{text}</button>
// }

function Page() {
  return (
    <div>
      <Button
      userAges={{
        Alice: 20,
        Bob: 21,
        Jose: 22
      }} 
      />
    </div>
  )
}

export default Page