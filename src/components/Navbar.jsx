import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <header className="p-3">
        <div className="">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
    
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li><Link to="/" className="nav-link link text mx-5 brand">Notella</Link></li>
              <li><Link to="/About" className="nav-link link text px-2">About</Link></li>
              <li><Link to="/Contact" className="nav-link link text px-2">Contact us</Link></li>
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