import { useDashboardContext } from "../../../hooks/useDashboardContext"
import { Button } from "../../Button/Button"
import { StyledModalContainer } from "./style"

export const DeleteContactModal = () => {
  const { setDeleteContactModal, deleteContact, contactId } = useDashboardContext()

  return (
    <StyledModalContainer>
      <div className="modal">
        <div className="modalHeader">
          <h3>Tem certeza que quer deletar o contato?</h3>
          <Button
            type="submit"
            onClick={() => setDeleteContactModal(false)}
            buttonText={"Fechar"}
          />
        </div>

        <Button type="submit" buttonText="Deletar conta" onClick={() => {
          deleteContact(contactId)
          setDeleteContactModal(false)
        }} />
      </div>

    </StyledModalContainer>
  )
}