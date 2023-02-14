import { createContext, useState, useEffect } from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from 'firebase/auth'
import auth from '../firebaseSettings.js'

const FirebaseContext = createContext()

export const FirebaseProvider = ({ children }) => {
    const [authToken, setAuthToken] = useState(null)
    const [user, setUser] = useState(null)
  

    const register = async (email, password) => {
        try {
            const result = await createUserWithEmailAndPassword(auth, email, password)
           setUser(result.user)
           setAuthToken(result.user.accessToken)
        } catch (error) {
            console.log('signIn error: ' , error)
        }
    }
    const signIn = async (email, password) => {
        try {
            const result = await signInWithEmailAndPassword(auth, email, password)
           setUser(result.user)
           setAuthToken(result.user.accessToken)
        } catch (error) {
            console.log('signIn error: ' , error)
        }
    }

    return (
        <FirebaseContext.Provider
         value={{
            authToken,
            user,
            register,
            signIn,
        }}>
            {children}
            </FirebaseContext.Provider>
    )
}
export default FirebaseContext