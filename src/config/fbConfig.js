import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCR8FAW67zBFbuvGeFxvmK1VRvcZHdH5TU",
  authDomain: "react-firebase-marioplan.firebaseapp.com",
  databaseURL: "https://react-firebase-marioplan.firebaseio.com",
  projectId: "react-firebase-marioplan",
  storageBucket: "react-firebase-marioplan.appspot.com",
  messagingSenderId: "741237833125"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
