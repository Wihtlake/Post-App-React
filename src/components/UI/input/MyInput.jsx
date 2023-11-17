import React from 'react';
import { TextField } from '@mui/material';
const MyInput = React.forwardRef((props, ref) => {
    return ( 
           <TextField inputRef={ref} {...props}/>
     );
});
 
export default MyInput;