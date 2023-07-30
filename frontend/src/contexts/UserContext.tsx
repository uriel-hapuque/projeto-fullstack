import { ReactNode, createContext, useEffect, useState } from "react";
import { tLoginValidator } from "../pages/Login/validator";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom"
import { tRegisterValidator } from "../pages/Register/validator";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export interface iChildrenProp {
  children: ReactNode
}

export interface updateUserValidator {
  name: string,
  number: string
}

interface iUserContextValues {
  registerUser: (data: tRegisterValidator) => Promise<void>
  deleteUser: (userId: number | undefined) => Promise<void>
  updateUser: (data: updateUserValidator) => Promise<void>
  login: (data: tLoginValidator) => Promise<void>
  logout: () => Promise<void>
  user: iUser | null
  setUser: React.Dispatch<React.SetStateAction<iUser | null>>;
}

interface iLoginResponse {
  token: string
  user: iUser
}

interface iUser {
  id: number,
  createAt: string,
  number: string,
  name: string,
  email: string
}



export const UserContext = createContext({} as iUserContextValues)

export const UserProvider = ({ children }: iChildrenProp) => {
  const navigate = useNavigate()
  const [user, setUser] = useState<iUser | null>(null)
  useEffect(() => {

    const getUser = async () => {
      try {
        const userId: string | null = localStorage.getItem("RelationsManager:userId")
        const response = await api.get(`users/${userId}`);
        setUser(response.data)
      } catch (error) {
        console.error(error);
      }

    }

    const token = localStorage.getItem("RelationsManager:token")

    if (!token) {
      return
    }

    api.defaults.headers.common.Authorization = `Bearer ${token}`

    getUser()

  }, [user])

  const deleteUser = async (userId: number | undefined) => {
    try {
      const token: string | null = localStorage.getItem("RelationsManager:token")
      await api.delete(`/users/${String(userId)}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      toast.info("Usuário deletado!", {
        autoClose: 3000,
      });

      localStorage.clear()

      navigate("/")
    } catch (error: any) {
      toast.error(error.response.data.message, {
        autoClose: 3000,
      });
    }
  }

  const updateUser = async (data: updateUserValidator) => {
    try {
      const token: string | null = localStorage.getItem("RelationsManager:token")
      const userId: string | null = localStorage.getItem("RelationsManager:userId")
      await api.patch(`/users/${String(userId)}`, data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      toast.success("Dados do usuário atualizados com sucesso!", {
        autoClose: 3000,
      });
    } catch (error: any) {
      toast.error(error.response.data.message, {
        autoClose: 3000,
      })
    }

  }

  const registerUser = async (data: tRegisterValidator) => {
    try {
      await api.post("/users", data);
      toast.success("Usuário registrado com sucesso!", {
        autoClose: 3000,
      });
      navigate("/");
    } catch (error: any) {
      toast.error(error.response.data.message, {
        autoClose: 3000,
      });
    }
  }

  const login = async (data: tLoginValidator) => {
    try {
      const response = await api.post<iLoginResponse>("/login", data)
      const token: string = response.data.token
      const userId: number = response.data.user.id

      api.defaults.headers.common.Authorization = `Bearer ${token}`
      localStorage.setItem("RelationsManager:token", token)
      localStorage.setItem("RelationsManager:userId", String(userId))
      setUser(response.data.user)
      toast.success("Usuário logado com sucesso", {
        autoClose: 3000,
      });

      setTimeout(() => {
        navigate("dashboard")
      }, 2000);

    } catch (error: any) {
      toast.error(error.response.data.message, {
        autoClose: 3000,
      });
    }

  }

  const logout = async () => {

    toast.info("Usuário deslogado!", {
      autoClose: 3000,
    });
    setTimeout(() => {
      navigate("/");
    }, 1000);

    localStorage.removeItem("RelationsManager:token")
  }

  return (

    <UserContext.Provider value={{ login, registerUser, logout, deleteUser, user, setUser, updateUser }}>
      {children}
    </UserContext.Provider>
  )
}