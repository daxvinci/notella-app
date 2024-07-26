
import { db,child2,remove2,set2,ref2,get2 } from "../firebase";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Main = ({user,uId}) => {

    // const [noted,setNoted] = useState()
    const [write,setWrite] = useState(false)
    const [rewrite,setRewrite] = useState(false)
    const [notes,setNotes] = useState([])
    const [renote,setRenote] = useState(null)
    const [count,setCount] = useState(0)
    const [deleteBox,setDeleteBox] = useState(false)
    const [noteToDelete,setNoteToDelete] = useState(null)
    const [isLoading,setIsLoading]  = useState(false)
    const [search, setSearch] = useState('')

 
    const createNewNote = () => {
        setWrite(true);
    };

    const cancel = () => {
        setWrite(false);
        setRewrite(false);
        setRenote(null);
    };

    const submit = () => {
        const title = document.getElementById('title').value;
        const note = document.getElementById('notes').value;

        if (title === "" || note === "") { 
            toast("Title and Note cannot be empty");
            return;
        }
        const newCount = count + 1; 
        const newNotes = { id: newCount, title: title, note: note };
        setNotes([...notes, newNotes]);
        writeUserData(uId, newCount, title, note);
        setCount(newCount);
        setWrite(false);
    };

    const update = (id) => {
        console.log("Update called with id:", id); 
        const noteToUpdate = notes.find((note) => note.id === id);
        console.log("Found note to update:", noteToUpdate);
        if (noteToUpdate) {
            setRenote(noteToUpdate);
            setRewrite(true);
        } else {
            toast("Note not found");
        }
    };

    const submitUpdate = (id) => {
        const renoteTitle = document.getElementById('newtitle').value;
        const renoteNote = document.getElementById('newnotes').value;
        if (renoteTitle === "" || renoteNote === "") {
            alert("Title and Note cannot be empty");
            return;
        }
        const newNote = {
            id: id,
            title: renoteTitle,
            note: renoteNote,
        };
        const updatedNotes = notes.map(note => note.id === id ? newNote : note); 
        setNotes(updatedNotes);
        setRewrite(false);
        setRenote(null);
        writeUserData(uId,id, renoteTitle, renoteNote);
    };

    const trulyDeleteNote = () => {
        const newNotes = notes.filter((noted) => noted.id !== noteToDelete);
        setNotes(newNotes);
        setDeleteBox(false);
        removeFirstData(noteToDelete,uId);
    };

    const deleteNote = (id) => {
        setDeleteBox(true);
        setNoteToDelete(id);
    };

    useEffect(() => {
        setIsLoading(true);
        // auth.onAuthStateChanged((uId)=>{return uId})
        // if (!uId) {
        //     console.warn('uId is undefined. Skipping data fetching.');
        //     return;
        // }

        get2(child2(ref2(db), 'users/'))
        .then((snapshot) => {
            if (snapshot.exists()) {
                const data = snapshot.val();
                if (data && data[uId]) {
                    const notesArray = Object.keys(data[uId]).map(key => ({
                        id: data[uId][key].id,
                        title: data[uId][key].title,
                        note: data[uId][key].note
                    }));
                    setNotes(notesArray);
                    setCount(notesArray.length > 0 ? notesArray[notesArray.length - 1].id : 0);
                } else {
                    setNotes([]);
                    setCount(0);
                    console.log("No notes available for this user");
                }
            } else {
                setNotes([]);
                setCount(0);
                console.log("No data available");
            }
            setIsLoading(false);
        })
        .catch((error) => {
            console.error("Error fetching notes:", error);
            setIsLoading(false);
        });
    }, [uId]);
    
    

    return ( 
        <>
                  {/* <!-- main dashoard  --> */}
                  <main className="ml-[100px] md:ml-[220px] pt-3 relative h-full" id="main">
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

                    {/* spinner */}
                       {isLoading && <div className="text-center absolute top-60 left-[50%]">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>}


              <h1 className="h2"> Hello 👋 {user}</h1>
              { !isLoading && <div className="my-3 ml-2 md:ml-0 px-0 d-flex justify-content-center div-search">
                <form className="w-100" role="search">
                  <input onChange={(e)=>setSearch(e.target.value)} autoComplete="off" id="search" type="search" className="form-control w-60 md:w-96 rounded-2xl text-lg shadow-lg" placeholder="Search..." aria-label="Search"></input>
                </form>
              </div>}

                {/* Create */}
              {notes.length === 0 && !isLoading && <div className="my-3 h-80 ">
                <div className="text-center flex flex-col justify-center items-center py-5 empty h-full rounded-xl shadow-xl">
                  <h1 className="text-body-emphasis">You havent Noted Anything </h1>
                  <p className="lead">
                   Fill up this empty void with your goals reminders,dreams and even nightmares...👽👻😈👹👺🤡
                  </p>
                  <button onClick={createNewNote} className="addbtn mt-8" id="addNote">
                  <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                  </svg>
                  </button>
                </div>
              </div>}

              {notes.length !== 0 && !isLoading && <button onClick={createNewNote} className="rounded-3xl bg-blue-500 hover:bg-blue-600 w-24 font-semibold text-white px-2 py-2 md:ml-0 ml-20 mr-2 active:translate-y-2 shadow-lg shadow-blue-700 mb-4">Add New</button>}

                {/* Write */}
                {write && <div className="notesContainer h-screen flex flex-col gap-2 justify-between fixed inset-3 z-30 rounded-2xl py-10 px-10 lg:px-40" id="notesContainer">
                    <div className="absolute top-0 left-0 right-0 bottom-10 -z-20 rounded-2xl bg-amber-100 shadow-lg"></div>
                    <form className="flex flex-col gap-5" action="">
                        <input type="text" id="title" placeholder="Title" className="text-blue-500 rounded-xl hover:ring-1 ring-blue-500 outline-0 px-3 lg:mx-40 shadow-xl h-12 text-xl" />
                        <textarea name="notes" placeholder="Note" id="notes" className="rounded-xl hover:ring-1 ring-blue-500 outline-0 px-3 shadow-xl text-lg h-72 resize-none bg-slate-300"></textarea>
                    </form>
                    <div className="buttons self-end">
                    <button onClick={cancel} className="rounded-3xl bg-yellow-500 hover:bg-yellow-600 w-28 py-2 mr-6 mb-6 active:translate-y-2 shadow-lg shadow-yellow-500">Cancel</button>
                    <button onClick={submit} className=" inline rounded-3xl bg-blue-500 hover:bg-blue-600 w-28 py-2 mb-6 active:translate-y-2 shadow-lg shadow-blue-500" type='submit'>Noted</button>
                    </div> 
                </div>}

                {/* rewrite */}
                {rewrite &&
                    <div className="notesContainer fixed inset-3 flex flex-col gap-2 justify-between z-30 rounded-2xl py-10 px-10 lg:px-40" id="notesContainer">
                    <div className="absolute top-0 left-0 right-0 bottom-0 -z-20 rounded-2xl bg-amber-100  shadow-lg"></div>
                    <form className="flex flex-col gap-5" action="">
                        <input type="text" defaultValue={renote.title} id="newtitle" placeholder="Title" className="text-blue-500 rounded-xl hover:ring-1 ring-blue-500 outline-0 px-3 lg:mx-40 shadow-xl h-12 text-xl" />
                        <textarea name="notes" defaultValue={renote.note} placeholder="Note" id="newnotes" className="rounded-xl hover:ring-1 ring-blue-500 outline-0 px-3 shadow-xl text-lg h-72 resize-none bg-slate-300"></textarea>
                    </form>
                    <div className="buttons self-end">
                    <button onClick={cancel} className="rounded-3xl bg-yellow-500 hover:bg-yellow-600 w-28 py-2 mr-6 mb-6 active:translate-y-2 shadow-lg shadow-yellow-500">Cancel</button>
                    <button onClick={()=>submitUpdate(renote.id)} className=" inline rounded-3xl bg-blue-500 hover:bg-blue-600 w-28 py-2 mb-6 active:translate-y-2 shadow-lg shadow-blue-500" type='submit'>Update</button>
                    </div> 
                </div>}

                {/* written */}
                    <div className="grid grid-cols-1 ml-2 md:ml-0 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-x-3 lg:gap-y-6">
                {notes.length !== 0 && !isLoading && 
                notes.filter((noteSearch)=> noteSearch.title.toLowerCase() === '' ? noteSearch : noteSearch.title.toLowerCase().includes(search.toLowerCase())).map((noted) =>(
                    <div key={noted.id} className="card-wrapper overflow-hidden flex flex-col bg-amber-100 justify-between shadow-lg shadow-amber-100 px-3 py-3 rounded-2xl max-w-64 h-64 text-wrap">
                    <div className="note-contents">
                    <div className="card-title font-playful font-semibold border-b-2 text-ellipsis text-blue-800 text-3xl pb-1">{noted.title.length > 11 ? noted.title.substring(0,10) + '...' : noted.title}</div>
                    <div className="card-title font-rest font-semibold text-ellipsis mt-2 text-xl pb-1">{noted.note.length > 60 ? noted.note.substring(0,60) + '...': noted.note}</div>
                    </div>
                    <div className="buttons flex self-end justify-self-end">
                    <button onClick={()=>deleteNote(noted.id)} className="rounded-3xl bg-red-500 hover:bg-red-600 w-20 py-2 mr-2 active:translate-y-2 shadow-lg shadow-red-700">Delete</button>
                    <button onClick={()=>update(noted.id)} className="rounded-3xl bg-blue-500 hover:bg-blue-600 w-20 py-2 mr-2 active:translate-y-2 shadow-lg shadow-blue-700">Update</button>
                    </div>
                </div>
                ))}
                {deleteBox && 
                <div className="fixed top-0 bottom-0 left-0 right-0 z-40">
                <div className="rounded-2xl absolute top-64 bottom-64 right-96 left-96 bg-slate-800 flex flex-col py-16 px-6 justify-between items-center">
                    <h1 className="text-white text-xl font-bold">Are you sure? Doing so will erase this from existense.</h1>
                    <div className="decision flex gap-4">
                    <button onClick={()=>setDeleteBox(false)} className="rounded-3xl bg-blue-500 hover:bg-blue-600 w-20 py-2 mr-2 active:translate-y-2 shadow-lg shadow-blue-700">cancel</button>
                    <button onClick={()=>trulyDeleteNote()} className="rounded-3xl bg-red-500 hover:bg-red-600 w-20 py-2 mr-2 active:translate-y-2 shadow-lg shadow-red-700">delete</button>
                    </div>
                </div>
                </div>}
                </div>
            </main>
        </>
     );


    
} 
 
