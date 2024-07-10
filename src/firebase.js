import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAL8ropnJ65wf0hCa4Ybb3LRN-7DO3LV54",
  authDomain: "pardo-6a338.firebaseapp.com",
  projectId: "pardo-6a338",
  storageBucket: "pardo-6a338.appspot.com",
  messagingSenderId: "441020450956",
  appId: "1:441020450956:web:4f9502bf33e8f3667193a9",
  measurementId: "G-DQCH640KNG",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
googleProvider.addScope('profile');
googleProvider.addScope('email');


const facebookProvider = new FacebookAuthProvider();
facebookProvider.addScope('public_profile');
facebookProvider.addScope('email');

const twitterProvider = new TwitterAuthProvider();

export { auth, googleProvider, facebookProvider, twitterProvider };