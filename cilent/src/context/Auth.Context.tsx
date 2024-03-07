import { createContext, useContext, useState, ReactNode } from "react";

interface UserData {
  _id: string;
  email: string;
}

interface AuthContextProps {
  isLoggedIn: boolean;
  login: (userData: UserData) => void;
  logout: () => void;
  userData: UserData;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState<UserData>({
    _id: "",
    email: ""
  });

  const login = (userData: UserData) => {
    setIsLoggedIn(true);
    setUserData({
      _id: userData._id,
      email: userData.email,
    });
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserData({
      _id: "",
      email: ""
    });
    localStorage.clear();
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, userData }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
