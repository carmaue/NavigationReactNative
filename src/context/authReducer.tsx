import { AuthState } from "./AuthContext";


type ActionType =
    | { type: 'signIn' }
    | { type: 'logOut' }
    | { type: 'changeFavIcon', payload: string }
    | { type: 'changeUsername', payload: string }

export const authReducer = (state: AuthState, action: ActionType): AuthState => {

    switch (action.type) {
        case "signIn":
            return {
                ...state,
                username: 'undefined yet',
                isLoggedIn: true,
            }
        case 'changeFavIcon':
            return {
                ...state,
                favoriteIcon: action.payload,
            }
        case 'changeUsername':
            return {
                ...state,
                username: action.payload,
            }
        case 'logOut':
            return {
                ...state,
                favoriteIcon: undefined,
                username: undefined,
                isLoggedIn: false,
            }

        default:
            return state;
    }
}

