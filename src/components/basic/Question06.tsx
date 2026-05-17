type greetType = {
  name:string;
}

const Greeting = (props:greetType) => {
  return (
    <div>
      {/* propsを使って挨拶を表示 */
      <p>こんにちわ、{props.name}さん!</p>
      }
    </div>
  );
}
 
export default Greeting

// 親コンポーネント
// const App = () => {
//   const names = ['山田','鈴木','佐藤']

//   return (
//     <>
//       {names.map((name, index) => (
//            <Greeting key = {index} name={name} />
//       ))}
//     </>
//   )
// }