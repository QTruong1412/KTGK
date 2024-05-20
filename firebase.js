// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAl1h9cPlRFgR_h3HWHsgLufc8E3Qc1xyc",
  authDomain: "ktgk-8ef73.firebaseapp.com",
  projectId: "ktgk-8ef73",
  storageBucket: "ktgk-8ef73.appspot.com",
  messagingSenderId: "124545850889",
  appId: "1:124545850889:web:41dcc23cc111404404a2d8",
  measurementId: "G-FMYNJGZCL4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);