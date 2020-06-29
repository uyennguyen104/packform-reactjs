import React, { Component } from "react";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import searchIcon from "../../../images/search-ico.svg";

class FavouriteFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      category: ""
    };
  }
  render() {
    return (
      <form
        ref="filterForm"
        autoComplete="off"
        role="form"
        aciton="#"
        className="p-horizontal-form p-filter-form"
        onSubmit={this._handleSubmit}
      >
        <div className="form-group p-term-search">
          <label>Search everything</label>
          <div className="p-separated-control">
            <div className="input-group p-pre-input-group has-clear-icon flex-nowrap">
              <input
                autoComplete="off"
                type="text"
                name="term"
                className="form-control"
                placeholder="Product name, SKU, Price..."
                value={this.state.term}
                onChange={this._handleChange}
              />
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <img src={searchIcon} alt="" className="fluid-img" />
                </span>
              </div>
              {this.state.term !== "" && (
                <a
                  href="#"
                  title=""
                  className="btn btn-link p-clear-btn"
                  onClick={this._clearTerm}
                >
                  <FontAwesomeIcon icon={faTimes} />
                </a>
              )}
            </div>
          </div>
        </div>
        <div className="form-group p-cate-filter">
          <label>Category</label>
          <div className="p-separated-control">
            <select
              name="category"
              className="form-control"
              onChange={this._handleChange}
            >
              <option value={""}>Any</option>
              <option value={"1"}>Category 1</option>
              <option value={"2"}>Category 2</option>
            </select>
          </div>
        </div>
      </form>
    );
  }
  _handleChange = e => {
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      () => {
        this.props._handleFilter(this.state);
      }
    );
  };
  _handleSubmit = e => {
    e.preventDefault();
  };
  _clearTerm = e => {
    e.preventDefault();
    this.setState(
      {
        term: ""
      },
      () => {
        this.props._handleFilter(this.state);
      }
    );
  };
}

export default FavouriteFilter;
