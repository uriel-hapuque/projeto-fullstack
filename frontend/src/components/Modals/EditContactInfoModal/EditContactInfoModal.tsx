import { useDashboardContext } from "../../../hooks/useDashboardContext"
import { Button } from "../../Button/Button"
import { UpdateContactForm } from "../../Form/UpdateContactForm/UpdateContactForm"
import { StyledModalContainer } from "./style"

export const EditContactInfoModal = () => {
  const { setEditContactInfoModal } = useDashboardContext()
  return (
    <StyledModalContainer>

      <div className="modal">
        <div className="modalHeader">
          <h3>Atualize os dados do contato</h3>
          <Button
            type="submit"
            onClick={() => setEditContactInfoModal(false)}
            buttonText={"X"}
          />
        </div>
        <UpdateContactForm />


      </div>


    </StyledModalContainer>
  )
}