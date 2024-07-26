import { useEffect, useRef, useState } from "react";
import { db,child2,remove2,set2,ref2,get2 } from "../firebase";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checklist = ({uId}) => {
    const [search,setSearch] = useState('')
    const [listItem,setListItem] = useState([])
    const [showInput,setShowInput] = useState(false)
    const [isLoading,setIsLoading]  = useState(false)
    const inputRef = useRef(null)
    const inputDivRef = useRef(null)
    const [count,setCount] = useState(0)
    const [lastColor, setLastColor] = useState(null);
    // const [checkedTimeouts,setCheckedTimeouts] = useState({})

    const colors = [
      { bg: "bg-red-300", border: "border-red-500" },
      { bg: "bg-blue-300", border: "border-blue-500" },
      { bg: "bg-green-300", border: "border-green-500" },
      { bg: "bg-yellow-300", border: "border-yellow-500" },
      { bg: "bg-purple-300", border: "border-purple-500" },
      { bg: "bg-pink-300", border: "border-pink-500" },
      { bg: "bg-indigo-300", border: "border-indigo-500" },
      { bg: "bg-gray-300", border: "border-gray-500" },
    ];

    const getRandomColor = () => {
      let newColor = lastColor;
      while (newColor === lastColor) {
        if(newColor === lastColor){
          newColor = colors[Math.floor(Math.random() * colors.length)];
        }else{
          setLastColor(newColor);
          break
        }
      }
      return newColor;
    };

    const createNewList=()=>{
      setShowInput(true)
      console.log('clicked')
    }

    const handleList = ()=> {
      if(inputRef.current.value === ''){
        alert('what are you doing? don\'t break the system...write something before adding')
        return
      }
      const newColor = getRandomColor();
      const newCount = count + 1;
      if(newColor){
        const newList = {id:newCount,task:inputRef.current.value,checked:false,timeout:null,color:newColor}
        setListItem([...listItem,newList])
        inputRef.current.value = ''
        writeUserCheck(uId,newCount,newList.task,false,null,newList.color)
        setCount(newCount)
      }
    }

    const handleCheck = (index, isChecked) => {
      const updateList = [...listItem]
      updateList[index].checked = isChecked

      if(isChecked){
        updateList[index].timeout = setTimeout(()=>{
          setListItem((prev)=>(prev.filter((_,i)=> i !== index )))
          removeCheck(updateList[index].id,uId)
        },2000
        )
      }else{
        clearTimeout(updateList[index].timeout)
        updateList[index].timeout = null
      }
      setListItem(updateList)
    };

    useEffect(()=>{
      
      
      setIsLoading(true)
      get2(child2(ref2(db), 'usersCheck/'))
      .then((snapshot) => {
          if (snapshot.exists()) {
              const checkdata = snapshot.val();
              console.log('data is ',checkdata)
              const checkArray = Object.keys(checkdata[uId]).map(key => ({
                  id: checkdata[uId][key].id,
                  task: checkdata[uId][key].task,
                  checked: checkdata[uId][key].checked,
                  timeout:checkdata[uId][key].timeout,
                  color:checkdata[uId][key].color,
              }));
              setListItem(checkArray);
              setCount(checkArray.length > 0 ? checkArray[checkArray.length - 1].id : 0); 
              setIsLoading(false);
          } else {
              setCount(0);
              console.log("No data available");
              setIsLoading(false);
          }
      }).catch((error) => {
          console.error(error);
          setIsLoading(false); 
      }).finally(()=>{
        setIsLoading(false)
      })
  
      
    }, [uId]);

    useEffect(()=>{
      const handleClickOutside = (event) => {
        if (inputRef.current && !inputDivRef.current.contains(event.target) && inputRef.current.value === '' && listItem.length === 0) {
          setShowInput(false);
        }
        
      };
      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    })

    return ( 
        <>
        <div className="ml-[100px] md:ml-[220px] h-full pt-3">
            
          <div className="my-3 px-0 d-flex justify-content-center div-search">
            <form className="w-100" role="search">
              <input onChange={(e)=>setSearch(e.target.value)} autoComplete="off" id="search" type="search" className="form-control  w-60 md:w-96 rounded-2xl text-lg shadow-lg" placeholder="Search..." aria-label="Search"></input>
            </form>
          </div>

          <main className="checklist md:pr-0 pr-6">
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
                    theme="light" />

                    {/* spinner */}
                       {isLoading && <div className="text-center absolute top-60 left-[50%]">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>}

            {listItem.length === 0 && !showInput && !isLoading && <div className="mpty flex items-center gap-3 md:mr-0 mr-3 md:gap-10 flex-col md:mt-16 h-[300px]">
              <h2 className="todo text-center text-3xl md:text-4xl">The page is void....click the button to add a task</h2>
              <h3 className="wild text-2xl text-center font-playful">Go wild!!😎😎</h3>
              <i className="font-playful text-center font-semibold">Also a hint....to delete a task check it.....you have two seconds to uncheck it before it deletes</i>
              <button onClick={createNewList} className="addbtn rounded-full bg-sky-500 hover:bg-sky-600 active:translate-y-2 mt-8" id="addNote">
                  <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                  </svg>
              </button>
            </div>}

            {(listItem.length !== 0 || showInput) && <div ref={inputDivRef} className="addList md:w-[500px] lg:w-[600px] flex gap-4 justify-between">
              <input autoComplete="off" ref={inputRef} type="taskAdd" placeholder="write a task 📝" name="todo" id="taskAdd" className="text-blue-500 w-full rounded-xl hover:ring-1 ring-blue-500 outline-0 px-3 shadow-xl md:text-xl" />
              <button onClick={handleList} className="bg-sky-500 hover:bg-sky-600 px-1 md:px-3 py-1 rounded-2xl active:translate-y-2 relative w-[100px] cursor-pointer shadow-xl">Add 👇</button>
            </div>}
            <ol className="mt-4">
              {listItem.filter((item)=>item.task.toLowerCase() === ''  ? item : item.task.toLowerCase().includes(search.toLowerCase())).map((item,index)=>(
                <li className={`text-sm w-full md:text-base ${item.color.bg} border-l-4 ${item.color.border} pl-2 lg:text-lg check-word flex font-semibold font-rest ${item.checked ? 'delete' : ''}`} key={index}><input onChange={(e)=>handleCheck(index,e.target.checked)} checked={item.checked} className="mr-4" type="checkbox" name="check" id="check" /> <span className=" max-w-full">{item.task}</span></li>
              ))}
            </ol>
          </main>
        </div>
        </>
     );
}
 
export default Checklist;


function writeUserCheck(uId,userId, task,checked,timeout,color) {
  set2(ref2(db, 'usersCheck/' + uId + '/' + userId), {
    id:userId,
    task:task,
    checked:checked,
    timeout:timeout,
    color:color,
  })
  .then(()=>toast("task added"))
  .catch(err=>{
      alert('error')
      console.log(err)
  })
}

function removeCheck(id,uId){
  remove2(ref2(db, 'usersCheck/' + uId +'/'+ id))
  .then(()=>toast("poof gone 🧙‍♂️✨🌟"))
  .catch(err=>alert(err))
}