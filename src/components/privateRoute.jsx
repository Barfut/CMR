import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import ReactLoading from 'react-loading';
import { obtenerUsuarios } from '../utils/api';
import { useUser } from '../context/userContext';



const PrivateRoute = ({ children }) => {
  
  const { isAuthenticated, isLoading, loginWithRedirect, getAccessTokenSilently } = useAuth0();
  const {setUserData} = useUser()

  useEffect(() => {
    const fetchAuth0Token = async () => {
      const accessToken = await getAccessTokenSilently({
        audience: `api-autenticacion-barfut`
      });      
      localStorage.setItem('token', accessToken);
      await obtenerUsuarios((response) => {
        console.log(response)
        setUserData(response.data)
      },(err) => {
        console.log(err)
      })
    }

   

    if (isAuthenticated) {
      fetchAuth0Token();
    }
  }, [isAuthenticated, getAccessTokenSilently]);

  if (isLoading) return <ReactLoading type='cylon' color='#abc123' height={667} width={375} />;

  if (!isAuthenticated) {
    return loginWithRedirect();
  }

  return <>{children}</>;
  
};

export default PrivateRoute