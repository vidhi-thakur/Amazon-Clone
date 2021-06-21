import React, { useState } from 'react'
import './Dialogbox.css'
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import { useStateValue } from '../StateProvider';

function Dialogbox() {

    const [{dialog, address}, dispatch] = useStateValue();
    const [input, setInput] = useState("")

    const handleSubmit = (e) => {
        dispatch({
            type: "SET_ADDRESS",
            address: input,
        })
        e.preventDefault();
        dispatch({
            type: "SET_DIALOG_CLOSE",
            dialog: false
        })
    }

    const handleClose = () => {
        dispatch({
            type: "SET_DIALOG_CLOSE",
            dialog: false
        })
    }

    return (
        <div className={dialog?"dialogbox dialog__flex active":"dialogbox dialog__flex"}>
            <div className="dialogbox__header dialog__flex">
                <h4 className="dialogbox__title">Choose your location</h4>
                <CloseRoundedIcon onClick={handleClose} className="pointer" />
            </div>
            <div className="dialogbox__body">
                <small className="dialog__para">Select a delivery location to see product availability and delivery options</small>
                    <form className="dialogbox__form dialog__flex">
                        <input value={input} onChange={(event) => setInput(event.target.value)} className="dialogbox__input" />
                        <button onClick={handleSubmit} className="dialogbox__button pointer" type="submit">Apply</button>
                    </form>
            </div>
        </div>
    )
}

export default Dialogbox


