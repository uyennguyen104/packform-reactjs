import React, { Component } from "react";
import { getSiblings } from "../../js/utils/index.js";
import "../../stylesheets/css/aside.css";

class Sidebar extends Component {
  render() {
    return (
      <aside className="p-aside">
        <nav className="p-nav">
          <ul className="list-unstyled">
            <li>
              <a
                href="#"
                title=""
                className="active"
                onClick={e => this._changeScreen(e, "favouriteList")}
              >
                Favourite List
              </a>
            </li>
            <li>
              <a
                href="#"
                title=""
                onClick={e => this._changeScreen(e, "companyOrders")}
              >
                Company Orders
              </a>
            </li>
          </ul>
        </nav>
      </aside>
    );
  }

  _changeScreen = (event, screen) => {
    event.preventDefault();
    for (let n of getSiblings(event.target.parentNode)) {
      n.children[0].classList.remove("active");
    }
    getSiblings(event.target.parentNode);
    event.target.classList.add("active");
    this.props._changeScreen(screen);
  };
}

export default Sidebar;
