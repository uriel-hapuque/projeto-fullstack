import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "../../Button/Button"

import { useDashboardContext } from "../../../hooks/useDashboardContext"
import { StyledRegisterContactForm } from "./style"
import { registerContactValidatorSchema, tRegisterContactValidator } from "./validator"

export const RegisterContactForm = () => {

  const { register, handleSubmit } = useForm<tRegisterContactValidator>({
    resolver: zodResolver(registerContactValidatorSchema)
  })

  const { registerContact } = useDashboardContext()
  return (

    <StyledRegisterContactForm>
      <form onSubmit={handleSubmit(registerContact)}>
        <label htmlFor="name">Nome:</label>
        <input type="text" id="name"  {...register("name")} />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email"  {...register("email")} />
        <label htmlFor="number">Número:</label>
        <input type="text" id="number"  {...register("number")} />

        <Button type="submit" buttonText="Registrar contato" />

      </form>

    </StyledRegisterContactForm>

  )
}