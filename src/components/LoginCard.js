import { Button, Input } from 'reactstrap';
import { useState } from 'react';

import '../styles/LoginCard.css';
import  useAuth  from '../contexts/AuthContext';


function LoginCard() {

  const [userCredentials, setUserCredentials] = useState({ username: '', password: '' });
  const { login } = useAuth();
  
  const handleLogin = () => {
    console.log("Logging In",userCredentials.username,userCredentials.password)
    login(userCredentials.username,userCredentials.password);
  }

  const isDisable = () => {
    if (userCredentials.username === '' || userCredentials.password==='') {
      return true;
    }
    return false;
  }

  return ( 
    <div className="CardContainer">
      <div className="TopDiv">
        <div className="AvatarDiv">
          <img className="Avatar" src={require("../assets/png/barista.png")} alt="barista"/>
        </div>
      </div>
      <div className="BottomDiv">
          <Input onChange={(e)=>setUserCredentials({...userCredentials,username:e.target.value})} placeholder="Username" className="inputs"/>
          <br />
          <Input onChange={(e)=>setUserCredentials({...userCredentials,password:e.target.value})} placeholder="Password" className="inputs"/>
          <br />
          <Button disabled={isDisable()} onClick={()=>handleLogin()} color="secondary" className="loginButton">LOGIN</Button>
      </div>
    </div>
   );
}

export default LoginCard;