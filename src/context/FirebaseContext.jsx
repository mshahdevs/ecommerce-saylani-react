import { auth } from '@/firebas.config';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { useEffect } from 'react';
import { createContext, useContext, useState } from 'react';
// import { toast } from "react-toastify";

export const FirebaseContext = createContext();

const FirbaseProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);
  const login = ({ email, password }) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        console.log('Login successful:', response.user);

        toast.success('Successfully logged in'); // Provide meaningful logs
      })
      .catch((error) => {
        console.error('Login error:', error); // Log error for debugging
        // toast.error("Invalid Credential");
      });
  };
  return (
    <FirebaseContext.Provider
      value={{ isLogin, setIsLogin, login, currentUser }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};

export const useFirebaseContext = () => {
  return useContext(FirebaseContext);
};
export default FirbaseProvider;

export const useAuthContext = () => {
  return auth;
};
