import { AppRouter } from "../../routers";
import { LoggedUser } from "./LoggedUser";
import { LogOutUser } from "./LogOutUser";

const LOG = true;

export const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
       <AppRouter/>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl">ComfyJournal</a>
      </div>
      <div className="navbar-end">
        {LOG? 
    <LoggedUser/>:
    <LogOutUser/>    
    }
        
      </div>
    </div>
  );
};
