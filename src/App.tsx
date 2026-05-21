import './App.css'
import InputField from './components/basic/Question10'

const App = () => {
  return (
    <>
        <InputField 
            label="名前" 
            type="text" 
            placeholder="名前を入力してください"
            required 
        />
         <InputField 
            label="メールアドレス" 
            type="email" 
            placeholder="メールアドレスを入力してください"
            required 
        />
         <InputField 
            label="パスワード" 
            type="password" 
            placeholder="パスワードを入力してください"
            required 
        />
    </>
  )
}

export default App