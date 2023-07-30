import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useUserContext } from "../../../hooks/useUserContext"
import { registerValidatorSchema, tRegisterValidator } from "../../../pages/Register/validator"
import { StyledRegisterForm } from "./style"
import { Button } from "../../Button/Button"




export const RegisterForm = () => {

  const { register, handleSubmit } = useForm<tRegisterValidator>({
    resolver: zodResolver(registerValidatorSchema)
  })

  const { registerUser } = useUserContext()
  return (

    <StyledRegisterForm>
      <form onSubmit={handleSubmit(registerUser)}>
        <label htmlFor="name">Nome:</label>
        <input type="name" id="name"  {...register("name")} />
        <label htmlFor="number">Número de telefone:</label>
        <input type="name" id="number"  {...register("number")} />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email"  {...register("email")} />
        <label htmlFor="password">Senha:</label>
        <input type="password" id="password"  {...register("password")} />
        <Button type="submit" buttonText="Registrar" />
      </form>

    </StyledRegisterForm>

  )
}