export default Main;

function writeUserData(uId,userId, title,note) {
    set2(ref2(db, 'users/' + uId + '/' + userId), {
      id:userId,
      title: title,
      note: note,
    })
    .then(()=>toast("Submitted"))
    .catch(err=>{
        alert('error')
        console.log(err)
    })
  }
//   function updatePost(userId, title,note) {
  
//     // A post entry.
//     const postData = {
//       id:userId,
//       title: title,
//       note:note,
//     };
  
//     // Get a key for a new Post.
//     // const newPostKey = push2(child2(ref2(db), 'user-updates')).key;
  
//     // Write the new post's data simultaneously in the posts list and the user's post list.
//     const updates = {};
//     // updates['/updates/' + newPostKey] = postData;
//     updates['users/' + userId + '/new'] = postData;
  
//     return update2(ref2(db), updates)
//             .then(()=>alert('updated to database'))
//             .catch(err=>alert(err));
//   }

  function removeFirstData(id,uId){
    remove2(ref2(db, 'users/' + uId +'/'+ id))
    .then(()=>toast("Deleted"))
    .catch(err=>alert(err))
  }
//   function removeCurrentData(id){
//     remove2(ref2(db, 'user-updates/' + id))
//     .then(()=>alert('deleted current from database'))
//     .catch(err=>alert(err))
//   }