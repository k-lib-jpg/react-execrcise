import { useState } from "react";
 
type User = {
  id: number;
  name: string;
  age: number;
  email: string;
};

const UserCards = () => {
  const [user] = useState<User[]>([
    { id: 1, name: "田中太郎", age: 25, email: "tanaka@example.com" },
    { id: 2, name: "鈴木花子", age: 18, email: "suzuki@example.com" },
    { id: 3, name: "佐藤次郎", age: 65, email: "sato@example.com" },
    { id: 4, name: "高橋美咲", age: 32, email: "takahashi@example.com" },
  ]);
 
  const getAgeColor = (age: number) => {
    if (age < 20) {
        return "#e22222";  // 赤色
    } else if (age >= 20 && age <= 60) {
        return "#4CAF50"; // 緑色
    } else {
        return "#2196F3"; // 青色
    }
  };
 
  return (
    <div>
      <h2>ユーザー一覧</h2>
      <div className="user-cards">
        {user.map((user) => (
          <div
              key={user.id}
              className="user-card"
              style={{ backgroundColor: getAgeColor(user.age) }}
          >
              <h4>{user.name}</h4>
              <p>
                  <strong>年齢:</strong> {user.age}歳
              </p>
              <p>
                <strong>メール:</strong>{" "}
                <a
                    href={`mailto:${user.email}`}
                    className="email-link"
                >
                  {user.email}
                </a>
              </p>
          </div>
      ))}
      </div>
    </div>
  );
}
 
export default UserCards;