type CardProps = {
    title: string;
    children: React.ReactNode;
}

const Card = ({title, children}:CardProps) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <div className='card-content'>{children}</div>
    </div>
  );
}
 
export default Card

// const App = () => {
//   return (
//     <>
//         <Card title="カード1">
//           <p>これは最初のカードです</p>
//         </Card>

//         <Card title="カード2">
//           <ul>
//             <li>リスト項目1</li>
//             <li>リスト項目2</li>
//           </ul>
//         </Card>

//         <Card title="カード3">
//           <button>ボタンも入れられます</button>
//         </Card>
//     </>
//   )
// }