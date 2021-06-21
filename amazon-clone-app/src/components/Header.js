import React from 'react'
import Headercomponent from "./Headercomponent"
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from '../StateProvider';
import "./Header.css"
import {Link} from "react-router-dom"
import { auth } from '../firebase';

function Header() {

    const [{user, basket, address}, dispatch] = useStateValue();

    const handleOpen = () => {
        dispatch({
            type: "SET_DIALOG_OPEN",
            dialog: true
        })
    }

    const stateChange = () => {
        auth.signOut();
    }

    return (
        <div className="header ca">
            <Link to="/" className="header__link">
                <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
            </Link>
            <div  onClick={handleOpen} className="header__link">
                <Headercomponent inputLine1="Deliver to" inputLine2={address? address: "Enter address"} />
            </div>
            <div className="header__searchfield ca mar">
                <input />
                <SearchRoundedIcon />
            </div>
            <Link to={user ? "/" :"/Signin"} onClick={stateChange} className="header__link">
                <Headercomponent inputLine1={ user ? `Hello, ${user.email}`: `Hello, guest`} inputLine2={ user ? `Sign Out`: `Sign In`} />
            </Link>
            <Link to="/" className="header__link">
                <Headercomponent inputLine1="Returns" inputLine2="& Orders" />
            </Link>
            <Link to="/" className="header__link">
                <Headercomponent inputLine1="Your" inputLine2="Prime" />
            </Link>
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
