import { Component } from "react";

import "./NavbarStyles.css";

import { MenuItems } from "./MenuItems";

import { Link } from "react-router-dom";

import logofinal from "../assets/logofinal.png";

import AnchorLink from "react-anchor-link-smooth-scroll";

import { Dropdown, DropdownButton } from "react-bootstrap";

class Navbar extends Component {
  state = {
    clicked: false,
  };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <div className="navbar-logo">
          <img alt="logo" src={logofinal} />
          <h1>S&R-Legal</h1>
        </div>

        <div className="menu-icons" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  <i className={item.icon}></i> {item.title}
                </a>
              </li>
            );
          })}

          <DropdownButton id="dropdown-basic-button" title="Login">
            <Dropdown.Item as={Link} to="/org" target="_self">
              Organisation
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/cli" target="_self">
              Client
            </Dropdown.Item>
          </DropdownButton>
          <button className="primary">Signup</button>
        </ul>
      </nav>
    );
  }
}

export default Navbar;

// import { Component } from "react";
// import "./NavbarStyles.css";
// import { MenuItems } from "./MenuItems";
// import { Link } from "react-router-dom";
// import logofinal from "../assets/logofinal.png";
// import AnchorLink from "react-anchor-link-smooth-scroll";

// class Navbar extends Component {
//   // Set state
//   // Make Handleclick Function
//   state = { clicked: false };
//   handleClick = () => {
//     this.setState({ clicked: !this.state.clicked });
//   };

//   render() {
//     return (
//       <nav className="NavbarItems">
//         <div className="navbar-logo">
//           <img alt="logo" src={logofinal} />
//           <h1>S&R-Legal</h1>
//         </div>
//         <div className="menu-icons" onClick={this.handleClick}>
//           <i
//             className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
//           ></i>
//           {/* <i className="fas fa-bars"></i>
//           <i className="fas fa-times"></i> */}
//         </div>
//         <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
//           {MenuItems.map((item, index) => {
//             return (
//               <li key={index}>
//                 <a className={item.cName} href={item.url}>
//                   <i className={item.icon}></i>
//                   {item.title}
//                 </a>
//               </li>
//             );
//           })}
//           <button>Sign in</button>
//         </ul>
//       </nav>
//     );
//   }
// }

// export default Navbar;
