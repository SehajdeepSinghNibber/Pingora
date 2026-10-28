import { Routes ,Route, Navigate } from "react-router-dom"
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"
import SignUpPage from "./pages/SignUpPage"
import LoginPage from "./pages/LoginPage"
import SettingsPage from "./pages/SettingsPage"
import ProfilePage from "./pages/ProfilePage"
import { useAuthStore } from "./store/useAuthStore"
import { useEffect } from "react"
import Loader from "./components/Loader"

const App = () => {

  const {authUser,checkAuth,isCheckingAuth} = useAuthStore();

  useEffect(()=>{
    checkAuth()
  },[checkAuth])

  console.log(authUser)

  if(isCheckingAuth && !authUser) return (
    <Loader/>
  )

  return (
    <div>

      <Navbar />

      <Routes>
        <Route path="/" element={authUser?<HomePage/>:<Navigate to="/login"/>} />
        <Route path="/signup" element={!authUser?<SignUpPage/>:<Navigate to="/"/>}/>
        <Route path="/login" element={!authUser?<LoginPage/>:<Navigate to="/"/>}/>
        <Route path="/profile" element={authUser?<ProfilePage/>:<Navigate to="/login"/>}/>
        <Route path="/settings" element={authUser?<SettingsPage/>:<Navigate to="/login"/>}/>
      </Routes>

    </div>
  )
}

export default App
