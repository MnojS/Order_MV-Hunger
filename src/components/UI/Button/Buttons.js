import React from 'react'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'

function Buttons() {
    return (
        <div>
             <ButtonGroup className="buttonGroup">
                <Button 
                    style={{fontSize:"20px" , fontFamily:"Pangolin"}}
                    size="large"
                    variant="contained"
                    color="secondary"
                    href="\"
                    >Order Now
                </Button>
                <Button 
                    size="large"
                    style={{fontSize:"20px",fontFamily:"Pangolin" }}
                    variant="outlined"
                    color="inherit"
                    href="\menu"
                    >View Menu
                </Button>
            </ButtonGroup>
        </div>
    )
}

export default Buttons;
