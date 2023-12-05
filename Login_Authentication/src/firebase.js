import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAlkplz6AlFgKhiPAZBvey2ZWqYzECCpok",
  authDomain: "login-authentication-a7923.firebaseapp.com",
  projectId: "login-authentication-a7923",
  storageBucket: "login-authentication-a7923.appspot.com",
  messagingSenderId: "436653448277",
  appId: "1:436653448277:web:bb6fa1669d1f1c07e808dc",
  measurementId: "G-D93BGDC4JG"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

export { app, analytics, auth, createUserWithEmailAndPassword, updateProfile };
