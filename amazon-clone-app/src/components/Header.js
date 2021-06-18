import React from 'react'
import Headercomponent from "./Headercomponent"
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from '../StateProvider';
import "./Header.css"
import {Link} from "react-router-dom"

function Header() {

    const [{basket}, dispatch] = useStateValue();

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
            <Link to="/checkout/" className="header__link">
                <div className="header__basket mar ca">
                    <ShoppingCartIcon className="mar cp" />
                    <span className="cp">{basket?.length}</span>
                </div>
            </Link>
        </div>
    )
}

export default Header
