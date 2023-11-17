import React from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MyButton from "./UI/button/MyButton";





const PostItem = (props) =>{
  console.log(props);
    return(
            <Box display="row" mx="2rem" my="2rem" sx={{
                maxWidth:'700px',
                display: 'flex',
                justifyContent: 'space-between',
                padding:'10px 20px',
                alignItems: 'center',
                margin:'20px auto',
                minHeight: '10vh',
                background:'#fdfdfd',
                borderRadius:'10px',
            }}>
            <Box>
              <Typography variant="subtitle2" color="#57606f">Номер поста: {props.post.id}</Typography>
              <Typography variant="h6" color="#303952">{props.post.title}</Typography>
              <Typography variant="subtitle2" color="#747d8c">{props.post.body} </Typography>
            </Box>
              
              <MyButton onClick={() => props.remove(props.post)} 
              sx={{
                minWidth:'90px',
                marginLeft:'20px',
              }}>Удалить</MyButton>
            </Box>

    )


}
export default PostItem;