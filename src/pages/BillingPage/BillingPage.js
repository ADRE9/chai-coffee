import { useLocation } from "react-router-dom";
import {
  Col,
  Container,
  Input,
  InputGroup,
  InputGroupText,
  Row,
} from "reactstrap";

import "./style.css";
import { sumOfOrderObjects } from "../../utils/sumOfOrders";
import { totalMenu } from "../../constants/menu";
import { billTotal } from "../../utils/billTotal";

function BillingPage() {
  const location = useLocation();
  console.log(location);

  return (
    <Container className="billContainer">
      <Row className="topRow">
        <Col>
          <Input placeholder="Name" className="inputs" />
        </Col>
        <Col>
          <Input placeholder="Email" className="inputs" />
        </Col>
        <Col>
          <InputGroup>
            <InputGroupText>+91</InputGroupText>
            <Input placeholder="Phone Number" className="inputs" />
          </InputGroup>
        </Col>
      </Row>
      <Row className="bottomRow ms-5 me-5">
        <Col className="leftCol  mt-3">
          <h2 className="text-white">ORDERS</h2>
          {Object.keys(location.state).map((item) => {
            if (location.state[item] !== 0) {
              return (
                <Row key={item}>
                  <Col>
                    <h5 className="text-white">{item}</h5>
                  </Col>
                  <Col>
                    <h5 className="text-white">{location.state[item]}</h5>
                  </Col>
                </Row>
              );
            }
            return null;
          })}
          <Row className="total mt-3 ms-3 me-3">
            <Col className="text-white mt-3">
              <h5>Total</h5>
            </Col>
            <Col className="text-white mt-3">
              <h5>{sumOfOrderObjects(location.state)}</h5>
            </Col>
          </Row>
        </Col>
        <Col className="rightCol  mt-3">
          <h2 className="text-white">BILL</h2>
          {Object.keys(location.state).map((item) => {
            if (location.state[item] !== 0) {
              return (
                <Row key={item}>
                  <Col>
                    <h5 className="text-white">{item}</h5>
                  </Col>
                  <Col>
                    <h5 className="text-white">
                      {location.state[item] * totalMenu[item].rate}{" "}
                      <small>(Rate ₹ {totalMenu[item].rate})</small>
                    </h5>
                  </Col>
                </Row>
              );
            }
          })}
          <Row className="total mt-3 ms-3 me-3">
            <Col className="text-white mt-3">
              <h5>Total</h5>
            </Col>
            <Col className="text-white mt-3">
              <h5>{billTotal(location.state, totalMenu)}</h5>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <button
          // onClick={moveToBilling}
          // disabled={sumOfOrderObjects(order) !== 0 ? false : true}
          className="nextButton"
        >
          NEXT
        </button>
      </Row>
    </Container>
  );
}

export default BillingPage;
