import { createContext } from "react"

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

    return (
        <AuthContext.Provider value={{
            authState: authInitialState,
            signIn: () => { }
        }}>
            {children}
        </AuthContext.Provider>
    )
}