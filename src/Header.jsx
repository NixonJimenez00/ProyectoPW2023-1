import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { NavLink } from "react-router-dom";
import { useStateValue } from "./StateProvider,";
function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="header">
      <NavLink to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </NavLink>
      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <NavLink to="/login">
          <div className="header_option">
            <span className="header_optionLineOne"> Hello Nixon </span>
            <span className="header_optionLineTwo"> Sign In </span>{" "}
          </div>
        </NavLink>

        <div className="header_option">
          <span className="header_optionLineOne"> Returns </span>
          <span className="header_optionLineTwo"> & Orders </span>
        </div>

        <div className="header_option">
          <span className="header_optionLineOne"> Your </span>
          <span className="header_optionLineTwo"> Prime </span>
        </div>
        <NavLink to="/checkout">
          <div className="header_optionBasket">
            <ShoppingBasketIcon></ShoppingBasketIcon>
            <span className="header_optionLineTwo header_basketCount">
              {basket?.length}
            </span>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
