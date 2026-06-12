import { useState, useEffect } from "react";
 
const MountEffect = () => {
  const [message, setMessage] = useState("");
 
  useEffect(() => {
    // マウント時の処理を記述
    // 1. コンソールにログ出力
    // 2. メッセージを設定
    // 3. ページタイトルを変更
    console.log("コンポーネントがマウントされました");
    setMessage("コンポーネントが正常にマウントされました");
    document.title = "React Challenge";
  }, []); // 空の依存配列
 
  return (
    <div>
      <h2>マウント時の処理</h2>
      <p>メッセージ: {message}</p>
    </div>
  );
}
 
export default MountEffect;