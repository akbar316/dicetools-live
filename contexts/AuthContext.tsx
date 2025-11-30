
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { auth } from '../firebase';
import { onAuthStateChanged, User, signOut as firebaseSignOut } from 'firebase/auth';

interface AuthContextType {
  currentUser: User | null;
  loading: boolean;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const signOut = () => {
    firebaseSignOut(auth);
  };

  return (
    <AuthContext.Provider value={{ currentUser, loading, signOut }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
