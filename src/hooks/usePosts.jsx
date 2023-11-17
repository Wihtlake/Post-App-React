import React, { useMemo } from 'react';

export const useSortedPosts = (posts, sort) => {
    const sortedPosts = useMemo( () => {
        if(sort){
              return [...posts].sort((a , b) => a[sort].localeCompare(b[sort]))
          }
        return posts;
      }, [sort, posts])

      return sortedPosts;
}

export const usePosts = (post, sort, query) =>{
    const sortedPosts = useSortedPosts(post, sort)

    const sortedAndSearchPosts = useMemo( () => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query))
      }, [query, sortedPosts ])

      return sortedAndSearchPosts;
}






