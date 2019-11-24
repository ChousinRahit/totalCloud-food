import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { FiChevronsDown, FiPocket } from "react-icons/fi";
// import {
//   ,
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem
// } from "reactstrap";

import TextView from "./TextView";
import classes from "./style.module.css";

const LandingView = () => {
  return (
    <div name="pizzaBack" className={classes.pizzaBackCom}>
      <header className={classes.header}>
        <h3 className={classes.logo}>
          FOOD.<span>LOGO</span>
        </h3>
        <nav>
          <ul className={classes.nav_links}>
            <li>
              <a href="/about">ABOUT</a>
            </li>
            <li>
              <a href="/ofood">OUR FOOD</a>
            </li>
            <li>
              <a href="/plans">PLANS</a>
            </li>
          </ul>
        </nav>
        <a className={classes.button_cu}>CONTACT US</a>
      </header>
      <TextView />
      <h1 className={classes.downArrow}>
        <FiPocket />
      </h1>
    </div>
  );
};

export default LandingView;
