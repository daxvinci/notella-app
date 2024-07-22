import { useEffect, useState } from "react";
import { storage,refStorage,uploadBytes2,getDownloadURL2 } from "../firebase";



const Profile = ({user,mail,propic,setPropic,uId}) => {
    const [edit,setEdit] = useState(false)


    const storageRef = refStorage(storage, 'profile/' + uId)

        const handleChange = async(e)=>{
        const newFile = e.target.files[0]

        if (!newFile) {
            console.error("No file selected");
            return;
          }
        try{
            // setPropic(URL.createObjectURL(newFile))
            await uploadBytes2(storageRef, newFile)
            const url = await getDownloadURL2(storageRef);
            setPropic(url);
        }
        catch(error){
            alert('error: ',error)
        }
    }

    const handleEdit =()=>{
        setEdit(!edit);
        edit && console.log('saved')
    }

    const handleDelete =()=>{
        console.log('delete')
    }

    useEffect(() => {
        const fetchProfilePicture = async () => {
          try {
            // const listRef = refStorage(storageRef);
            // const res = await listAll2(listRef);
            // res.items.forEach(async (img) => {
            //   const url = await getDownloadURL2(img);
            //   setPropic(url);
            // });
            if(storageRef){
                const url = await getDownloadURL2(storageRef);
                setPropic(url);
            }else{
                alert('pic empty')
            }
          } catch (err) {
            console.log(err);
          }
        };
    
        fetchProfilePicture();
      }, [setPropic,storageRef]);

    return ( 
        <>
        <div className="ml-[220px] flex justify-center items-center lg:h-[600px]">
            <div className="contain flex w-[55%] justify-between items-center lg:h-[70%] lg:gap-16">
                <div className="flex flex-col items-center left-pro lg:w-[40%]">
                    <div className="pic rounded-full border relative w-[300px] h-[300px] overflow-hidden "><input onChange={handleChange} className="pic-upload absolute top-0 left-0 h-full w-full opacity-0 cursor-pointer" type="file" name="profile" id="propic" /><img className="w-[300px] h-[300px] cursor-pointer" src={propic} alt="user profile"/></div>
                    <div className="edit mt-10 bg-sky-500 hover:bg-sky-600 px-3 py-1 rounded-2xl active:translate-y-2 relative"><input onChange={handleChange} className="pic-upload absolute top-0 left-0 h-full w-full opacity-0" type="file" name="profile" id="propic" /> <div className="edit-txt">Edit profile pic</div></div>
                </div>
                <div className="right-pro flex flex-col">
                    <div className="edit-user flex items-center mb-3 gap-4">
                    <div className="profile-username"><input readOnly={!edit} className={ !edit ? "username text-blue-500 outline-none rounded-lg bg-transparent":"text-blue-500 rounded-xl hover:ring-1 ring-blue-500 outline-0 px-3 shadow-md h-8"} defaultValue={user} type="text" name="username" id="username" /></div>
                    <button onClick={handleEdit} className="delete-account rounded-2xl bg-sky-500 cursor-pointer hover:bg-sky-600 px-3 py-1 active:translate-y-2 shadow-lg shadow-red-700">{ !edit ? 'Edit': 'Save'}</button>
                    </div>
                    <div className="profile-email">{mail}</div>
                    <div onClick={handleDelete} className="delete-account self-end rounded-3xl bg-red-500 cursor-pointer hover:bg-red-600 mt-16 px-2 py-2 active:translate-y-2 shadow-lg shadow-red-700">Delete account</div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Profile;