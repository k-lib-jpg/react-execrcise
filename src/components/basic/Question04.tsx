const StyledBox:React.FC = () => {
  const boxStyle = {
    backgroundColor:"#2927a5",
    padding:"20px",
    border:"2px solid #a73a3a",
    borderRadius:"8px"
  };
  
  return (
    <div>
      <div style={boxStyle}>
        インラインスタイルのボックス
      </div>
      <div className="custom-box">
        CSSクラスのボックス
      </div>
    </div>
  );
}

export default StyledBox;