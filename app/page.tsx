"use client"

type ButtonProps = {
  onClick: (text: string) => void;
}

function Button({onClick}: ButtonProps) {
  return <button onClick={() => onClick("Hello World")}>test</button>
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
      onClick={() => {
        alert('Works!')
      }}
      />
    </div>
  )
}

export default Page