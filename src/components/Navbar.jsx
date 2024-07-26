
import { IoIosMenu } from "react-icons/io";
import { Link } from "react-router-dom";
// import { useState } from "react";

const Navbar = ({setMenu}) => {
  // const [menu,setMenu] =useState(false)

  const handleMenu = ()=>{
    setMenu(true)
  }
  
    return ( 
        <header className="p-3">
        <div className="">
          <div className="flex justify-between ">
            <ul className="nav mb-2 items-center">
            <button onClick={handleMenu} className="menu md:hidden ml-2"><IoIosMenu size={30} /></button>
              <li><Link to="/" className="nav-link link text brand">Notella</Link></li>
              <li><Link to="/About" className="nav-link hidden md:block link mx-5 text px-2">About</Link></li>
              <li><Link to="/Contact" className="nav-link hidden md:block link text px-2">Contact us</Link></li>
            </ul>
    
            <div className="text-end px-3">
              <Link to="/Login" className="log"><button type="button" className="btn btn-outline-none me-2"> Login </button></Link>
              <Link to="/Register" className="log"><button type="button" className="btn btn-outline-none btn-color"> Sign-up </button></Link>
            </div>
          </div>
        </div>
      </header>
     );
}
 
export default Navbar;