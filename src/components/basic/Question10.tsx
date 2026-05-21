import { useId } from "react";

type InputFieldProps = {
     label: string;
     type: string;
     placeholder: string;
     required: boolean;
};

const InputField = ({ label, ...restProps }: InputFieldProps) => {
  const id = useId();
  return (
    <div className="input-field">
      <label htmlFor={id}>{label}</label>
      <input id={id} {...restProps}/>
      {/* type={restProps.type} placeholder={restProps.placeholder} required={restProps.required}  */}
    </div>
  );
}
 
export default InputField;


// const App = () => {
//   return (
//     <>
//         <InputField 
//             label="名前" 
//             type="text" 
//             placeholder="名前を入力してください"
//             required 
//         />
//          <InputField 
//             label="メールアドレス" 
//             type="email" 
//             placeholder="メールアドレスを入力してください"
//             required 
//         />
//          <InputField 
//             label="パスワード" 
//             type="password" 
//             placeholder="パスワードを入力してください"
//             required 
//         />
//     </>
//   )
// }