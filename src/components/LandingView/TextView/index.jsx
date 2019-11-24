import React from "react";
import classes from "./styles.module.css";
import { IoLogoTwitter } from "react-icons/io";
import { FaDribbble, FaInstagram } from "react-icons/fa";

const TextView = () => {
  return (
    <div className={classes.text_wrapper}>
      <h3 className={classes.text}>
        Have no time <br />
        to prepare food?
      </h3>
      <p className={classes.ptext}>
        Choose one of our plans, enter delivery time <br />
        and enjoy delicious food without leaving your home!
      </p>
      <button className={classes.btnOF}>Order Food</button>
      <div className={classes.icon_wrapper}>
        <h4>
          <IoLogoTwitter />
        </h4>
        <h4>
          <FaDribbble />
        </h4>

        <h4>
          <FaInstagram />
        </h4>
      </div>
    </div>
  );
};

export default TextView;
