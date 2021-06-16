import React from 'react'
import Headercomponent from "./commonComponents/Headercomponent"
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import "./Header.css"

function Header() {
    return (
        <div className="header ca">
            <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
            <Headercomponent inputLine1="Deliver to" inputLine2="Enter address" />
            <div className="header__searchfield ca mar">
                <input />
                <SearchRoundedIcon />
            </div>
            <Headercomponent inputLine1="Hello," inputLine2="Sign In" />
            <Headercomponent inputLine1="Returns" inputLine2="& Orders" />
            <Headercomponent inputLine1="Your" inputLine2="Prime" />
            <div className="header__basket mar ca">
                <ShoppingCartIcon className="mar cp" />
                <span className="cp">0</span>
            </div>
        </div>
    )
}

export default Header
