import { createContext, useReducer } from "react"
import { authReducer } from "./authReducer";

//formato de datos
export interface AuthState {
    isLoggedIn: boolean,
    username?: string,
    favoriteIcon?: string,
}
//estado inciial
export const authInitialState: AuthState = {
    isLoggedIn: false,
    username: undefined,
    favoriteIcon: undefined,
}

//Como luce y que expone el constext
export interface AuthContextProps {
    authState: AuthState,
    signIn: () => void
}

//Crear el context
export const AuthContext = createContext({} as AuthContextProps);

//COmponente proveedor del estado
export const AuthProvider = ({ children }: any) => {

    const [authState, dispatch] = useReducer(authReducer, authInitialState);

    const signIn = () => {
        dispatch({ type: "signIn" });
    }

    return (
        <AuthContext.Provider value={{
            // authState: authInitialState,
            // signIn: () => { }
            authState,
            signIn,
        }}>
            {children}
        </AuthContext.Provider>
    )
}