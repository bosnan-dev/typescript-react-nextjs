type ButtonProps = {
  style: React.CSSProperties;
}

function Button({style}: ButtonProps) {
  return <button style={style}>test</button>
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
      <Button style={{
        backgroundColor: 'gold',
        color: 'black',
        fontSize: "160px",
        padding: "100px"
      }}
      />
    </div>
  )
}

export default Page