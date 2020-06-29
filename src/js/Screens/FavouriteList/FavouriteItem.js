import React, { Component } from "react";
import { faListAlt } from "@fortawesome/free-regular-svg-icons";
import {
  faCartPlus,
  faInfoCircle,
  faTrashAlt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class FavouriteItem extends Component {
  render() {
    const { image, name, sku, price, unit } = this.props._favouriteItem;
    return (
      <div className="p-list-item">
        <div className="p-list-col p-main-col">
          <div className="p-list-col p-product-img">
            <img className="img-fluid" src={image} alt={name} />
          </div>
          <div className="p-list-col p-product-info">
            <span className="badge badge-secondary">{sku}</span>
            <p className="p-name">{name}</p>
            <button type="button" className="p-btn-xs">
              <FontAwesomeIcon icon={faInfoCircle} className="btn-icon" />
              Detail
            </button>
            <button type="button" className="p-btn-xs">
              <FontAwesomeIcon icon={faTrashAlt} className="btn-icon" />
              Delete
            </button>
          </div>
        </div>
        <div className="p-list-col p-remain-col">
          <p className="p-price p-list-col">
            <span className="inter-medium">${price}</span> / {unit}
          </p>
          <div className="p-actions p-list-col">
            {this._generateChildrenButton()}
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => this.props._addToCart(this.props._favouriteItem)}
            >
              <FontAwesomeIcon icon={faCartPlus} className="btn-icon" />
              Add to cart
            </button>
          </div>
        </div>
      </div>
    );
  }
  _generateChildrenButton = () => {
    const children = this.props._favouriteItem.children;
    return children > 0 ? (
      <button
        type="button"
        className="btn btn-outline-secondary only-icon p-badge-wrap"
      >
        <FontAwesomeIcon icon={faListAlt} size="lg" />
        <span className="badge badge-fill-info">{children}</span>
      </button>
    ) : (
      ""
    );
  };
}

export default FavouriteItem;
