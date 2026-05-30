import { useState } from 'react';
 
type Position = {
  x: number,
  y: number
}

function EventInfo() {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [bgColor, setBgColor] = useState('white');
  const [counter, setCounter] = useState(0);
  
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // クリック処理
    setPosition({x: e.clientX, y: e.clientY});
    setCounter((prev) => prev + 1);
    if (e.shiftKey) {
      setBgColor(bgColor === "white" ? "lightblue" : "white");
    } 
  };
  
  const handleContextMenu = (e: React.MouseEvent<HTMLDivElement>) => {
    // 右クリック処理
    e.preventDefault();
    alert("右クリックは無効です");
  };

  const handleDoubleClick = () => {
    setCounter(0);
    alert("カウンターがリセットされました");
  };
  
  return (
    <div
      style={{ 
        height: '300px', 
        backgroundColor: bgColor,
        position: 'relative',
        border: '1px solid #ccc'
      }}
      // イベントハンドラーを設定
      onClick={handleClick}
      onContextMenu={handleContextMenu}
      onDoubleClick={handleDoubleClick}
    >
      <p>クリック位置: X={position.x}, Y={position.y}</p>
      <p>カウンター: {counter}</p>
      <p>Shiftキーを押しながらクリックで色が変わります</p>
    </div>
  );
}
 
export default EventInfo;
