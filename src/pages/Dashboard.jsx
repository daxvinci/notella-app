import Side from "../components/Side";
import Main from "../components/Main";
import { auth, onAuthStateChanged2, refStorage, storage, getDownloadURL2 } from "../firebase";
import { useState,useEffect } from "react";
import Profile from "../components/Profile";
import Checklist from "../components/Checklist";


const Dashboard = () => {

    const [email,setEmail] = useState('')
    const [username,setUsername] = useState('')
    const [dashboard, setdashboard] = useState('home')
    const [uId, setUId] = useState('')
    const [propic,setPropic] = useState([{default:'https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?t=st=1721181173~exp=1721184773~hmac=5e18048e55f60a4f22143865aa605e99a28e73598361e50b0348acd46bf5fa1a&w=740',}])


        
    useEffect(() => {
        const fetchProfilePic = async (userId) => {
            try {
                const url = await getDownloadURL2(refStorage(storage, 'profile/' + userId));
                setPropic(url);
            } catch (error) {
                console.error("Error fetching profile picture: ", error);
            }
        };

        const user = auth.currentUser;
        // const userId = user.uid;
        if (user) {
            setUsername(user.displayName);
            setUId(user.uid)
            setEmail(user.email)
            fetchProfilePic(user.uid);
            
        }else {
            const unsubscribe = onAuthStateChanged2(auth,(user) => {
                if (user) {
                    setUsername(user.displayName);
                    setUId(user.uid)
                    setEmail(user.email)
                    fetchProfilePic(user.uid)
                }
            });

            // Cleanup subscription on unmount
            return () => unsubscribe();
        }
    }, [uId,username]);

    return ( 
        <>
    <div className="dashboard-container min-h-screen bg-amber-100">
        <div className="md:px-4 md:py-4 h-full">
            < Side propic = {propic} user={username} setdashboard = {setdashboard} />
            {dashboard === 'home' && < Main user ={username} uId = {uId} />}
            {dashboard === 'profile' && < Profile uId = {uId} setPropic = {setPropic} propic={propic} user ={username} mail={email} />}
            {dashboard === 'checklist' && < Checklist uId={uId} />}
        </div>
    </div>
        </>
     );
}
 
export default Dashboard;
