import { auth, signOut2 } from "../firebase";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Side = ({user,setdashboard,propic}) => {

      const navigate = useNavigate()
      // const user = auth.currentUser;
      const nav = ()=>{
        setdashboard('home')
      }

      const signout = ()=>{
        signOut2(auth).then(() => {
          navigate('/')
          toast("Title and Note cannot be empty");
        }).catch((error) => {
          console.log(error)
        });
      }
  
    return ( 
        <>
        <ToastContainer 
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark" />
            <div className="side-nav z-10 d-flex flex-column flex-shrink-0 px-2 md:px-3 py-3 fixed top-3 bottom-0 md:w-[200px] left-3 md:left-0 rounded-t-3xl md:rounded-t-none md:rounded-tr-3xl bg-gray-700" id="sidenav">
              <ul className="nav nav-pills md:pr-6 flex items-center md:items-start flex-col mb-auto">
                <li className="my-4 border-b">
                  <button disabled='true' className="nav nav-link px-3 md:px-12 flex items-center text-white text-decoration-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi md:mr-3 bi-house" viewBox="0 0 16 16">
                      <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/>
                    </svg>
                  <span className="nav-item fs-4 hidden md:block">Notella</span>
                  </button>
                </li>

                  <li onClick={nav} className="w-full">
                    <button className="nav-link w-full nav1 px-3 md:px-12 flex cursor-pointer hover:bg-[#0d6efd]  text-white active" data-bs-toggle="list" aria-current="page">
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-house md:mr-3" viewBox="0 0 16 16">
                        <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/>
                      </svg>
                        <b className="nav-item hidden md:block">Home</b>
                    </button>
                  </li>

                  <li onClick ={() =>setdashboard('checklist')} className="my-3 w-full">
                    <button className="nav-link nav2 w-full px-3 md:px-12 flex cursor-pointer hover:bg-[#0d6efd] text-white" data-bs-toggle="list">
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="md:mr-3 bi bi-list-task" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H2zM3 3H2v1h1V3z"/>
                        <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9z"/>
                        <path fillRule="evenodd" d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7zM2 7h1v1H2V7zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H2zm1 .5H2v1h1v-1z"/>
                      </svg>
                      <b className="nav-item hidden md:block">Checklist</b>
                    </button>
                  </li>
                </ul>

                {/* profile */}
                <div className="dropdown border-t pt-3">
                  <a href="/dropdown" className="d-flex gap-1 w-full h-[40px] align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <div className="img-cover rounded-full overflow-hidden h-[30px] md:h-[40px] w-[30px] md:w-[40px] mr-1 md:mr-3 "><img src={propic} alt="profile pic" className="object-cover h-full w-full"></img></div>
                    <strong className="nav-item hidden md:block">{user}</strong>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark z-50 text-small shadow">
                    <li><button onClick={() => setdashboard('profile')} className="dropdown-item">Profile</button></li>
                    <li><hr className="dropdown-divider"></hr></li>
                    <li><button className="dropdown-item" onClick={signout} >Sign out</button></li>
                  </ul>
                </div>
              </div>
        </>
     );
}
 
export default Side;