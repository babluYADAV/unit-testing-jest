import React from "react";

const CommentList = ({ allCommnents }) => {
  if (allCommnents.length == 0) {
    return <h2>No commnets available</h2>;
  }
  return (
    <div>
      <ul>
        {allCommnents.map(({ id, comment }) => {
          return <li key={id}>{comment}</li>;
        })}
      </ul>
    </div>
  );
};

export default CommentList;
