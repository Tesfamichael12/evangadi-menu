import { Component } from "react";

class PriceTag extends Component {
  render() {
    return (
      <>
        <p className="price-tag">{this.props.Price}</p>
      </>
    );
  }
}

export default PriceTag;
