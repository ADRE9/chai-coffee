import "./App.css";
import NavBar from "./components/NavBar";
import { AuthProvider } from "./contexts/AuthContext";
import Router from "./navigation/Router";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <AuthProvider>
      <div className="App">
        {location.pathname === "/login" ? null : <NavBar />}
        <Router />
      </div>
    </AuthProvider>
  );
}

export default App;
