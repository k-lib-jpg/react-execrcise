import { useState } from 'react';
 

type Items = string[];

type KeyPressCount = {
   Enter: number;
   Escape: number;
   Space: number;
}

const KeyboardEvents = () => {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState<Items>([]);
  const [keyPressCount, setKeyPressCount] = useState<KeyPressCount>({
    Enter: 0,
    Escape: 0,
    Space: 0
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Enterキーで追加
    if (e.key === "Enter" && inputValue.trim()) {
        setItems((prevItems) => [...prevItems, inputValue]);
        setInputValue("");
        setKeyPressCount(prevKeyCount => ({
          ...prevKeyCount,
          Enter: prevKeyCount.Enter + 1
        }));
      }

    // Escapeキーでクリア
    if (e.key === "Escape") {
        setInputValue("");
        setKeyPressCount(prevKeyCount => ({
          ...prevKeyCount,
          Escape: prevKeyCount.Escape + 1
        }));
      };

      
    // Ctrl + Zで最後の項目を削除
    if (e.ctrlKey && e.key === "z") {
      e.preventDefault();      
       setItems((prevItems) => prevItems.slice(0, -1));
      };

    if (e.key === " ") {
      setKeyPressCount((prevKeyCount) => ({
          ...prevKeyCount,
          Space: prevKeyCount.Space + 1,
      }))
    }
  }


  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        // キーイベントを設定
        placeholder="Enterで追加、Escでクリア、Ctrl+Zで削除"
        style={{ width: '300px', padding: '8px' }}
        aria-label="アイテム入力フィールド"
		maxLength={100}
      />
      
      <ul>
        {items.map((item, index) => (
            <li key={index}>{item}</li>
        ))}
      </ul>
      
      <div>
        <h4>キー押下回数:</h4>
        <p>Enter: {keyPressCount.Enter}回</p>
        <p>Escape: {keyPressCount.Escape}回</p>
        <p>Space: {keyPressCount.Space}回</p>
      </div>
    </div>
  );
}
 
export default KeyboardEvents;
