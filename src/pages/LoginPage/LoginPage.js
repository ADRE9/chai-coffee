//My Components
import './styles.css';
import '../../App.css';
import CoffeSvg from '../../assets/svg/shops.svg';
import LoginCard from '../../components/LoginCard';

const LoginPage = () => {
  return (
    <div className='Page PageContainer'>
      <div className='ImageContainer'>
        <img src={CoffeSvg} alt="coffee shop" className="coffeeShopImage"/>
      </div>
      <div className='LoginContainer'>
        <LoginCard/>
      </div>
    </div>
  )
}

export default LoginPage