// Import the functions you need from the SDKs you need
import { initializeApp } from '@react-native-firebase/app';
// import { getAnalytics } from "firebase/analytics";
import {createContext, useContext, useMemo, useReducer} from 'react';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
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
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
const MyContext = createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case 'USER_LOGIN': {
      return {...state, userLogin: action.value};
    }
    case 'USER_LOGOUT': {
      return {...state, userLogin: null};
    }
    case 'FETCH_JOB': {
      return {...state, job: action.value};
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

const MyContextControllerProvider = ({children}) => {
  const initialState = {
    userLogin: null,
    job: [],
  };
  const [controller, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => [controller, dispatch], [controller, dispatch]);
  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

const useMyContextController = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error(
      'useMyContextController should be used inside the MyContextControllerProvider',
    );
  }
  return context;
};

const USERS = firestore().collection('USERS');
const JOBS = firestore().collection('JOBS');

const signup = (
  email,
  password,
  fullname,
) => {
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      Alert.alert('Tạo tài khoản ' + email + ' thành công');
      USERS.doc(email).set({
        email,
        password,
        fullname,
      });
    })
    .catch(e => console.log(e.message));
};

const login = (dispatch, email, password) => {
  auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      USERS.doc(email).onSnapshot(u => {
        if (u.exists) {
          Alert.alert('Đăng nhập thành công: ' + u.id);
          dispatch({type: 'USER_LOGIN', value: u.data()});
        }
      });
    })
    .catch(e => Alert.alert('Sai tài khoản hoặc mật khẩu'));
};
const logout = dispatch => {
  auth()
    .signOut()
    .then(() => dispatch({type: 'USER_LOGOUT'}));
};

const addJob = (index, newJob) => {
  JOBS.add({index: index, title: newJob})
    .then(() => console.log('Thêm thành công: ' + newJob))
    .catch(e => console.log(e.message));
};

export {
  MyContextControllerProvider,
  useMyContextController,
  login,
  logout,
  signup,
  addJob,
};
