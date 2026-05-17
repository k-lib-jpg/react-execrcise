import './App.css'
import Greeting from './components/basic/Question06'

const App = () => {
  const names = ['山田','鈴木','佐藤']

  return (
    <>
      {names.map((name, index) => (
           <Greeting key = {index} name={name} />
      ))}
    </>
  )
}

export default App