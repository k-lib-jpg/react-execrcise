const Introduction: React.FC  = () => {
  const name:string = "田中太郎";
  const age:number = 25;
  const currentYear:number = new Date().getFullYear();
  
  return (
    <>
      私は{name}です。{age}歳です。今年は{currentYear}年です。
    </>
  );
}
 
export default Introduction;