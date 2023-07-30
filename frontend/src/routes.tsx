import { Routes, Route } from "react-router-dom"
import { Login } from "./pages/Login/Login"
import { Dashboard } from "./pages/Dashboard/Dashboard"
import { PrivateRoutes } from "./pages/PrivateRoutes/PrivateRoutes"
import { Register } from "./pages/Register/Register"

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<PrivateRoutes />}>

        <Route path="/dashboard" element={<Dashboard />} />
      </Route>

    </Routes>
  )
}
