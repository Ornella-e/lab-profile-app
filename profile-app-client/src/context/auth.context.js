import React, { createContext, useState, useEffect } from "react"
import axios from "axios";
import { API_URL } from "../constants";
const AuthContext = React.createContext();

const AuthProviderWrapper = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState(null);

    const storeToken = (token) => {
        localStorage.setItem("authToken", token);
      }  
        
      const authenticateUser = () => { 
        const storedToken = localStorage.getItem("authToken");
        if (storedToken) {
          axios.get(
            `${API_URL}/api/auth/verify`, 
            { headers: { Authorization: `Bearer ${storedToken}`} }
          )
          .then((response) => {
            const user = response.data;       
            setIsLoggedIn(true);
            setIsLoading(false);
            setUser(user);
          })
          .catch((error) => {
            setIsLoggedIn(false);
            setIsLoading(false);
            setUser(null);
          });
    
        } else {
          setIsLoggedIn(false);
          setIsLoading(false);
          setUser(null);
        }
      }
    
      const removeToken = () => {
        localStorage.removeItem("authToken");
      }    
      
      const logOutUser = () => {
        removeToken();
        authenticateUser();
      }    
    
    
      useEffect(() => {
        authenticateUser();
      }, []);

	return (
		<AuthContext.Provider value={{ isLoggedIn, isLoading, user, storeToken, authenticateUser, logOutUser }}>
			{props.children}
		</AuthContext.Provider>
	)
}

export { AuthContext, AuthProviderWrapper }