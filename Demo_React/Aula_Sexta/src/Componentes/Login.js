import { useNavigate } from "react-router-dom";

export function Login(props) {
  const navigate = useNavigate();
  return (
    <>
      <h1>Login</h1>
      <button
        onClick={() => {
          navigate("/home");
          props.doLogin("David");
        }}
      >
        Clicar para fazer o Login
      </button>
    </>
  );
}
