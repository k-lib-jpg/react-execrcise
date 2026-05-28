import { useState, type ChangeEvent, type FormEvent } from 'react';

// 各ステートの管理
const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);

// 送信処理
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

//入力処理 
   const handleNameChange = (e:ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  
   const handleEmailChange = (e:ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  
   const handleAgeChange = (e:ChangeEvent<HTMLInputElement>) => {
    setAge(Number(e.target.value));
  };

  const [submitted, setSubmitted] = useState(false);

  // リセット機能
  const handleReset = () => {
    setName("");
    setEmail("");
    setAge(0);
    setSubmitted(false);
  }
  
  return (
	<div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
              名前:
              <input 
                  type="text"
                  value={name}
                  onChange={handleNameChange}
              />
          </label>
        </div>
        <div>
          <label>
              メールアドレス:
              <input 
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
              />
          </label>
        </div>
        <div>
          <label>
              年齢:
              <input 
                  type="number"
                  value={age}
                  onChange={handleAgeChange}
              />
          </label>
        </div>
        <button type="submit">登録</button>
        <button type="button" onClick={handleReset}>クリア</button>
      </form>

      {submitted && (
          <div>
            <h2>登録内容</h2>
            <p>名前: {name}</p>
            <p>メールアドレス: {email}</p>
            <p>年齢: {age}</p>
          </div>
      )}
    </div>
  );
}
 
export default RegistrationForm;