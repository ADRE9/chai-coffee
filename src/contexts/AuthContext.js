import * as React from "react";

const authContext = React.createContext();

function useAuth() {
  const [authed, setAuthed] = React.useState(false);
  const [username, setUsername] = React.useState(null);
  const [password, setPassword] = React.useState(null);

  return {
    authed,
    username,
    password,
    login(user,pass) {
      return new Promise((res) => {
        if (user === 'Admin1234' && password === 'Password') {
          setUsername(user);
          setPassword(pass);
          setAuthed(true);
          res();
        } else {
          return "Invalid Login Credentials"
        }
        
      });
    },
    logout() {
      return new Promise((res) => {
        setUsername(null);
        setPassword(null);
        setAuthed(false);
        return "Logged Out Sucessfully"
      });
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