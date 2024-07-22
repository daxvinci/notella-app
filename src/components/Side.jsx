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
            <div className="side-nav d-flex flex-column flex-shrink-0 px-3 py-3 fixed top-3 bottom-0 w-[200px] left-0 rounded-tr-3xl bg-gray-700" id="sidenav">
              <ul className="nav nav-pills flex flex-col mb-auto">
                <li className="my-4 border-b">
                  <button onClick={nav} className="nav nav-link flex items-center text-white text-decoration-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi mr-3 bi-house" viewBox="0 0 16 16">
                      <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/>
                    </svg>
                  <span className="nav-item fs-4">Notella</span>
                  </button>
                </li>
                
                  <li onClick ={() =>setdashboard('home')}>
                    <span className="nav-link nav1 flex cursor-pointer hover:bg-[#0d6efd]  text-white active" data-bs-toggle="list" aria-current="page">
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-house mr-3" viewBox="0 0 16 16">
                        <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/>
                      </svg>
                        <b className="nav-item">Home</b>
                    </span>
                  </li>
                  <li onClick ={() =>setdashboard('checklist')} className="my-3">
                    <span className="nav-link nav2 flex cursor-pointer hover:bg-[#0d6efd] text-white" data-bs-toggle="list">
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="mr-3 bi bi-list-task" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H2zM3 3H2v1h1V3z"/>
                        <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9z"/>
                        <path fillRule="evenodd" d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7zM2 7h1v1H2V7zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H2zm1 .5H2v1h1v-1z"/>
                      </svg>
                      <b className="nav-item">Checklist</b>
                    </span>
                  </li>
                  {/* <li>
                    <a href="/#" className="nav-link nav3 flex hover:bg-[#0d6efd] text-white" data-bs-toggle="list">
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="mr-3 bi bi-trash3" viewBox="0 0 16 16">
                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                      </svg>
                     <b className="nav-item">Trash</b> 
                    </a>
                  </li> */}
                </ul>

                {/* profile */}
                <div className="dropdown border-t pt-3">
                  <a href="/dropdown" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src={propic} alt="profile pic" width="32" height="32" className="rounded-circle me-2"></img>
                    <strong className="nav-item">{user}</strong>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
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