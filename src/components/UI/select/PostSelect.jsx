import React from "react";
import {  Box, FormControl, FormLabel, FormHelperText, MenuItem, TextField, InputLabel, Select } from "@mui/material";

  
const PostSelect = ({options, defaultValue, value, onChange}) => {
    return ( 
            <Box sx={{ minWidth:'223px', }}>
                <FormControl fullWidth>
                    <InputLabel>Сортировка</InputLabel>
                    <Select
                        label="{option.name}"
                        value={options.value}
                        onChange={event => onChange(event.target.value)}
                    >
                <MenuItem value=''>Сбросить</MenuItem>
                    {options.map(option=>
                        <MenuItem key={option.value} value={option.value}>
                        {option.name}
                        </MenuItem>
                        )}
        </Select>
      </FormControl>
      </Box>
     );
}
 
export default PostSelect;