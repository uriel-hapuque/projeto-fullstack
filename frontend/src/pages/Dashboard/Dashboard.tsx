import { useUserContext } from "../../hooks/useUserContext"
import { useDashboardContext } from "../../hooks/useDashboardContext"
import { Button } from "../../components/Button/Button"
import { DeleteUserModal } from "../../components/Modals/DeleteUserModal/DeleteUserModal"
import { DeleteContactModal } from "../../components/Modals/DeleteContactModal/DeleteContactModal"
import { EditContactInfoModal } from "../../components/Modals/EditContactInfoModal/EditContactInfoModal"
import { EditUserInfoModal } from "../../components/Modals/EditUserInfoModal/EditUserInfoModal"
import { RegisterContactModal } from "../../components/Modals/RegisterContactModal/RegisterContactModal"
import { StyledDashboard } from "./style"

export interface iContact {
  id: number,
  name: string
  email: string
  password: string
  number: string
  createdAt: string | Date
}

export const Dashboard = () => {

  const { logout, user, } = useUserContext()
  const { deleteContactModal, setDeleteUserModal, deleteUserModal, setDeleteContactModal, contacts, setEditUserInfoModal, editUserInfoModal, setContactId, setEditContactInfoModal, editContactInfoModal, setRegisterContactModal, registerContactModal } = useDashboardContext()

  return (

    <StyledDashboard>
      <header>
        <h1 className="dashOwner">Dashboard de {user?.name}</h1>
        <div>

          <Button type="submit" buttonText="Deletar conta" onClick={() => setDeleteUserModal(true)} />
          <Button type="submit" buttonText="Editar dados da conta" onClick={() => setEditUserInfoModal(true)} />
          <Button type="submit" buttonText="Registrar novo contato" onClick={() => setRegisterContactModal(true)} />
          <Button type="submit" buttonText="Fazer logout" onClick={() => logout()} />
        </div>

      </header>
      <h2>Contatos:</h2>
      <ul>
        {
          contacts.length === 0 ? (
            <h3>Você ainda não tem contatos cadastrados</h3>
          ) : (
            contacts.map((contact) => <>
              <li key={contact.id}>
                Nome: {contact.name} <br />
                <br />
                Número de telefone: {contact.number} <br />
                <br />
                Email: {contact.email} <br />

                <div className="contactsButtons">
                  <Button type="submit" buttonText={`Deletar contato`} onClick={() => {
                    setContactId(contact.id)
                    setDeleteContactModal(true)
                  }} />

                  <Button type="submit" onClick={() => {
                    setContactId(contact.id)
                    setEditContactInfoModal(true)
                  }} buttonText={"Editar contato"} />
                </div>

              </li>



            </>)
          )
        }
      </ul>
      {registerContactModal && <RegisterContactModal />}
      {editUserInfoModal && <EditUserInfoModal />}
      {editContactInfoModal && <EditContactInfoModal />}
      {deleteContactModal && <DeleteContactModal />}
      {deleteUserModal && <DeleteUserModal />}
    </StyledDashboard>
  )
}