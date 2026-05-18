type UserCardProps ={
  name: string;
  age: number;
  isActive: boolean;
}

const UserCard = ({name, age, isActive}: UserCardProps) => {
  const status = isActive ? 'アクティブ' : '非アクティブ'

  return (
    <div className="user-card">
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Status: {status}</p>
    </div>
  );
}
 
export default UserCard;


// const App = () => {
//   const users = [
//     { name: '山田太郎', age:30, isActive: true},
//     { name: '鈴木一郎', age:25, isActive: false}
//   ]
//   return (
//     <>
//       {users.map((user, index) => (
//           // <Usercard key = {index} name={user.name} age={user.age} isActive={user.isActive} />
//           <Usercard key = {index} {...user} />
//           ))}
//     </>
//   )
// }