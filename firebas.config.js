import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Google sign-in function
const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async (e) => {
  e.preventDefault();
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;

    // Do something with the user info, like storing it in your state
  } catch (error) {
    console.error('Error during sign-in: ', error);
    // Handle error (like showing a message to the user)
  }
};
