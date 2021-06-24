
import firebase from "firebase";
import 'firebase/database';

const  firebaseConfig = {
    apiKey: "AIzaSyDQUz16bp0hJjldV8_FTbqHLXQmyVoLoZY",
    authDomain: "twitter-clone-29175.firebaseapp.com",
    projectId: "twitter-clone-29175",
    storageBucket: "twitter-clone-29175.appspot.com",
    messagingSenderId: "854335916773",
    appId: "1:854335916773:web:178aa9b3e2aafcfb0a620c",
    measurementId: "G-MS7RXF6RC4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const db =firebase.firestore();

  export default db;