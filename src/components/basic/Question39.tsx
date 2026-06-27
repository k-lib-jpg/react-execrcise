import { useState, useEffect } from "react";
 
function UserSettings() {
  const [settings, setSettings] = useState({
    theme: "light",
    fontSize: "medium",
    language: "ja",
    notifications: true,
  });
  const [isInitialized, setIsInitialized] = useState(false);
 
  // マウント時に初期化フラグを設定
  useEffect(() => {}, []);
 
  // 設定変更時に自動保存
  useEffect(
    () => {},
    [
      /* 監視対象 */
    ]
  );
 
  const updateSetting = (key, value) => {
    setSettings((prev) => ({
      ...prev,
      [key]: value,
    }));
  };
 
  const resetSettings = () => {
    // デフォルト設定に戻す
    // localStorageもクリア
  };
 
  return (
    <div>
      <h2>ユーザー設定</h2>
 
      <div>
        <label>
          テーマ:
          <select
            value={settings.theme}
            onChange={(e) => updateSetting("theme", e.target.value)}
          >
            <option value="light">ライト</option>
            <option value="dark">ダーク</option>
            <option value="auto">自動</option>
          </select>
        </label>
      </div>
 
      <div>
        <label>
          フォントサイズ:
          <select
            value={settings.fontSize}
            onChange={(e) => updateSetting("fontSize", e.target.value)}
          >
            <option value="small">小</option>
            <option value="medium">中</option>
            <option value="large">大</option>
          </select>
        </label>
      </div>
 
      <div>
        <label>
          言語:
          <select
            value={settings.language}
            onChange={(e) => updateSetting("language", e.target.value)}
          >
            <option value="ja">日本語</option>
            <option value="en">English</option>
            <option value="zh">中文</option>
          </select>
        </label>
      </div>
 
      <div>
        <label>
          <input
            type="checkbox"
            checked={settings.notifications}
            onChange={(e) => updateSetting("notifications", e.target.checked)}
          />
          通知を有効にする
        </label>
      </div>
 
      <button onClick={resetSettings}>設定をリセット</button>
 
      <div>
        <h3>現在の設定:</h3>
        <pre>{JSON.stringify(settings, null, 2)}</pre>
      </div>
    </div>
  );
}
 
export default UserSettings;