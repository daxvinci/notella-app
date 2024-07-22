import Navbar from "../components/Navbar";
const About = () => {
    return ( 
        <>
        <div className="bg-[#FAE5BA]">
        < Navbar />
      {/* <div className="bg-[#FAE5BA] absolute top-0 bottom-0 right-0 left-0 -z-10"></div> */}
        <div className="row align-items-md-stretch justify-content-center gap-2 mx-3">
        <div className="col-md-8 col-about rounded-3">
          <div className="h-100 p-5 ">
            <u><h2>About Our Note Web App</h2></u>
            <p>Welcome to our note-taking web app, your go-to platform for organizing your thoughts, ideas, and tasks effortlessly. At Notella, we believe that capturing and managing your thoughts should be simple, intuitive, and accessible from anywhere.</p>
          </div>
        </div>
        <div className="col-md-8 col-about rounded-3">
          <div className="h-100 p-5">
            <u><h2>Our Story</h2></u>
            <p>Our journey began with a simple idea: to create a digital notebook that replicates the convenience and flexibility of physical note-taking. We wanted to provide a tool that empowers individuals and professionals alike to declutter their minds and boost their productivity. Our team of passionate developers and designers came together to turn this vision into reality.</p>
          </div>
        </div>
        <div className="col-md-8 col-about rounded-3">
          <div className="h-100 p-5 ">
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