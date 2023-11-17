import React, { useState } from 'react';
import {Stack, Alert, Box, IconButton, Collapse } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

const PostForm = ({create}) => {
  const [post, setPost] = useState({title: '', body:''} );

  const closePost = () =>{
      setTimeout(() =>{
            console.log('1');
            setOpen(false);
          }, 1500);
  };
    const addNewPost = () => {
        if(post.body == 0 || post.title == 0){
          setOpen(true);
          closePost();
        }
        else{
          const newPost = {
            ...post, 
            id:  new Date() .getTime() % 1000,
          }
          create(newPost);
          setOpen(false);
          setPost({title: '', body:''});
        }
      }
    {/* секция ошибки */}
      const [open, setOpen] = React.useState(false);
    {/* секция ошибки */}
      
    return ( 
        <Box sx={{
          background:'#fdfdfd',
          margin:'-8px -8px', 
          padding:'20px',
          width:'100%',
          borderRadius:'10px'
          }}>
        
        <Stack  direction='row' sx={{
          display:'flex',
          justifyContent:'space-around',
          alignItems:'center',
          margin:'5px auto',
          background:'#fdfdfd',
          padding:'20px',
          borderRadius:'10px'
          }}>
            <MyInput 
                label='title' 
                value={post.title} 
                onChange={e => setPost({ ...post, title: e.target.value})}
                />
                <MyInput 
                value={post.body} 
                onChange={e => setPost({ ...post, body: e.target.value})} 
                type='text' 
                label='description' 
                />
                <MyButton onClick={addNewPost} >Создать</MyButton>
        </Stack>


        {/* секция ошибки */}
            <Box sx={{ width: '50%', margin: '0 auto'}}>
            <Collapse in={open} >
            <Alert severity="warning" sx={{ borderRadius:'10px', marginTop:'10px',}}
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}>
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }>
            Ведите текст, чтобы создать пост
            </Alert>
            </Collapse>
            </Box>
        {/* секция ошибки */}
        </Box>
     );
    }
 
export default PostForm;