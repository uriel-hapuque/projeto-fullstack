import { ReactNode, createContext, useEffect, useState } from "react"
import { api } from "../services/api"
import { iContact } from "../pages/Dashboard/Dashboard"

interface iChildrenProps {
  children: ReactNode
}
export interface iContactRequest {
  name: string,
  number: string,
  email: string
}

interface iDashboardContextValues {
  deleteContact: (contactId: number) => Promise<void>
  registerContact: (data: iContactRequest) => Promise<void>
  updateContact: (data: iContactRequest) => Promise<void>
  registerContactModal: boolean
  setRegisterContactModal: React.Dispatch<React.SetStateAction<boolean>>;
  deleteContactModal: boolean
  setDeleteContactModal: React.Dispatch<React.SetStateAction<boolean>>;
  deleteUserModal: boolean
  setDeleteUserModal: React.Dispatch<React.SetStateAction<boolean>>
  editUserInfoModal: boolean
  setEditUserInfoModal: React.Dispatch<React.SetStateAction<boolean>>
  editContactInfoModal: boolean
  setEditContactInfoModal: React.Dispatch<React.SetStateAction<boolean>>
  contacts: iContact[]
  contactId: number
  setContactId: React.Dispatch<React.SetStateAction<number>>
}
export const DashboardContext = createContext({} as iDashboardContextValues)

export const DashboardProvider = ({ children }: iChildrenProps) => {
  const [contacts, setContacts] = useState<iContact[]>([])
  useEffect(() => {
    (async () => {
      const response = await api.get<iContact[]>("/contacts")

      setContacts(response.data)
    })()


  }, [contacts])

  const [registerContactModal, setRegisterContactModal] = useState(false)

  const [deleteContactModal, setDeleteContactModal] = useState(false)

  const [deleteUserModal, setDeleteUserModal] = useState(false)

  const [editUserInfoModal, setEditUserInfoModal] = useState(false)

  const [editContactInfoModal, setEditContactInfoModal] = useState(false)

  const [contactId, setContactId] = useState(0)

  const registerContact = async (data: iContactRequest) => {
    try {
      const token: string | null = localStorage.getItem("RelationsManager:token")
      const response = await api.post("/contacts/", data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })


    } catch (error) {
      console.log(error)
    }
  }

  const updateContact = async (data: iContactRequest) => {
    try {
      const token: string | null = localStorage.getItem("RelationsManager:token")
      console.log(contactId)
      const response = await api.patch(`/contacts/${contactId}`, data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })


    } catch (error) {
      console.log(error)
    }
  }

  const deleteContact = async (contactId: number) => {
    try {
      const token: string | null = localStorage.getItem("RelationsManager:token")
      await api.delete(`/contacts/${contactId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

    } catch (error) {
      console.log(error)
    }
  }
  return (
    <DashboardContext.Provider value={{
      deleteContact, registerContact, updateContact, registerContactModal, setRegisterContactModal,
      deleteContactModal,
      setDeleteContactModal,
      deleteUserModal,
      setDeleteUserModal,
      editUserInfoModal,
      setEditUserInfoModal,
      editContactInfoModal,
      setEditContactInfoModal, contacts, contactId, setContactId
    }}>
      {children}
    </DashboardContext.Provider>
  )
}
