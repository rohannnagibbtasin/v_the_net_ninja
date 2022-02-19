// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRSynZq7iEFr4HiJxetPbgsT4ACfNI2kI",
  authDomain: "firegram-56782.firebaseapp.com",
  projectId: "firegram-56782",
  storageBucket: "firegram-56782.appspot.com",
  messagingSenderId: "71797959003",
  appId: "1:71797959003:web:fa55506a98a99df9d9527e"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const projectFireStore = getFirestore();
const projectStorage = getStorage();

export {projectStorage, projectFireStore};