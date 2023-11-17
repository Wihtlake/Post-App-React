import React, { useEffect, useMemo, useState } from 'react';
import PostItem from '../components/PostItem';
import PostList from '../components/PostList';
import PostForm from '../components/PostForm';
import MyButton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/input/MyInput';
import MyModal from '../components/UI/modal/MyModal';
import PostSelect from '../components/UI/select/PostSelect';
import Loader from '../components/UI/Loader/Loader';
import { usePosts } from '../hooks/usePosts';
import { getPageCount } from '../API/utils/Pages';
import PostService from '../API/postService';
import '../components/css/App.css';
import {  Box, FormControl, FormLabel, FormHelperText, MenuItem, TextField, InputLabel, Select, Typography, Skeleton } from '@mui/material';
import { usePagination } from '../hooks/usePagination';
import PostFilter from '../components/PostFilter';
import { useFetching } from '../hooks/useFetching';



function Post() {
const [posts, setPosts] = useState([])

const [filter, setFilter ] = useState({sort:'', query:''})
const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query);
// Модальное окно управление
const [visible, setVisible] = React.useState(false);
const [modal, setModal] = React.useState(false);

// управление страницами
const [page, setPage] = React.useState(1);
const [limit, setLimit] = React.useState(10);
const [totalPages, setTotalPages] = React.useState(0);
// управление пагинацией 
let pagesArray = usePagination(totalPages);
const [target, setTarget] = useState(false);

const [fetchPosts, isPostLoading, postError] = useFetching( async () => {
  const response = await PostService.getAll(limit, page);
  setPosts(response.data);
  const totalCount = (response.headers['x-total-count']);
  setTotalPages(getPageCount(totalCount, limit))
} )

// Загрузка данных при монтировании компонента
useEffect( (p) => {
  fetchPosts()
}, [page])

// Воспользуемся useEffect для слежения за изменениями page и обновления URL
const TargetControl = async (p) =>{
  await  setPage(p)
}

// Созданние поста
  const createPost = (newPost) =>{
    setPosts([...posts, newPost ])
    setModal(false)
  }
// Удаление поста
  const deletePost = (post) =>{
    setPosts(posts.filter(p => p.id !== post.id))
  }

  
  return (
    <div className='App'>
      <MyModal visible={modal}  setVisible={setModal}>
        <PostForm  create={createPost}/>
      </MyModal>
      <Box display="flex" sx={{
        alignItems:'center',
        width:'50%',
        justifyContent:'space-between',
        margin:'0 auto',
      }}>
      <PostFilter filter={filter} setFilter={setFilter} />
      <MyButton onClick={() => setModal(true)}>Создать пост</MyButton>
      </Box>
      {isPostLoading
      ?<Loader />
      :<PostList remove={deletePost} posts={sortedAndSearchPosts} title={`Список постов ${page}`} />
    }
    {postError &&
      <Typography variant="body1" color="#95a5a6"sx={{textAlign:'center',display:'flex', alignItems:'center', justifyContent:'center',}} >Ошибка: <Typography variant="body2" color="red" fontWeight={500}>${postError}</Typography> </Typography>
    }
    <Box display="flex" mx="5" my="5" sx={{
      width:'50%',
      margin:'0px auto',
      padding: '50px 0',
      justifyContent:'space-between',
    }}>
      
    {pagesArray.map(p => 
      <MyButton onClick={()=> TargetControl(p)} variant={page === p ? "contained" : "outlined"} >{ p }</MyButton>
      )}
      </Box>
    </div>
  );
}

export default Post;