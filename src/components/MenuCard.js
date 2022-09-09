import { Plus, Dash } from "react-bootstrap-icons";
import { CardTitle,CardText, CardBody } from "reactstrap";
import "../styles/MenuCard.css";

function MenuCard({ sourceImg,title,description }) {
  return (
    <div className="cardContainer">
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
          <div className="countButton">
            <Dash color="white" size={96} />
          </div>
        </div>
        <div className="countContainer">0</div>
        <div className="countContainer">
          <div className="countButton">
            <Plus color="white" size={96} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuCard;
