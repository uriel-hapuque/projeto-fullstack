import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useUserContext } from "../../../hooks/useUserContext"
import { StyledUpdateUserForm } from "./style"
import { updateUserValidator } from "../../../contexts/UserContext"
import { updateUserValidatorSchema } from "./validator"
import { Button } from "../../Button/Button"
import { useDashboardContext } from "../../../hooks/useDashboardContext"




export const UpdateUserForm = () => {

  const { register, handleSubmit } = useForm<updateUserValidator>({
    resolver: zodResolver(updateUserValidatorSchema)
  })
  const { setEditUserInfoModal } = useDashboardContext()
  const { updateUser } = useUserContext()
  return (

    <StyledUpdateUserForm>
      <form onSubmit={handleSubmit(updateUser)}>
        <label htmlFor="name">Nome:</label>
        <input type="text" id="name"  {...register("name")} />
        <label htmlFor="number">Novo número:</label>
        <input type="text" id="number"  {...register("number")} />

        <Button type="submit" buttonText="Alterar dados do usuário" onClick={() => {
          setTimeout(() => {
            setEditUserInfoModal(false)
          }, 100);
        }
        } />
      </form>

    </StyledUpdateUserForm>

  )
}