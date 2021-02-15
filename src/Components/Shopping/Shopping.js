import React from "react";
import { Button, Col, Image, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { increment, items } from "../Items";
import style from "./Shopping.module.css";

const row = {
  backgroundColor: "#eee",
  width: "80%",
  margin: "2%",
  padding: "2%",
  borderRadius: "7px",
};

const button = {
  backgroundColor: "limegreen",
  border: "none",
  fontWeight: "bold",
};

const Shopping = (props) => {
  let itms = useSelector(items);
  let dispatch = useDispatch();
  let item = itms.map((item) => {
    return (
      <Row style={row} key={item.name} className={style.Row}>
        <Col sm={4}>
          <Image src={item.src.default} rounded />
          {console.log(item.src)}
        </Col>

        <Col sm={8}>
          <h3>{item.name}</h3>

          <p> Rs. {item.cost} </p>
          <Button
            style={button}
            onClick={() =>
              dispatch(increment({ name: item.name, count: item.count }))
            }
            key={item.name}
          >
            Add to cart
          </Button>
          {item.count > 0 ? " added " + item.count : ""}
        </Col>
      </Row>
    );
  });

  return <div className={style.Shopping}>{item}</div>;
};

export default Shopping;
