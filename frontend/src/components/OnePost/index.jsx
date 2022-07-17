import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../Comments';

const SinglePost = () => {
  const params = useParams();

  const [post, setPost] = useState({});

  const Comment = () => {

    axios
    .get(`http://localhost:5000/api/blog/` + params.id)
    .then((post) => {
      axios
      .get(`http://localhost:5000/api/comment/` + params.id)
      .then((comment) => {
         console.log(comment);
        setPost({ ...post.data, comments: comment.data });
      });
    });
  }
    useEffect(() => {
      Comment();
  }, []);
  
  console.log(post);
  const commentDelete = (comment) => {
    console.log(comment);

  }

  return (
    <>
      <h1>{post.content}</h1>

      <ul>
        {post.comments &&
          post.comments.map((comment) => <li>{comment.content}</li>)}
      <button onClick={() => commentDelete(params.id)}>Supprimer</button>
      </ul>
      < Comments to={`/blog/${params.id}`} commentaire= {Comment}  />
    </>
  );
};

export default SinglePost;