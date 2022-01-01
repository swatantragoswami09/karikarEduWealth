import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHeoX51w-XdhV3kWkMtzp-1_SW4pv7OTQ",
  authDomain: "kept-efcdf.firebaseapp.com",
  projectId: "kept-efcdf",
  storageBucket: "kept-efcdf.appspot.com",
  messagingSenderId: "541557992633",
  appId: "1:541557992633:web:551f33b001b5af0155bf68",
  measurementId: "G-5J9R9S1DE4",
};

//   init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();
// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp, projectStorage };
