import React from 'react';
import { Button } from '@mui/material';
const MyButton = ( {children, ...props}) => {
    return (  
            <Button {...props} size='medium' sx={{margin:'0px 10px' ,}}>
            {children}
            </Button>
    )
}
 
export default MyButton;