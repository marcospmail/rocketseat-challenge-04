import React from 'react';

function Comment({ comment }) {
  return (
    <div className="comment">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRDnWnpGOhVtVBquRN9IIEVRkXlEpvOiyknUtkBmmQ6ZyFfAofX" />
      <div>
        <strong>{comment.author.name}</strong>
        <span className="content">  {comment.content}</span>
      </div>
    </div>
  )
}

export default Comment;