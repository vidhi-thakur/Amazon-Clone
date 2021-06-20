import React, { useState } from 'react'
import Headercomponent from "./Headercomponent"
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from '../StateProvider';
import "./Header.css"
import {Link} from "react-router-dom"
import { auth } from '../firebase';
import Dialog from 'react-dialog'

function Header() {

    const [{user, basket}, dispatch] = useStateValue();
    const [openDialog, setOpenDialog] = useState(false);

    const handleClose = () => {
        setOpenDialog(false);
    }

    const handleOpen = () => {
        setOpenDialog(true);
        console.log(!openDialog)
    }

    const stateChange = () => {
        auth.signOut();
    }

    return (
        <div className="header ca">
            <Link to="/" className="header__link">
                <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
            </Link>
            {/* <Link to="/useraddress" className="header__link"> */}
            <div  onClick={handleOpen} className="header__link">
                <Headercomponent inputLine1="Deliver to" inputLine2="Enter address" />
            </div>
            {/* </Link> */}
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
