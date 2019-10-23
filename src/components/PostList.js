import React, { Component } from 'react';

import Post from './Post'

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Post author",
          avatar: "http://url-da-imagem.com/imagem.jpg"
        },
        date: "04 Jun 2019",
        content: "Post text post text post text post text post text post text ?",
        comments: [
          {
            id: 1,
            author: {
              name: "Commentary author",
              avatar: "http://url-da-imagem.com/imagem.jpg"
            },
            content: "Commentary text commentary text commentary text commentary text commentary text"
          },
          {
            id: 2,
            author: {
              name: "Commentary author",
              avatar: "http://url-da-imagem.com/imagem.jpg"
            },
            content: "Commentary text commentary text commentary text commentary text commentary text"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Post author",
          avatar: "http://url-da-imagem.com/imagem.jpg"
        },
        date: "04 Jun 2019",
        content: "Post text post text post text post text post text post text ?",
        comments: [
          {
            id: 1,
            author: {
              name: "Commentary author",
              avatar: "http://url-da-imagem.com/imagem.jpg"
            },
            content: "Commentary text commentary text commentary text commentary text commentary text"
          },
          {
            id: 2,
            author: {
              name: "Commentary author",
              avatar: "http://url-da-imagem.com/imagem.jpg"
            },
            content: "Commentary text commentary text commentary text commentary text commentary text"
          }
        ]
      },
      {
        id: 3,
        author: {
          name: "Post author",
          avatar: "http://url-da-imagem.com/imagem.jpg"
        },
        date: "04 Jun 2019",
        content: "Post text post text post text post text post text post text ?",
        comments: [
          {
            id: 1,
            author: {
              name: "Commentary author",
              avatar: "http://url-da-imagem.com/imagem.jpg"
            },
            content: "Commentary text commentary text commentary text commentary text commentary text"
          },
          {
            id: 2,
            author: {
              name: "Commentary author",
              avatar: "http://url-da-imagem.com/imagem.jpg"
            },
            content: "Commentary text commentary text commentary text commentary text commentary text"
          }
        ]
      },
    ]
  };

  render() {
    return (
      <div className="post-list">
        {
          this.state.posts.map
            (post => <Post key={post.id} post={post} />)
        }
      </div>
    )
  }
}

export default PostList;