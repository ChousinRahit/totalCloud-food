import React from "react";
import classes from "./styles.module.css";

const singleItem = props => {
  const { src, name, price, id, sSnapShot, avi, isSelected } = props;
  const getType = () => {
    return avi ? "add" : "rem";
  };

  return (
    <div
      className={
        isSelected
          ? [classes.cardView, classes.selected].join(" ")
          : classes.cardView
      }
      onClick={() => sSnapShot(id, getType())}
    >
      <div className={classes.cardLeftView}>
        <div>
          <img src={src} className={classes.img_list} />
        </div>
        <p className={classes.listText}>{name}</p>
      </div>
      <div className={classes.cardRightView}>
        <span>${price}</span>
      </div>
    </div>
  );
};

export default singleItem;
