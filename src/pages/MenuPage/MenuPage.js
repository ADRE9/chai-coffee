import { Col, Container, Row } from "reactstrap";

import "./style.css";
import MenuCard from "../../components/MenuCard";
import { row1, row2 } from "../../constants/menu";

function MenuPage() {
  return (
    <Container className="menuGrid">
      <Row className="rows">
        {row1.map((card, index) => {
          return (
            <Col key={index} className="cols">
              <MenuCard
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
                title={card.title}
                description={card.description}
                sourceImg={require(`../../assets/png/${card.icon}.png`)}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default MenuPage;
