import React from 'react';

import Comment from './Comment';

function Post({ post }) {
  return (
    <div className="post">
      <strong>{post.author.name}</strong> <br/>
      <hr />
      {post.content}
      {post.comments.map(c => <Comment key={c.id} comment={c} /> )}
    </div>
  )
}

export default Post;