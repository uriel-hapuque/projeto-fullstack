import { tUpdateContactValidator, updateContactValidatorSchema } from "./validator"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { useDashboardContext } from "../../../hooks/useDashboardContext"
import { StyledUpdateContactForm } from "./style"
import { Button } from "../../Button/Button"


export const UpdateContactForm = () => {
  const { register, handleSubmit } = useForm<tUpdateContactValidator>({
    resolver: zodResolver(updateContactValidatorSchema)
  })

  const { updateContact } = useDashboardContext()

  return (
    <StyledUpdateContactForm>
      <form onSubmit={handleSubmit(updateContact)}>
        <label htmlFor="name">Nome:</label>
        <input type="text" id="name"  {...register("name")} />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email"  {...register("email")} />
        <label htmlFor="number">Número:</label>
        <input type="text" id="number"  {...register("number")} />

        <Button type="submit" buttonText="Alterar dados do contato" onClick={() => updateContact} />
      </form>

    </StyledUpdateContactForm>
  )
}