import React, { Component } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import MainFrame from "./MainFrame";
import FavouriteData from "../../data/FavouriteData";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favouriteList: FavouriteData,
      filteredFavouriteList: FavouriteData,
      cartItems: [],
      screen: "favouriteList"
    };
  }
  render() {
    return (
      <div className="p-page-wrap p-flex-overflow">
        <Header _cartItems={this.state.cartItems} />
        <div className="p-main-wrap p-flex-overflow">
          <Sidebar _changeScreen={this._changeScreen} />
          <div className="p-main-container">
            <MainFrame
              _favouriteList={this.state.filteredFavouriteList}
              _screen={this.state.screen}
              _handleFilter={this._handleFilter}
              _addToCart={this._addToCart}
            />
            <Footer />
          </div>
        </div>
      </div>
    );
  }

  _changeScreen = screen => {
    this.setState({
      screen: screen
    });
  };

  _handleFilter = filterParams => {
    const term = filterParams.term.toLowerCase().trim();
    const category = parseFloat(filterParams.category);

    const byCategoryArr = this.state.favouriteList.filter(item => {
      return !category || parseFloat(item.category) === category;
    });
    const filteredArr = byCategoryArr.filter(item => {
      return (
        term === "" ||
        (item.name.toLowerCase().includes(term) ||
          item.sku
            .toString()
            .toLowerCase()
            .includes(term) ||
          item.price
            .toString()
            .toLowerCase()
            .includes(term))
      );
    });

    this.setState({
      filteredFavouriteList: filteredArr
    });
  };

  _addToCart = product => {
    const existedIndex = this.state.cartItems.findIndex(item => {
      return item.product.id === product.id;
    });
    this.setState(prevState => {
      return existedIndex > -1
        ? prevState.cartItems[existedIndex].quantity++
        : prevState.cartItems.push({ product: { ...product }, quantity: 1 });
    });
  };
}

export default Layout;
