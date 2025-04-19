import { Component } from "react";
import PriceTag from "../PriceTag/PriceTag";
class FoodItemCard extends Component {
  render() {
    return (
      <>
        {/* const props = {
                        key: item.id,
                        footItmeImg: itme.img,
                        foodItmeHeading: item.title,
                        Price: item.price,
                        foodDesc: itme.desc
        } */}
        <div className="single-food">
          <div className="img">
            <img
              src={this.props.footItemImg}
              alt={this.props.foodItemHeading}
            />
          </div>
          <div className="title-price">
            <h3>{this.props.foodItemHeading}</h3>
            <PriceTag Price={this.props.Price}></PriceTag>
          </div>
          <div className="food-desc">{this.props.foodDesc}</div>
        </div>
      </>
    );
  }
}

export default FoodItemCard;
