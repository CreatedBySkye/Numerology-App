import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';


const Signup = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <>
    
	<h1 className="absolute bottom-20 text-4xl bg-white right-20 mr-16 z-30 pt-2 pb-2 pr-16 pl-4 border-8 border-purple-700">Sign up to get your life path number! <button
      className="btn btn-primary btn-block"
      onClick={() => loginWithRedirect()}
    >
      Signup
    </button></h1>


   
    </>
  );
};

export default Signup;