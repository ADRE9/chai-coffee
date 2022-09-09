import './App.css';
import { AuthProvider } from './contexts/AuthContext';
import Router from './navigation/Router';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Router/>
      </div>
    </AuthProvider>
  );
}

export default App;
