import { useState, type ChangeEvent } from 'react';
 
const TextInput = () => {
  // テキストの状態を管理
  const [ text, setText ] = useState("");
  // const [ charCount, setCharCount ] = useState(0);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setText(event.target.value);
  };

  const handleClear = () => {
      setText(""); 
  };
  return (
    <div>
      <input 
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="ここに入力してください"
      />
      <p>入力内容: {text}</p>
      <p>文字数: {text.length}</p>
      <button onClick={handleClear}>クリア</button>
    </div>
  );
}
 
export default TextInput;