import React, { useState } from 'react';

type Position = {
  x: number,
  y: number
};

const MouseEvents = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState<Position>({ x: 0, y: 0 });
  const [boxPos, setBoxPos] = useState({ x: 50, y: 50 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0});
  
  // マウスイベントハンドラーを実装
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // 座標を表示
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });

    
    if (isDragging) {
      const maxX = rect.width -100;
      const maxY = rect.height -100;

      const newX = e.clientX - rect.left -dragStart.x;
      const newY = e.clientY - rect.top -dragStart.y;

      const newBoxPos = {
          x: Math.max(0, Math.min(newX, maxX)),
          y: Math.max(0, Math.min(newY, maxY)),
      };

      setBoxPos(newBoxPos);
    };
  };

  // ドラッグ中か判断する
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const parentRect = e.currentTarget.parentElement?.getBoundingClientRect();
    if (!parentRect) return;
    
    setIsDragging(true);
    setDragStart({
        x: e.clientX - parentRect.left - boxPos.x,
        y: e.clientY - parentRect.top - boxPos.y,
    });
  };

  const handleMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
      setIsDragging(false);
  };
  
  return (
    <>
      <div 
          style={{ 
              height: '400px', 
              width: '400px', 
              position: 'relative', 
              border: '1px solid #ccc', 
              overflow: "hidden" 
          }}
          onMouseMove={handleMouseMove}>
        <div
          style={{
            position: 'absolute',
            left: boxPos.x,
            top: boxPos.y,
            width: '100px',
            height: '100px',
            backgroundColor: isHovered ? 'lightblue' : 'gray',
            cursor: isDragging ? 'grabbing' : 'grab',
            userSelect: 'none',
            transition: isDragging ? 'none' : 'all 0.3s'
          }}
          // マウスイベントを設定
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        >
          ドラッグ可能
        </div>
        <p>マウス座標: X={mousePos.x}, Y={mousePos.y}</p>
      </div>
    </>
  );
}
export default MouseEvents;