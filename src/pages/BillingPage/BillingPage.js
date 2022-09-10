import { useLocation,useNavigate } from "react-router-dom";
import {
  Col,
  Container,
  Input,
  InputGroup,
  InputGroupText,
  Row,
} from "reactstrap";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from 'axios';

import "./style.css";
import { sumOfOrderObjects } from "../../utils/sumOfOrders";
import { totalMenu } from "../../constants/menu";
import { billTotal } from "../../utils/billTotal";
import { ordersArray } from "../../utils/ordersArray";

function BillingPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const sumbitToBackend = async (values) => {
    try {
      const orders = ordersArray(location.state);
      const json={...values,itemDetails:[...orders],totalAmount:billTotal(location.state, totalMenu)}
      const res = await axios.post('http://localhost:8080/order', json);
      navigate("/menu");
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  }

  const formik = useFormik({
    initialValues: {
      customerName: "",
      customerEmail: "",
      customerPhone: "",
    },
    onSubmit: (values) => {
       sumbitToBackend(values);
    },
    validationSchema: yup.object({
      customerName: yup.string().required("It is a required field"),
      customerEmail: yup
        .string()
        .email("It must be an email")
        .required("It is a required field"),
      customerPhone: yup
        .string()
        .required("It is a required field")
        .min(10,"Must be 10 digit")
        .max(10,"Must be 10 digit"),
    }),
  });

  // console.log(formik.errors)

  return (
    <Container className="billContainer">
      <form onSubmit={formik.handleSubmit}>
        <Row className="topRow">
          <Col>
            <Input
              type="text"
              id="customerName"
              name="customerName"
              value={formik.values.customerName}
              onChange={formik.handleChange}
              placeholder="Name"
              className="inputs"
            />
             {formik.touched.customerName && formik.errors.customerName && (
                <div style={{ color: "red" }}>{formik.errors.customerName}</div>
              )}
          </Col>
          <Col>
            <Input
              id="customerEmail"
              name="customerEmail"
              value={formik.values.customerEmail}
              onChange={formik.handleChange}
              placeholder="Email"
              className="inputs"
            />
            {formik.touched.customerEmail && formik.errors.customerEmail && (
                <div style={{ color: "red" }}>{formik.errors.customerEmail}</div>
              )}
          </Col>
          <Col>
            <InputGroup>
              <InputGroupText>+91</InputGroupText>
              <Input
                id="customerPhone"
                name="customerPhone"
                value={formik.values.customerPhone}
                onChange={formik.handleChange}
                placeholder="Phone Number"
                className="inputs"
              />
            </InputGroup>
            {formik.touched.customerPhone && formik.errors.customerPhone && (
                <div style={{ color: "red" }}>{formik.errors.customerPhone}</div>
              )}
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
              return null;
            })}
            <Row className="total mt-3 ms-3 me-3">
              <Col className="text-white mt-3">
                <h5>Total</h5>
              </Col>
              <Col className="text-white mt-3">
                <h5>₹ {billTotal(location.state, totalMenu)}</h5>
              </Col>
            </Row>
          </Col>
        </Row>
        <button
          type="submit"
          disabled={formik.errors.customerEmail||formik.errors.customerName||formik.customerPhone}
          className="submitButton ms-auto mt-5 me-2"
        >
          SUBMIT
        </button>
      </form>
    </Container>
  );
}

export default BillingPage;
