// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, onAuthStateChanged, getAuth,signInWithEmailAndPassword,signOut,updateProfile } from "firebase/auth";
import { getDatabase,ref,child,get,set,update,remove,push } from "firebase/database";
import { getStorage,uploadBytes,ref as Ref,listAll,getDownloadURL } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcp3SSgQ4M46rRcz5tDyEatD86zWBfbyc",
  authDomain: "notella-f3e75.firebaseapp.com",
  databaseURL: "https://notella-f3e75-default-rtdb.firebaseio.com",
  projectId: "notella-f3e75",
  storageBucket: "notella-f3e75.appspot.com",
  messagingSenderId: "844095452315",
  appId: "1:844095452315:web:5d8409565e41750baac23e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getDatabase()
export const child2 = child
export const get2 = get
export const set2 = set
export const update2 = update
export const remove2 = remove
export const ref2 = ref
export const push2 = push

// authentication 
export const auth = getAuth()
export const createUserEmailAndPassword = createUserWithEmailAndPassword
export const signInUserEmailAndPassword = signInWithEmailAndPassword
export const signOut2 = signOut

//profile
export const updateProfile2 = updateProfile
export const onAuthStateChanged2 = onAuthStateChanged

export const refStorage = Ref
export const storage = getStorage();
export const uploadBytes2 = uploadBytes 
export const listAll2 =listAll 
export const getDownloadURL2 = getDownloadURL

// export const storageRef = ref2(storage);