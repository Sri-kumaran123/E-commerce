import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getloginUser } from "../api/auth.api";

// 1. Create context
const UserContext = createContext();

// 2. Provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      try {
        const res = await getloginUser();
        if (!res.data.auth) {
          navigate('/');
        } else {
          console.log(res.data);
          setUser(res.data?.user);
        }
      } catch (err) {
        console.error('Auth check failed:', err);
      }
    };
    checkUser();
  }, [navigate]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// 3. Custom hook
export const useUser = () => {
  return useContext(UserContext);
};
