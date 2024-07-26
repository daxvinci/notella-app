import { useState } from "react";
import Navbar from "./components/Navbar";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";

const LandingPage = () => {
   const [menu,setMenu] =useState(false)

   const menuClose =()=>{
    setMenu(false)
   }

    return ( 
        <>
        <div className="bg-[#FAE5BA] lg:px-16 min-h-screen w-screen">
        {menu && <div className="menu absolute flex flex-col gap-6 right-0 top-0 left-0 z-50 bottom-0 py-4 px-6 bg-zinc-800 text-slate-200">
                <div className="close self-end" onClick={menuClose}><IoClose color="#f5f5f5" /></div>
                <div className="popup-menu flex flex-col h-20 text-2xl gap-4 justify-between">
                <div className="about font-rest py-2 px-2 border-slate-200">About us</div>
                <div className="search font-rest py-2 px-2 border-slate-200">Search</div>
                </div>
            </div>}
        < Navbar setMenu={setMenu} />

      {/* Main landing */}
      {/* <div className="bg-[#FAE5BA] absolute top-0 bottom-0 right-0 left-0 -z-10"></div> */}
      <div className="container col-xxl-8 px-4 mt-2 md:mt-5 pt-2 w-full">
        <div className="w-full flex flex-col md:flex-row-reverse lg:justify-between align-items-center gap-4 pt-3">
          <div className=" w-[40%] md:w-[30%]">
            <img src="./assets/notes (1).png" className="d-block mx-lg-auto " alt="Note pad" width="400" height="400" loading="lazy"></img>
          </div>
          <div className="lg:w-[50%]">
            <h1 className="text-3xl text-center md:text-start md:text-4xl fw-bold  lh-1 mb-3 text">Take Notes and Access them Whenever and wherever</h1>
            <p className="lead text text-base text-center md:text-start font-semibold">Keep records of your Ideas, Reminders and Tasks across all devices and anywhere. </p>
            <div className="mt-6 md:block flex justify-center">
              <Link to="/Login" className="log"><button type="button" className="btn btn-lg px-4 me-md-2 btn-color">Noted</button></Link> 
            </div>
          </div>
        </div>
      </div>
      </div>
        </>
     );
}
 
export default LandingPage;