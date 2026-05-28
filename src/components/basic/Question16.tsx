import { useState } from 'react';
 
const ClickButtons = () => {
  const [lastClicked, setLastClicked] = useState('なし');
  
  // イベントハンドラーを定義
  const handleClick = (buttonNumber: number) => {
    alert(`ボタン${buttonNumber}がクリックされました`)
    setLastClicked(`ボタン${buttonNumber}`);
  };

  return (
    <>
      <h3>最後にクリックしたボタン: {lastClicked}</h3>
      <button onClick={() => handleClick(1)}>ボタン1</button>
      <button onClick={() => handleClick(2)}>ボタン2</button>
      <button onClick={() => handleClick(3)}>ボタン3</button>
    </>
  );
}
 
export default ClickButtons;