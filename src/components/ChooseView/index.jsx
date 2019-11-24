import React, { useEffect, useState } from "react";
import classes from "./styles.module.css";
import SingleItem from "./singleItem";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import {
  Container,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col
} from "reactstrap";

import list1 from "../../assets/list1.png";
import list2 from "../../assets/list2.jpg";
import list3 from "../../assets/list3.jpg";
import list4 from "../../assets/list4.jpg";

const imgs = [
  { id: 1, src: list1, name: "Burger", price: "5.99" },
  { id: 2, src: list2, name: "Pizza", price: "5.99" },
  { id: 3, src: list3, name: "Grilled Sandwich", price: "5.99" },
  { id: 4, src: list4, name: "Chicken Pasta", price: "5.99" }
];

const ChooseView = () => {
  const [items, setItems] = useState(imgs);
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedSnapShot, setSelectedSnapShot] = useState({});
  const [selectedID, setSelectedID] = useState([]);

  const getItem = (id, type) => {
    const item = items.filter(item => item.id === id);
    return {
      ...item,
      type: type
    };
  };

  const onRemoveClick = () => {
    console.log();

    if (selectedSnapShot && selectedSnapShot.type === "rem") {
      setSelectedItems(
        selectedItems.filter(i => i.id !== selectedSnapShot[0].id)
      );
      setSelectedSnapShot({});
    }
  };
  const sSnapShot = (id, type) => {
    setSelectedSnapShot(getItem(id, type));
    setSelectedID([id, type]);
  };

  const onAddClick = () => {
    if (selectedSnapShot && selectedSnapShot.type === "add") {
      if (selectedItems.filter(item => item.id === selectedSnapShot[0].id))
        setSelectedItems([...selectedItems, selectedSnapShot[0]]);
      setSelectedSnapShot({});
    }
  };

  console.log(selectedID);
  const getTotalAmount = () => {
    let totalPrice = 0;
    if (selectedItems.length > 0) {
      selectedItems.map(item => (totalPrice += Number(item.price)));
    }
    return totalPrice;
  };

  return (
    <div className={classes.ChooseView_wrapper}>
      <div className={classes.overlaybg}>
        <Container >
          <Row className={classes.chooseRow}>
            <Col md="5">
              <Card body className={classes.cardMinHeight}>
                <CardTitle>
                  <h3 className={classes.cardHeading}>Available Options</h3>
                </CardTitle>
                {items.map(i => (
                  <SingleItem
                    key={i.id}
                    id={i.id}
                    src={i.src}
                    name={i.name}
                    price={i.price}
                    sSnapShot={sSnapShot}
                    avi
                    isSelected={
                      selectedID[0] == i.id && selectedID[1] === "add"
                    }
                  />
                ))}
              </Card>
            </Col>
            <Col md="2" className={classes.actionBtnsWrwpper}>
              <div className={classes.actionBtns}>
                <Button onClick={onAddClick} className={classes.addBtn}>
                  Add to Cart >>
                </Button>
                <Button onClick={onRemoveClick} className={classes.removeBtn}>
                  {`<< Remove from Cart`}
                </Button>
              </div>
            </Col>
            <Col md="5">
              <Card body className={classes.cardMinHeight}>
                <CardTitle>
                  <h3 className={classes.cardHeading}>Your Cart</h3>
                </CardTitle>
                {selectedItems.map(i => (
                  <SingleItem
                    key={i.id}
                    id={i.id}
                    src={i.src}
                    name={i.name}
                    price={i.price}
                    sSnapShot={sSnapShot}
                    isSelected={
                      selectedID[0] == i.id && selectedID[1] === "rem"
                    }
                  />
                ))}
                <div className={classes.totalAmount}>
                  <p>Total amount</p>
                  <span className="t-b">${getTotalAmount()}</span>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ChooseView;
