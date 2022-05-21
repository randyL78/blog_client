import React, {useEffect, useState} from 'react';
import axios from 'axios';

// eslint-disable-next-line react/prop-types
const CommentList = ({postId}) => {
  const [comments, setComments] = useState([]);
  const fetchComments = async () => {
    const res = await axios.get(`http://localhost:33013/comments-1.0-SNAPSHOT/posts/${postId}/comments`);

    setComments(res.data);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const renderedComments = comments.map((comment) => {
    return (
      <li key={comment.uuid}>{comment.content}</li>
    );
  });

  return (
    <ul>
      {renderedComments}
    </ul>
  );
};

export default CommentList;
