import React from "react";

const CommentData = ({ post, onUpdateRow, onDeleteRow, index }) => {
  const onDelete = () => {
    // eslint-disable-next-line no-restricted-globals
    confirm("Are you sure for delete comment?")
      ? onDeleteRow(index)
      : console.log("no delete");
    // onDeleteRow(index)
  };

  return (
    <tr>
      <td data-label="ID">{post.id}</td>
      <td data-label="Name">{post.name}</td>
      <td data-label="Email">{post.email}</td>
      <td data-label="Comment">{post.body}</td>
      <td data-label="Update">
        <button
          onClick={() => onUpdateRow(post.id)}
          className="ui blue basic button"
        >
          Update
        </button>
      </td>
      <td data-label="Delete">
        <button onClick={onDelete} className="ui red basic button">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default CommentData;
