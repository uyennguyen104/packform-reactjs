import React, { Component } from "react";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import avatar from "../../images/temp/avatar@2x.png";
import logo from "../../images/logo.svg";
import "../../stylesheets/css/header.css";

class Header extends Component {
  render() {
    return (
      <header className="p-header">
        <div className="p-logo">
          <a href="#" title="Packform">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="p-header-right">
          <div className="p-header-element">
            <a href="#" className="">
              <FontAwesomeIcon icon={faBell} size="lg" className="p-gray-a" />
            </a>
          </div>
          <div className="dropdown p-header-element">
            <button
              className="btn btn-link dropdown-toggle p-user-group"
              type="button"
              onClick={this._toggleDropdown}
            >
              <span className="p-user-avatar">
                <img src={avatar} alt="John Doe" className="img-fluid" />
              </span>
              <span className="p-user-info">
                <span className="p-user-name">John Doe</span>
                <span className="p-user-role">Pro Industrial</span>
              </span>
            </button>
            <div
              className="dropdown-menu dropdown-menu-right"
              ref="dropdownMenu"
            >
              <a className="dropdown-item" href="#">
                Logout
              </a>
            </div>
          </div>
          <div className="p-header-element">
            <button type="button" className="btn btn-warning p-mycart-btn">
              <FontAwesomeIcon icon={faShoppingCart} className="btn-icon" />
              My Cart
              <span className="btn-addon p-mycart-num">{this._getCartItemsNumber()}</span>
            </button>
          </div>
        </div>
      </header>
    );
  }
  _toggleDropdown = () => {
    this.refs.dropdownMenu.classList.toggle("show");
  };

  _getCartItemsNumber = () => {
    return this.props._cartItems.reduce((memo, item) => (memo + item.quantity), 0);
  };
}

export default Header;
