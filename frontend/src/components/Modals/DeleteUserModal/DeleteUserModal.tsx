import { useDashboardContext } from "../../../hooks/useDashboardContext"
import { useUserContext } from "../../../hooks/useUserContext"
import { Button } from "../../Button/Button"
import { StyledModalContainer } from "./style"

export const DeleteUserModal = () => {
  const { setDeleteUserModal } = useDashboardContext()
  const { deleteUser, user } = useUserContext()
  return (
    <StyledModalContainer>
      <div className="modal">
        <div className="modalHeader">
          <h3>Tem certeza que quer deletar a conta?</h3>
          <Button
            type="submit"
            onClick={() => setDeleteUserModal(false)}
            buttonText={"X"}
          />
        </div>

        <Button type="submit" buttonText="Deletar conta" onClick={() => {
          deleteUser(user?.id)
          setDeleteUserModal(false)
        }} />
      </div>

    </StyledModalContainer>
  )
}