import { useState } from 'react';
 
function ToggleSwitch() {
  // ON/OFF状態を管理
  const [isOn, setIson] = useState(false)

  const buttonStyle = {
    backgroundColor: isOn? "green" : "red",
    color: "white",
    border: "none",
    borderRadius: "30px",
    padding: "10px 20px",
    cursor: "pointer",
  };
  
  const onClickToggle = () => {
    setIson(prev => !prev);
  };

  return (
    <div>
      <button 
        style={buttonStyle}
        onClick={onClickToggle}
      >
        {isOn ? "ON" : "OFF"}
      </button>
      <p>現在の状態: {isOn ? "アクティブ" : "非アクティブ"}</p>
    </div>
  );
}
 
export default ToggleSwitch;