import React, { useContext, createContext } from 'react'
import axios from 'axios'
import createAuthRefreshInterceptor from 'axios-auth-refresh'
import { AuthProvider } from './AuthProvider.js'

const AxiosContext = createContext();
const { Provider } = AxiosContext;


function AxiosProvider({ children }) {
    // get Auth Context  
    const authContext = useContext(AuthProvider)
    // create instance public Api and authenticate Api
    const publicAxios = axios.create({
        baseURL: 'http://hescas.trueddns.com:49590/auth'
    });
    const authAxios = axios.create({
        baseURL: 'http://hescas.trueddns.com:49590/me',
        timeout:1000
    });

    // Create AuthAxios instance to use inceptor token
    authAxios.interceptors.request.use(
        (config) => {
  
            config.headers['Authorization'] = `Bearer ${authContext.getAccessToken()}`
            return config;
        }, (err) => {
            return Promise.reject(err);
        },
    );

    // Refresh Logic use for create refresh token interceptor
    const refreshAuthLogic = (failedRequest) => {
        const data = {
            refreshToken: authContext.AuthState.refreshToken,

        };
        // return axios respone
        return axios({
            method: 'POST',
            data,
            url: 'http://hescas.trueddns.com:49590/auth/refresh-token',
        }).then(
            async function (response) {
                failedRequest.response.config.headers['Authorization'] = 'Bearer' + response.data.accessToken;

                // set AuthSateContext 
                authContext.setAuthState({
                    ...AuthProvider,
                    accessToken: response.data.accessToken
                });

                return Promise.resolve();
            }).catch((err) => {

                // set contaxt null when occur error 
                authContext.setAuthState({
                    accessToken: null,
                    refreshToken: null,
                })
            })

    }

    // Create Refresh interceptor
    createAuthRefreshInterceptor(authAxios, refreshAuthLogic);
    return (
        <Provider value={{
            publicAxios,
            authAxios
        }}>
            {children}
        </Provider>
    )
}

export { AxiosProvider, AxiosContext }