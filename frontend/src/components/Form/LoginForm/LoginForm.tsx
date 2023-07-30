import { zodResolver } from "@hookform/resolvers/zod"
import { useUserContext } from "../../../hooks/useUserContext"
import { useForm } from "react-hook-form"
import { loginValidtorSchema, tLoginValidator } from "../../../pages/Login/validator"
import { StyledLoginForm } from "./style"
import { Button } from "../../Button/Button"




export const LoginForm = () => {

  const { register, handleSubmit } = useForm<tLoginValidator>({
    resolver: zodResolver(loginValidtorSchema)
  })

  const { login } = useUserContext()
  return (
    <StyledLoginForm>
      <form onSubmit={handleSubmit(login)}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email"  {...register("email")} />
        <label htmlFor="password">Senha</label>
        <input type="password" id="password"  {...register("password")} />
        <Button type="submit" buttonText="Fazer login" />
      </form>
    </StyledLoginForm>
  )


}