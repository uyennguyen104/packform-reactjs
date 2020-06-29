import React, { Component } from "react";
import { faGripHorizontal } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class FavouriteHeading extends Component {
  render() {
    return (
      <div className="p-heading-block">
        <h1 className="p-heading">
          Favourite List ({this.props._favouriteTotal})
        </h1>
        <button className="btn btn-outline-primary">
          <FontAwesomeIcon icon={faGripHorizontal} className="btn-icon" />
          Browse the full catalog
        </button>
      </div>
    );
  }
}

export default FavouriteHeading;
