import React, { Component } from "react";
import FavouriteHeading from "./FavouriteHeading";
import FavouriteFilter from "./FavouriteFilter";
import FavouriteItems from "./FavouriteItems";
import "../../../stylesheets/css/favourite-list.css";

class FavouriteListScreen extends Component {
  render() {
    return (
      <div className="p-fav-list-wrap">
        <FavouriteHeading _favouriteTotal={this.props._favouriteList.length} />
        <FavouriteFilter _handleFilter={this.props._handleFilter} />
        <FavouriteItems
          _favouriteList={this.props._favouriteList}
          _addToCart={this.props._addToCart}
        />
      </div>
    );
  }
}

export default FavouriteListScreen;
