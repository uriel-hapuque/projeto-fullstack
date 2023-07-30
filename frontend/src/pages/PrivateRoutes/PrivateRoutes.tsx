import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"

export const PrivateRoutes = () => {
  const token = localStorage.getItem("RelationsManager:token")
  const navigate = useNavigate()

  useEffect(() => {
    if (!token) {
      navigate("/")
    }
  }, [])

  return <Outlet />
}