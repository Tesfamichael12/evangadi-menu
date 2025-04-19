import { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header className="title">
        <h1>{this.props.menuName}</h1>
        <div></div>
      </header>
    );
  }
}

export default Header;
