import { useDashboardContext } from "../../../hooks/useDashboardContext"
import { Button } from "../../Button/Button"
import { RegisterContactForm } from "../../Form/RegisterContactForm/RegisterContactForm"
import { StyledModalContainer } from "./style"

export const RegisterContactModal = () => {
  const { setRegisterContactModal } = useDashboardContext()
  return (
    <StyledModalContainer>

      <div className="modal">
        <div className="modalHeader">
          <h3>Registrar novo contato</h3>
          <Button
            type="submit"
            onClick={() => setRegisterContactModal(false)}
            buttonText={"X"}
          />
        </div>
        <RegisterContactForm />


      </div>


    </StyledModalContainer>
  )
}