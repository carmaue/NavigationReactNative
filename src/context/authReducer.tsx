import { AuthState } from "./AuthContext";


type ActionType = {
    type: 'signIn'
}

export const authReducer = (state: AuthState, action: ActionType): AuthState => {

    switch (action.type) {
        case "signIn":
            return {
                ...state,
                username: 'undefined yet',
                isLoggedIn: true,
            }

        default:
            return state;
    }
}

