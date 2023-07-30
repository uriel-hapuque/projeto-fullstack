import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { useUserContext } from "../../hooks/useUserContext"
import { UpdateUserForm } from "../../components/Form/UpdateUserForm/UpdateUserForm"
import { useDashboardContext } from "../../hooks/useDashboardContext"
import { RegisterContactForm } from "../../components/Form/RegisterContactForm/RegisterContactForm"
import { Button } from "../../components/Button/Button"
import { DeleteUserModal } from "../../components/Modals/DeleteUserModal/DeleteUserModal"
import { DeleteContactModal } from "../../components/Modals/DeleteContactModal/DeleteContactModal"
import { EditContactInfoModal } from "../../components/Modals/EditContactInfoModal/EditContactInfoModal"
// import { UpdateContactForm } from "../../components/Form/UpdateContactForm/UpdateContactForm"



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
  const { deleteContactModal, setDeleteUserModal, deleteUserModal, setDeleteContactModal, contacts, contactId, setContactId, setEditContactInfoModal, editContactInfoModal } = useDashboardContext()

  return (
    <>

      <Button type="submit" buttonText="Deletar conta" onClick={() => setDeleteUserModal(true)} />
      {/* <UpdateUserForm /> */}
      <button onClick={() => logout()}>Sair</button>
      <h1>Dashboard de {user?.name}</h1>
      <ul>
        {contacts.map((contact) => <>
          <li key={contact.id}>{contact.name}, {contact.number},{contact.email}</li>

          <Button type="submit" buttonText={`Deletar contato ${contact.number}`} onClick={() => {
            setContactId(contact.id)
            setDeleteContactModal(true)
          }} />

          <Button type="submit" onClick={() => {
            setContactId(contact.id)
            setEditContactInfoModal(true)
          }} buttonText={"Editar contato"} />

        </>)}
      </ul>
      <RegisterContactForm />
      {editContactInfoModal && <EditContactInfoModal />}
      {deleteContactModal && <DeleteContactModal />}
      {deleteUserModal && <DeleteUserModal />}

    </>

  )
}