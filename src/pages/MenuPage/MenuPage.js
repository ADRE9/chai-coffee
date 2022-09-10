import { Col, Container, Row } from "reactstrap";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import "./style.css";
import MenuCard from "../../components/MenuCard";
import { row1, row2 } from "../../constants/menu";
import { sumOfOrderObjects } from "../../utils/sumOfOrders";

const initialState = {
  Espresso: 0,
  Tea: 0,
  "Cold Cream Mocha": 0,
  Frappe: 0,
  "Iced Tea": 0,
  Cappuccino: 0,
  "Chocolate Shake": 0,
  "Chilled Cola": 0,
  Donuts: 0,
  "Flavoured Milk": 0,
  "Coffee Beans": 0,
  "Hazelnut Coffee": 0,
};

function MenuPage() {
  const [order, setOrder] = useState({ ...initialState });
  const navigate = useNavigate();


  const moveToBilling = () => {
    let sum = 0;
    sum = sumOfOrderObjects(order);
    navigate("/billing",{state:{...order}})
  }

  return (
    <Container className="menuGrid">
      <Row className="rows">
        {row1.map((card, index) => {
          return (
            <Col key={index} className="cols">
              <MenuCard
                setOrder={setOrder}
                order={order}
                rate={card.rate}
                title={card.title}
                description={card.description}
                sourceImg={require(`../../assets/png/${card.icon}.png`)}
              />
            </Col>
          );
        })}
      </Row>
      <Row className="rows">
        {row2.map((card, index) => {
          return (
            <Col key={index} className="cols">
              <MenuCard
                setOrder={setOrder}
                order={order}
                rate={card.rate}
                title={card.title}
                description={card.description}
                sourceImg={require(`../../assets/png/${card.icon}.png`)}
              />
            </Col>
          );
        })}
      </Row>
      <div className="rowsNext">
        <button
          onClick={moveToBilling}
          disabled={sumOfOrderObjects(order) !== 0 ? false : true}
          className="nextButton"
        >
          NEXT
        </button>
      </div>
    </Container>
  );
}

export default MenuPage;
