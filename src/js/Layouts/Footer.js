import React, { Component } from "react";
import "../../stylesheets/css/footer.css";

class Footer extends Component {
  render() {
    return (
      <footer className="p-footer">
        <p>© 2019 Packform Pty Ltd. All rights reserved.</p>
        <a href="#" title="">
          Privacy Policy
        </a>
      </footer>
    );
  }
}

export default Footer;
