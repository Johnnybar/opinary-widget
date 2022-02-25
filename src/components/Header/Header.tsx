import React from "react";
import logo from "../../assets/opinary-logo.svg";
import "./Header.scss";

function Header() {
  return (
    <header className="opinary-header w-100">
      <div className="opinary-header__content-wrapper">
        <img src={logo} alt="opinary logo" className="opinary-header__logo" />
        <h3 className="opinary-header__heading  text-center ">Opinary Poll</h3>
      </div>
    </header>
  );
}

export default Header;
