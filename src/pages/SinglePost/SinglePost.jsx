import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function SinglePost() {
    const [postInfo, setPostInfo] = useState({
        title: "",
        userId: "",
        body: ""
    });

    const { postId } = useParams();

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts/" + postId)
        .then(data => data.json())
        .then(data => setPostInfo(data));
    }, [postId])

    const { title, userId, body } = postInfo;

  return (
    <div>
        <h2>{title}</h2>
        <p>By user: {userId}</p>
        <p>{body}</p>
    </div>
  )
}
