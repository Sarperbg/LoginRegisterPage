import { createContext, useState, useEffect } from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from 'firebase/auth'
import auth from '../firebaseSettings.js'

const FirebaseContext = createContext()

export const FirebaseProvider = ({ children }) => {
    const [authToken, setAuthToken] = useState(null)
    const [user, setUser] = useState(null)

    const register = async (firstName, lastName, email, password) => {
        try {
            const result = await createUserWithEmailAndPassword(auth,firstName,lastName,email, password)
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
           
        }}>
            {children}
            </FirebaseContext.Provider>
    )
}
export default FirebaseContext