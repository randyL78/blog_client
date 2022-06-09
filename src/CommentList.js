import React from 'react';
import PropTypes from 'prop-types';

const CommentList = ({comments}) => {
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

CommentList.propTypes = {
  comments: PropTypes.array,
};

export default CommentList;
