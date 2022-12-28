import React, { createContext, useState } from "react";
import { getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../Firebase/firebase.init";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // for google sign in
  const googleSignIn = (googleProvider) => {
    return signInWithPopup(auth, googleProvider);
  };

  // for log out user
  const logOut = () => {
    return signOut(auth);
  }

  const authInfo = {user, setUser, googleSignIn, logOut};

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
