type ButtonProps = {
  size?: "small" | "medium" | "large";
  color?: string;
  text?: string;
};

const Button = ({ size = "medium", color = "blue", text = "Clicl me" }: ButtonProps) => { 
  // デフォルト値を設定
 {
  const buttonStyle = {
    padding: 
        size === 'small' 
            ? '5px 10px' 
            : size === 'large'
            ? '15px 30px' 
            : '10px 20px',
    backgroundColor: color,
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  };
  
  return (
    <button style={buttonStyle}>
      {text}
    </button>
  );
}}
 
export default Button;

// const App = () => {
//   return (
//     <>
//     <Button size="small" color="red" text="small Button" />
//     <Button />
//     <Button size="large" text="クリック" />
//     </>
//   )
// }

// export default App