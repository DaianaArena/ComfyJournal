
import { BrowserRouter, Routes, Route, NavLink } from "react-router";
import { JournalScreen, LoginScreen } from "../components"
import { AuthRouter } from "./AuthRouter";

export const AppRouter = () => {
  return (
    <>

    <BrowserRouter>
    <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
    <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/auth">Log in | Sign up</NavLink>
            </li>
              <li><NavLink to="/journal">Journal</NavLink></li>
            
          </ul>
          
        </div>
    

    <Routes>
      <Route path="/auth/*" element={<AuthRouter />} />
      
      <Route path="/journal" element={<JournalScreen />} />
      
      
    </Routes>
  </BrowserRouter>
    </>
  )
}
//<Route path="/auth/login" element={<LoginScreen />} />
//<Route path="/*" element={<AuthRouter />} />
