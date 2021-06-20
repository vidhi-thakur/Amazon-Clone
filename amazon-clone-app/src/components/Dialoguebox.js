import React from 'react'

function Dialoguebox() {
    return (
        <div>
            {
                openDialog && <Dialog
                title="Dialog Title"
                modal={true}
                onClose={handleClose}
                buttons={
                    [{
                        text: "Close",
                        onClick: () => handleClose()
                    }]
                }>
                <h1>Dialog Content</h1>
                <p>More Content. Anything goes here</p>
            </Dialog>
            }
        </div>
    )
}

export default Dialoguebox
