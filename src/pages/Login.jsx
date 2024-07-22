import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { auth, signInUserEmailAndPassword } from "../firebase";

const Login = () => {
  const navigate = useNavigate()
  const submit = (e) => {
    e.preventDefault()

    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    if (validate_email(email) === false || validate_password(password) === false){
      alert("wrong email or password format")
      return false
    }if (validate_field(email) === false || validate_password(password) === false){
      alert("Username cannot be blank")
    }else{
      signInUserEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          const user = userCredential.user
          console.log(user)
          // localStorage.setItem('accessToken', data._tokenResponse.idToken)
          alert('Login successfull')
          navigate('/Dashboard')
          // window.location.href = "./dashboard.html"
      })
      .catch((err) => {
          alert(err.message)
      })
    }

  }
    return ( 
        <>
      <div className="bg-[#8a8781] absolute top-0 bottom-0 right-0 left-0 -z-10"></div>
          <div className="modal modal-sheet position-static d-block p-4 py-md-5" tabIndex="-1" role="dialog" id="modalSignin">
        <div className="modal-dialog" role="document">
        <div className="modal-content rounded-4 shadow">
            {/* <!-- <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> -->         */}
            <div className="modal-header p-5 pb-4 border-bottom-0">
            <h1 className="fw-bold mb-0 fs-2">Log in</h1>  
            
        </div>
  
        <div className="modal-body p-5 pt-0">
          <form className="">
            <div className="form-floating mb-3 ">
              <input type="email" className="form-control rounded-3" id="email" placeholder="name@example.com"></input>
              <label htmlFor="floatingInput" className="mail">Email address</label>
            </div>
            <div className="form-floating mb-3 ">
              <input type="password" className="form-control rounded-3" id="password" placeholder="Password"></input>
              <label htmlFor="floatingPassword" className="pass">Password</label>
            </div>
            <button id="button" className="w-100 mb-2 btn btn-lg rounded-3 btn-primary signup text-white" onClick={(event)=>submit(event)}>log in</button>
            <span>Dont have an account?</span> <Link to="/Register" className="text-[#438B6A]">Register</Link>
            <hr className="my-4"></hr>
            {/* <!-- <h2 className="fs-5 fw-bold mb-3">Or use a third-party</h2>
            <button className="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3" type="submit">
              <svg className="bi me-1" width="16" height="16"><use xlink:href="#twitter"></use></svg>
              Sign up with Twitter
            </button>
            <button className="w-100 py-2 mb-2 btn btn-outline-primary rounded-3" type="submit">
              <svg className="bi me-1" width="16" height="16"><use xlink:href="#facebook"></use></svg>
              Sign up with Facebook
            </button>
            <button className="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3" type="submit">
              <svg className="bi me-1" width="16" height="16"><use xlink:href="#github"></use></svg>
              Sign up with GitHub
            </button> --> */}
          </form>
        </div>
      </div>
    </div>
    </div>
        </>
     );
}
 
export default Login;

function validate_email(email){
  var expression = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g    //eslint-disable-line
  if (expression.test(email) === true){
      return true
  }
  else{
      return false
  }
}

function validate_password(password){
  if (password < 6){
      return false
  }else{
      return true
  }

}

function validate_field(field){
  if (field.length <= 0){
      return false
  }
  else{
      return true
  }
}