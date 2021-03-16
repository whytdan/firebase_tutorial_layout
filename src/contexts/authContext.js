import React, { useEffect, useReducer } from 'react';
import FirebaseService from '../firebaseService';
import { showMessage } from '../_helpers/toast';
import firebaseService from '../firebaseService/firebaseService';


const INIT_STATE = {
    isAuth: false,
    errorMessage: "" 
}

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return {
                ...state,
                isAuth: true
            }
        case "LOGOUT":
            return {
                ...state,
                isAuth: false
            }
        case "ERROR":
            return {
                ...state,
                errorMessage: action.payload
            }
        default:
            return state;
    }
}

export const authContext = React.createContext();


function AuthProvider(props){

    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    const loginWithFirebase = (email, password) => {
        FirebaseService.auth.signInWithEmailAndPassword(email, password).then(() => {
            dispatch({
                type: "LOGIN_SUCCESS"
            })
            showMessage(`Вы зашли как ${email}!`, "success");
        }).catch(error => {
            dispatch({
                type: "ERROR",
                payload: error.message
            })
            showMessage("Неверные данные!", "error");
        })
    }

    const registerWithFirebase = (email, password) => {
        FirebaseService.auth.createUserWithEmailAndPassword(email, password).then(() => {
            dispatch({
                type: "LOGIN_SUCCESS"
            })
            showMessage("Регистрация прошла успешно!", "success");
        }).catch(error => {
            dispatch({
                type: "ERROR",
                payload: error.message
            })
            showMessage(error.message,"error");
        })
    }

    const signOutWithFirebase = () => {
        FirebaseService.signOut();
        dispatch({
            type: "LOGOUT"
        })
        showMessage("Вы вышли из системы", "success");

    }

    const checkFirebaseAuth = () => {

        new Promise(resolve => {
            firebaseService.init(success => {
				if (!success) {
					resolve();
				}
			});
        })

        firebaseService.onAuthStateChanged(authUser => {
            if (authUser) {
                dispatch({
                    type: "LOGIN_SUCCESS"
                })
            }
        })
    }

    useEffect(() => {
        checkFirebaseAuth();
    }, [])

    return (
        <authContext.Provider value={{
            isAuth: state.isAuth,
            errorMessage: state.errorMessage,
            loginWithFirebase,
            registerWithFirebase,
            signOutWithFirebase
        }}>
            {props.children}
        </authContext.Provider>
    )

} 

export default AuthProvider;