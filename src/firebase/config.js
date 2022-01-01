import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDTtoryK4D71-HaytrOrfICcL16uyRW9Fw",
  authDomain: "karikareduwealth-e6494.firebaseapp.com",
  projectId: "karikareduwealth-e6494",
  storageBucket: "karikareduwealth-e6494.appspot.com",
  messagingSenderId: "517290337711",
  appId: "1:517290337711:web:afa6cb9aba38a48f187b5a",
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
