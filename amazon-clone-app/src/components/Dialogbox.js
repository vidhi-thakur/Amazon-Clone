import React from 'react'
import './Dialogbox.css'
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';

function Dialogbox() {
    return (
        <div className="dialogbox dialog__flex">
            <div className="dialogbox__header dialog__flex">
                <h4 className="dialogbox__title">Choose your location</h4>
                <CloseRoundedIcon />
            </div>
            <div className="dialogbox__body">
                <small className="dialog__para">Select a delivery location to see product availability and delivery options</small>
                    <form className="dialogbox__form dialog__flex">
                        <input className="dialogbox__input" />
                        <button className="dialogbox__button" type="submit">Apply</button>
                    </form>
            </div>
        </div>
    )
}

export default Dialogbox


