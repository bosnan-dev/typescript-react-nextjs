type Color = "red" | "blue" | "yellow" | "green" | "black" | "white" | "gray";

type ButtonProps = {
  text: string;
  subtitle?: string;
  color?: Color;
  backgroundColor?: Color;
  sizes: 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100;
}

function Button({text}: ButtonProps) {
  return <button>{text}</button>
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
      <Button text="Hello" 
      backgroundColor="gray"
      color="red"
      sizes={50}
      />
    </div>
  )
}

export default Page