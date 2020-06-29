import React, { Component } from "react";
import FavouriteListScreen from "../Screens/FavouriteList/FavouriteListScreen";
import CompanyOrdersScreen from "../Screens/CompanyOrders/CompanyOrdersScreen";
import "../../stylesheets/css/main-frame.css";

class Main extends Component {
  render() {
    return <main className="p-main">{this._renderScreen()}</main>;
  }

  _renderScreen = () => {
    switch (this.props._screen) {
      case "favouriteList":
        return (
          <FavouriteListScreen
            _favouriteList={this.props._favouriteList}
            _handleFilter={this.props._handleFilter}
            _addToCart={this.props._addToCart}
          />
        );
      case "companyOrders":
        return <CompanyOrdersScreen />;
      default:
        return null;
    }
  };
}

export default Main;
