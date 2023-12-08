import { useContext, useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("inicio");
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" width="50px" height="50px" />
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("inicio");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            Inicio
          </Link>
          {menu === "inicio" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("literatura");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/literatura">
            Literatura
          </Link>
          {menu === "literatura" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("ciencia");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/ciencia">
            Ciencia
          </Link>
          {menu === "ciencia" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("niños");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/niños">
            Niños
          </Link>
          {menu === "niños" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
