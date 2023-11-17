import React from "react";
import PostSelect from "./UI/select/PostSelect";
import {  Box, FormControl, FormLabel, FormHelperText, MenuItem, TextField, InputLabel, Select } from '@mui/material';

const PostFilter = ({filter, setFilter}) => {
    return ( 
        <Box sx={{
            width:'50%',
            padding:'10px 0px',
            display:'flex',
            justifyContent:'space-between',
            alignItems:'center',
            margin:'20px 0',
          }}>
          <TextField 
          label='поиск'
          placeholder='поиск'
          value={filter.query}
          onChange={e => setFilter({...filter, query: e.target.value})}
          />
            <PostSelect 
            value={filter.sort}
            onChange={selectedSort => setFilter({...filter, sort: selectedSort })}
            defaultValue={"сортировка"}
            options={[
              {value: 'title', name:'По названию'},
              {value: 'body', name:'По описанию'},
            ]}
          />
          </Box>
     );
}
 
export default PostFilter;