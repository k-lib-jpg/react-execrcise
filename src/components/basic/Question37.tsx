import { useState, useEffect } from "react";
 
function StateWatcher() {
  const [count, setCount] = useState(0);
  const [changeCount, setChangeCount] = useState(0);
  const [history, setHistory] = useState<string[]>([]);
 
  useEffect(
    () => {
      // countの変更を監視
      // 1. 変更回数を増やす
      // 2. 履歴に追加
      // 3. 5の倍数チェック

      // 初期レンダリング時は何もしない
      if (count === 0) return;

      setChangeCount((prev) => prev + 1);
      const timestamp = new Date().toLocaleTimeString();
      setHistory((prev) => [...prev, `${changeCount + 1}: ${count} ${timestamp}`]);

      if (count % 5 === 0) {
        alert(`カウントが5の倍数になりました: ${count}`);
      }
    },
    [
      count, // 監視する状態を指定 
    ]
  );
 
  return (
    <div>
      <h2>状態変更の監視</h2>
      <p>カウント: {count}</p>
      <p>変更回数: {changeCount}</p>
 
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(count + 5)}>+5</button>
      <button onClick={() => setCount(0)}>リセット</button>
 
      <div>
        <h3>履歴:</h3>
          {history.length === 0 ? (
            <p>まだ変更履歴がありません</p>
          ) : (
              <ul>
          {history.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
          )}
      </div>
    </div>
  );
}
 
export default StateWatcher;
