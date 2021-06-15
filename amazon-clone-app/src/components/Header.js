import React from 'react'
import Headercomponent from "./commonComponents/Headercomponent"
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function Header() {
    return (
        <div className="header">
            <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
            <Headercomponent inputLine1="Deliver to" inputLine2="Enter address" />
            <div className="header__searchfield">
                <input />
                <SearchRoundedIcon />
            </div>
            <Headercomponent inputLine1="Hello," inputLine2="Sign In" />
            <Headercomponent inputLine1="Returns" inputLine2="& Orders" />
            <div className="header__basket">
                <ShoppingCartIcon />
                <span>0</span>
            </div>
        </div>
    )
}

export default Header
