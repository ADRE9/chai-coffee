import { Plus, Dash } from "react-bootstrap-icons";
import { CardTitle,CardText, CardBody } from "reactstrap";
import "../styles/MenuCard.css";

function MenuCard({ sourceImg, title, description, setOrder, order,rate }) {
  const addOrder = () => {
    const sum = {};
    sum[title] = order[title] + 1;
    setOrder({...order,...sum});
    // console.log(title,order,sum);
    // console.log("I am Adding")
  }

  const removeOrder = () => {
    if (parseInt(order[title]) === 0) return
    const sum = {};
    sum[title] = order[title] - 1;
    setOrder({...order,...sum});
    // console.log("I am Removing",order)
  }


  return (
    <div className="cardContainer">
      <div className="rateContainer">
        <p>₹ {rate}</p>
      </div>
      <div className="avatarContainer">
        <div className="avatarCircle">
          <img
            className="avatar"
            alt="food"
            src={sourceImg}
          />
        </div>
      </div>
      <div className="descriptionContainer">
        <CardBody>
          <CardTitle className="text-center" tag="h5">{title}</CardTitle>
          <CardText className='desc' tag="p">{description}</CardText>
        </CardBody>
      </div>
      <div className="counterContainer">
        <div className="countContainer">
          <div onClick={removeOrder} className="countButton">
            <Dash color="white" size={96} />
          </div>
        </div>
        <div className="countContainer">{order[title]}</div>
        <div className="countContainer">
          <div onClick={addOrder} className="countButton">
            <Plus color="white" size={96} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuCard;
