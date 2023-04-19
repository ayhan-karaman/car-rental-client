import { createContext, useContext, useEffect, useState } from 'react';
import { getByEmailUser } from '../services/userService';
import { Spinner } from 'reactstrap';

const AuthContext = createContext();

const AuthProvider = ({children}) =>{
    const [user, setUser] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        (async () =>{
            try {
                const userEmail = localStorage.getItem("user_info");
                const me = await getByEmailUser(userEmail);
                setLoggedIn(true);
                setUser(me);
                setLoading(false)
            } catch (e) {
                setLoading(false); 
            }
        })();
    }, []);
    
     const login = async (data) => {
           
           localStorage.setItem("access_token", data.data.token)
           localStorage.setItem("user_info", data.emailOrUserName)
           const me = await getByEmailUser(data.emailOrUserName);
           setUser(me);
           setLoggedIn(true);
           
     }
     const logout = async (callback) => {
         setLoggedIn(false);
         setUser(null);
         localStorage.removeItem("access_token")
         localStorage.removeItem("user_info")
         callback();
     }

     const values = {
        user,
        loggedIn,
        login,
        logout
        
    }

     if(loading)
        return <div className="d-flex  justify-content-center align-items-center flex-column">
                    <Spinner className='mt-4 mb-5' animation="grow" style={{color:'#008080'}} />
               </div>;
               
    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>

}

const useAuth = () => useContext(AuthContext);
export {
    AuthProvider, useAuth
}