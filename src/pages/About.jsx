import Navbar from "../components/Navbar";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const About = () => {
  const [menu,setMenu] =useState(false)

   const menuClose =()=>{
    setMenu(false)
   }

    return ( 
        <>
        <div className="bg-[#FAE5BA] min-h-screen">
        {menu && <div className="menu absolute flex flex-col gap-6 right-0 top-0 left-0 z-50 bottom-0 py-4 px-6 bg-zinc-800 text-slate-200">
                <div className="close self-end" onClick={menuClose}><IoClose color="#f5f5f5" /></div>
                <div className="popup-menu flex flex-col h-20 text-2xl gap-4 justify-between">
                <div className="about font-rest py-2 px-2 border-slate-200">About us</div>
                <div className="search font-rest py-2 px-2 border-slate-200">Search</div>
                </div>
            </div>}
        < Navbar setMenu={setMenu} />
      {/* <div className="bg-[#FAE5BA] absolute top-0 bottom-0 right-0 left-0 -z-10"></div> */}
        <div className="flex flex-col gap-2 mx-3">
        <div className="col-about">
          <div className="p-4">
            <u><h2>About Our Note Web App</h2></u>
            <p>Welcome to our note-taking web app, your go-to platform for organizing your thoughts, ideas, and tasks effortlessly. At Notella, we believe that capturing and managing your thoughts should be simple, intuitive, and accessible from anywhere.</p>
          </div>
        </div>
        <div className="col-about">
          <div className="p-4">
            <u><h2>Our Story</h2></u>
            <p>Our journey began with a simple idea: to create a digital notebook that replicates the convenience and flexibility of physical note-taking. We wanted to provide a tool that empowers individuals and professionals alike to declutter their minds and boost their productivity. Our team of passionate developers and designers came together to turn this vision into reality.</p>
          </div>
        </div>
        <div className="col-about">
          <div className="p-4">
            <u><h2>What Sets Us Apart</h2></u>
            <ul>
                <li><strong>User-Centric Design:</strong> We prioritize user experience and have designed our app to be clean, intuitive, and user-friendly. Whether you're a tech-savvy enthusiast or a newcomer to digital note-taking, you'll find our app easy to navigate.</li>
                <li><strong>Sync Across Devices:</strong> Your notes sync in real-time across all your devices, ensuring you never miss a beat, whether you're at home, in the office, or on the go.</li>
                <li><strong>Collaboration Made Easy:</strong> Collaborate with colleagues, friends, or family on shared notes and projects. Enhance teamwork and creativity effortlessly.</li>
                <li><strong>Security and Privacy:</strong> We take your data seriously. Rest assured, your notes are encrypted and securely stored, so your thoughts remain private and protected.</li>
                <li><strong>Customization:</strong> Tailor your note-taking experience with a variety of formatting options, templates, and organizational tools to suit your unique needs.</li>
            </ul>
          </div>
        </div>
      </div>
      </div>
        </>
     );
}
 
export default About;