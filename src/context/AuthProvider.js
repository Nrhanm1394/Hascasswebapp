import { createContext, useState } from "react";

const AuthContext = createContext({});
const { Provider } = AuthContext;

export const AuthProvider = ({ children }) => {
    const [ authState, setAuthState] = useState({
        accessToken: null,
        refreshToken: null,
        authenticated: null
    });
    const Logout = () =>  {
        setAuthState({
            accessToken: null,
            refreshToken:null,
            authenticated:false
        });
    };

    const getAccessToken = () => {
        return authState.accessToken;
    }

    return (
        <Provider value={{ authState, setAuthState , Logout , getAccessToken }}>
            {children}
        </Provider>
    )
}

export default AuthContext;