import { Button } from "../../components/Button/Button"
import { LoginForm } from "../../components/Form/LoginForm/LoginForm"
import { StyledLoginPage } from "./style"
import { Link } from "react-router-dom"

export const Login = () => {

  return (
    <StyledLoginPage>

      <h1>RelationsManager</h1>
      <h2>Login</h2>
      <LoginForm />
      <Link to="/register">
        <Button type="button" buttonText="Registro" />
      </Link>


    </StyledLoginPage>
  )
}