import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here

const firebaseConfig = {
    apiKey: "AIzaSyBKXnBKlec_CeEuUq1SDbuex2OzPqkGGAM",
    authDomain: "e-ride-ab9a5.firebaseapp.com",
    projectId: "e-ride-ab9a5",
    storageBucket: "e-ride-ab9a5.appspot.com",
    messagingSenderId: "227624915638",
    appId: "1:227624915638:web:f7229ef18bfa3360cf8c17"
  };



firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


