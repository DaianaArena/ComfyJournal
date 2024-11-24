
import {  NavLink, Route, Routes } from 'react-router-dom'

import { LoginScreen, RegisterScreen } from "../components"

export const AuthRouter = () => {
  return (
    <>
        <div>
            <span><NavLink to="/auth/login">Log in</NavLink></span>
            
            <span><NavLink to="/auth/signup">Sign up</NavLink></span>
        </div>

    <Routes>
      <Route path="/auth/login" element={<LoginScreen />} />
      
      <Route path="/auth/signup" element={<RegisterScreen />} />
    </Routes>
    </>
    
  )
}
