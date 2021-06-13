import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';


const Comments = () => {
  const [comment, setComment] = useState(null);
  const { postId } = useParams();

  useEffect(() => {
    Promise.all([
      fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((r) => r.json())
      .then((data) => setComment(data))
    ])
  }, [postId]);

  return comment ? (
    <div>
      <p>{postId < 5 ? comment[postId].body : comment[1 ].body}</p>
    </div>
  ) : <h1>sorry</h1>
}

export default Comments;