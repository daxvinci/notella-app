import Navbar from "./components/Navbar";
import { Link } from "react-router-dom";
const LandingPage = () => {
    return ( 
        <>
        < Navbar />

      {/* Main landing */}
      <div className="bg-[#FAE5BA] absolute top-0 bottom-0 right-0 left-0 -z-10"></div>
      <div className="container col-xxl-8 px-4 mt-5 pt-2">
        <div className="row flex-lg-row-reverse align-items-center g-5 pt-3">
          <div className="col-10 col-sm-8 col-lg-6">
            <img src="./assets/notes (1).png" className="d-block mx-lg-auto " alt="Note pad" width="400" height="400" loading="lazy"></img>
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold  lh-1 mb-3 text">Take Notes and Access them Whenever and wherever</h1>
            <p className="lead text font-semibold">Keep records of your Ideas, Reminders and Tasks across all devices and anywhere. </p>
            <div className="d-grid mt-6 gap-2 d-md-flex justify-content-md-start">
              <Link to="/Login" className="log"><button type="button" className="btn btn-lg px-4 me-md-2 btn-color">Noted</button></Link> 
            </div>
          </div>
        </div>
      </div>
        </>
     );
}
 
export default LandingPage;