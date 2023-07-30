import { useContext } from "react"
import { DashboardContext } from "../contexts/DashboardContext"

export const useDashboardContext = () => {
  const dashboardContext = useContext(DashboardContext)

  if (!dashboardContext) {
    throw "Contexto não encontrado!"
  }

  return dashboardContext
}