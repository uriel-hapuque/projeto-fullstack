import { useDashboardContext } from "../../../hooks/useDashboardContext"
import { Button } from "../../Button/Button"
import { UpdateUserForm } from "../../Form/UpdateUserForm/UpdateUserForm"
import { StyledModalContainer } from "./style"

export const EditUserInfoModal = () => {
  const { setEditUserInfoModal } = useDashboardContext()
  return (
    <StyledModalContainer>

      <div className="modal">
        <div className="modalHeader">
          <h3>Atualize os dados do usuário</h3>
          <Button
            type="submit"
            onClick={() => setEditUserInfoModal(false)}
            buttonText={"X"}
          />
        </div>
        <UpdateUserForm />


      </div>


    </StyledModalContainer>
  )
}