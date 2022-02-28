import React, { useState, useEffect } from 'react'
import PostCard from '../../componentes/PostCard/PostCard'

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(data => data.json())
    .then(data => setPosts(data));
  });

  return (
    <div>
        <h2 className='title'>Posts del blog</h2>

        <div className='post-cont'>
        {posts.map((post) => {
          return (
            <PostCard key={post.id} post={post}/>
          )
        })}
        </div>
      
    </div>
  )
}
