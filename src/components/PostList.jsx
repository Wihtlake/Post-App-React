import React from 'react';
import PostItem from './PostItem';
import './css/PL_anim.css';
import { Typography } from '@mui/material';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
const PostList = ({posts, title, remove}) => {

   

    return (  
        <div>
            
            <Typography variant="h4" textAlign='center' sx={{
                color:'#303952',
                background: '#fdfdfd',
                padding:'20px 0px',
                marginTop:'20px',
                fontWeight:'100',
                margin:'0 auto',
                zIndex:'3',
            }}>{title}</Typography>

            <TransitionGroup>
            {posts.map((post, index) =>
            <CSSTransition
            key={post.id}
            timeout={500}
            classNames="post"
          >
                <PostItem remove={remove} number={index + 1} post={post} />
            </CSSTransition>
            )}
            </TransitionGroup>
                {posts.length !== 0
                    ? <box></box>: <Typography variant="h6" textAlign='center' sx={{
                marginTop:'10px',
                fontWeight:'100',
                color:'#95a5a6',
            }}>Постов нет.</Typography>

                }
        </div>
    );
}
 
export default PostList;