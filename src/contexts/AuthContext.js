import * as React from "react";
import { useNavigate } from "react-router-dom";

const authContext = React.createContext();

function useAuth() {
  const [authed, setAuthed] = React.useState(false);
  const [username, setUsername] = React.useState(null);
  const [password, setPassword] = React.useState(null);

  const navigate = useNavigate();

  React.useEffect(() => {
    const user = localStorage.getItem("username");
    const pass = localStorage.getItem("password");
    if (user) {
      setUsername(user);
      setPassword(pass);
      setAuthed(true);
      // navigate("/menu");
    } else {
      navigate("/login")
    }
  }, [navigate]);

  return {
    authed,
    username,
    password,
    login(user, pass) {
      if (user === "Admin1234" && pass === "Password") {
        setUsername(user);
        localStorage.setItem("username", "Admin1234");
        setPassword(pass);
        localStorage.setItem("password", "Password");
        setAuthed(true);
        navigate("/menu");
      } else {
        return "Invalid Login Credentials";
      }
    },
    logout() {
      setUsername(null);
      setPassword(null);
      setAuthed(false);
      localStorage.clear();
      return "Logged Out Sucessfully";
    },
  };
}

export function AuthProvider({ children }) {
  const auth = useAuth();

  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export default function AuthConsumer() {
  return React.useContext(authContext);
}
