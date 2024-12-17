


import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyD0NO4RpQLF8Wz7cdpCu_avqvvLMe8dtRo",
  authDomain: "react-netflix-clone-ddb2f.firebaseapp.com",
  projectId: "react-netflix-clone-ddb2f",
  storageBucket: "react-netflix-clone-ddb2f.firebasestorage.app",
  messagingSenderId: "345149628251",
  appId: "1:345149628251:web:9ba85aa44c2caaa51cc47e",
  measurementId: "G-B00468KKPX"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);



