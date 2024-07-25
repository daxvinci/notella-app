import { Link, useNavigate } from "react-router-dom";
import { auth, createUserEmailAndPassword,updateProfile2} from "../firebase";

const Register = () => {
    const navigate = useNavigate()
    
    const submit = async (e) => {
    e.preventDefault()
    const username =  e.target.username.value  //document.getElementById("username").value
    const email = e.target.email.value //document.getElementById("email").value
    const password = e.target.password.value //document.getElementById("password").value

    if (validate_email(email) === false || validate_password(password) === false){
      alert("wrong email or password format")
      return false
    }
    if (validate_field(username) === false){
      alert("Username cannot be blank")
      return false
    }
      try {
      const userCredential = await createUserEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await updateProfile2(user, { displayName: username });
      alert('Sign-up successful');
      navigate('/Dashboard');
    } catch (err) {
      alert(err.message);
    }
  }


    return ( 
        <>
        <div className="bg-[#8a8781] min-h-screen">
          <div className="modal modal-sheet position-static d-block" tabIndex="-1" role="dialog" id="modalSignin">
    <div className="modal-dialog relative" role="document">
      <div className="modal-content rounded-4 shadow">
        <div className="modal-header p-5 pb-4 border-bottom-0">
          <h1 className="fw-bold mb-0 fs-2">Sign up</h1>
          {/* <!-- <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> --> */}
        </div>
  
        <div className="modal-body p-5 pt-0">
          <form onSubmit={submit} className="form">
            <div className="form-floating mb-3 ">
              <input type="text" name="username" className="form-control rounded-3" id="username" placeholder="name"></input>
              <label htmlFor="floatingInput" className="mail">Username</label>
            </div>
            <div className="form-floating mb-3 ">
              <input type="email" name="email" className="form-control rounded-3" id="email" placeholder="name@example.com"></input>
              <label htmlFor="floatingInput" className="mail">Email address</label>
            </div>
            <div className="form-floating mb-3 ">
              <input type="password" name="password" className="form-control rounded-3" id="password" placeholder="Password"></input>
              <label htmlFor="floatingPassword" className="pass">Password</label>
            </div>
            <button type="submit" id="button" className="w-100 mb-2 btn btn-lg rounded-3 btn-primary signup text-white" >Sign up</button>
            <span>Already have an account?</span> <Link to = "/Login" className="text-[#438B6A]">log in </Link>
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
  </div>
        </>
     );
}
 
export default Register;

function validate_email(email){
  var expression = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g  //eslint-disable-line
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
