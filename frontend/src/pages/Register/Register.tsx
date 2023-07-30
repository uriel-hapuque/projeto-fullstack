import { Button } from "../../components/Button/Button"
import { RegisterForm } from "../../components/Form/RegisterForm/RegisterForm"
import { StyledRegisterPage } from "./style"
import { Link } from "react-router-dom"


export const Register = () => {


  return (
    <StyledRegisterPage>
      <h2>Registrar-se</h2>
      <RegisterForm />
      <Link to="/">
        <Button type="button" buttonText="Login" />
      </Link>
    </StyledRegisterPage>
  )
}