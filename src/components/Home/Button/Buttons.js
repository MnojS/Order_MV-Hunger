import React from 'react'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'

function Buttons() {
    return (
        <div>
             <ButtonGroup className="buttonGroup">
                <Button 
                    size="large"
                    variant="contained"
                    color="secondary"
                    >Order
                </Button>
                <Button 
                    size="large"
                    variant="outlined"
                    color="secondary"
                    >Order Now
                </Button>
            </ButtonGroup>
        </div>
    )
}

export default Buttons;
