import {initializeApp} from 'firebase/app'
import firebaseConfig from './firebaseConfig'
import {getAuth} from 'firebase/auth'

const firebaseConfigg = {
    apiKey: "AIzaSyCK9bauUJEaZjdTZjHKbxiu-ubg7jnfaJg",
    authDomain: "login-register-page-50a72.firebaseapp.com",
    projectId: "login-register-page-50a72",
    storageBucket: "login-register-page-50a72.appspot.com",
    messagingSenderId: "415328194932",
    appId: "1:415328194932:web:3c0efca1c40739fcad9c21",
    measurementId: "G-864Z0Z02MX"
  };
const app = initializeApp(firebaseConfigg)
const auth = getAuth(app);   

 export default auth


