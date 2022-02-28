import React from 'react';
import { Link } from 'react-router-dom';

export default function PostCard({ post: {id, title, userId} } ) {
  return (
    <Link to={`/singlePost/${id}`}>
        <div className='post-container'>
            <h4>{title}</h4>
            <p>Escrito por: {userId}</p>
        </div>
    </Link>
    
  )
}
