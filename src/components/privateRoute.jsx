import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';


const PrivateRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return 
    <div>
        <div class="spinner-border text-success" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>;

return isAuthenticated ? (
    <>{children}</>
  ) : (
    <div>
      <div className='text-9xl text-red-500 '>No estas autorizado para ver este sitio.</div>
    </div>
  );
};

export default PrivateRoute;