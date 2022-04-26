// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfviq-YkPBafYso07RpCFmVwYerWG9erM",
  authDomain: "genius-car-services-71779.firebaseapp.com",
  projectId: "genius-car-services-71779",
  storageBucket: "genius-car-services-71779.appspot.com",
  messagingSenderId: "245100260830",
  appId: "1:245100260830:web:2508122f1af0bb296b014f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth