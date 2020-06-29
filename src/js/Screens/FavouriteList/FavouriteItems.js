import React, { Component } from "react";
import FavouriteItem from "./FavouriteItem";

class FavouriteItems extends Component {
  render() {
    return (
      <div className="p-list p-fav-list">
        <div className="p-list-header">
          <div className="p-list-col p-main-col">
            <label>Products</label>
          </div>
          <div className="p-list-col p-remain-col">
            <label>Unit price</label>
          </div>
        </div>
        {this._generateFavouriteList()}
      </div>
    );
  }
  _generateFavouriteList = () => {
    return this.props._favouriteList.map(item => {
      return (
        <FavouriteItem
          key={item.id}
          _favouriteItem={item}
          _addToCart={this.props._addToCart}
        />
      );
    });
  };
}

export default FavouriteItems;
