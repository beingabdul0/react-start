import KendoButton from "../Component/KendoButton";
import KendoEmailInput from "../Component/KendoEmailInput";
import KendoPasswordInput from "../Component/KendoPasswordInput";

function Login() {
  return (
    <>
      <h1>Login</h1>
      <KendoEmailInput value={""} placeHolder={"Enter Email"} />
      <KendoPasswordInput value={""} placeHolder={"Enter Password"} />
      <KendoButton text={"Login"} themeColor={"success"} />
    </>
  );
}
export default Login;
