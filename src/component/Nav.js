import React, { Component } from "react";

const items = [
  { id: 1, name: "Home" },
  { id: 2, name: "About" },
  { id: 3, name: "Skills" },
  { id: 4, name: "Works" },
  { id: 5, name: "Personal" },
  { id: 6, name: "Contact" },
];

class MenuList extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggled: false };
  }

  toggleMenu = () => {
    this.setState({ isToggled: !this.state.isToggled });
  };

  render() {
    return (
      <React.Fragment>
        <ul
          ref={ref => {
            this.menu = ref;
          }}
          className={`navbar__menu rowFlex ${
            this.state.isToggled ? "active" : "hide"
          }`}
        >
          {items.map(item => (
            <li key={item.id} className={"navbar__menu__item"}>
              <a href={`#${item.name.toLowerCase()}`} onClick={this.toggleMenu}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="navbar__toggleBtn"
          onClick={this.toggleMenu}
        >
          <i className="fas fa-bars"></i>
        </button>
      </React.Fragment>
    );
  }
}

class Nav extends Component {
  render() {
    return (
      <nav
        id="navbar"
        className="rowFlex"
        ref={ref => {
          this.nav = ref;
        }}
      >
        <div className="navbar__logo">
          <a href="#home" className="rowFlex">
            <img
              src={require("./images/logo/logo.png")}
              alt="logo"
              className="navbar__logo__img"
            />
            <div className="navbar__logo__name">
              <h2>Im Gwang Yeol</h2>
              <p>Front-end Developer</p>
            </div>
          </a>
        </div>
        <MenuList
          ref={ref => {
            this.MenuList = ref;
          }}
        />
      </nav>
    );
  }
}

export default Nav;
