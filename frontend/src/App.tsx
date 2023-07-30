import { ToastContainer } from "react-toastify"
import { DashboardProvider } from "./contexts/DashboardContext"
import { UserProvider } from "./contexts/UserContext"
import { RoutesMain } from "./routes"


export const App = () => {
  return (

    <DashboardProvider>
      <UserProvider>
        <RoutesMain />
      </UserProvider>
      <ToastContainer />
    </DashboardProvider>


  )

}

export default App
