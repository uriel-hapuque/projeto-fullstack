import { DashboardProvider } from "./contexts/DashboardContext"
import { UserProvider } from "./contexts/UserContext"
import { RoutesMain } from "./routes"


export const App = () => {
  return (

    <DashboardProvider>
      <UserProvider>
        <RoutesMain />
      </UserProvider>
    </DashboardProvider>


  )

}

export default App
