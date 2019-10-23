import React, { Component } from 'react';

import PostItem from './PostItem'

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Post author",
          avatar: "https://i.pravatar.cc/150?img=3"
        },
        date: "04 Jun 2019",
        content: "Post text post text post text post text post text post text ?",
        comments: [
          {
            id: 1,
            author: {
              name: "Commentary author",
              avatar: "https://i.pravatar.cc/150?img=4"
            },
            content: "Commentary text commentary text commentary text commentary text commentary text"
          },
          {
            id: 2,
            author: {
              name: "Commentary author",
              avatar: "https://i.pravatar.cc/150?img=5"
            },
            content: "Commentary text commentary text commentary text commentary text commentary text"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Post author",
          avatar: "https://i.pravatar.cc/150?img=6"
        },
        date: "04 Jun 2019",
        content: "Post text post text post text post text post text post text ?",
        comments: [
          {
            id: 1,
            author: {
              name: "Commentary author",
              avatar: "https://i.pravatar.cc/150?img=7"
            },
            content: "Commentary text commentary text commentary text commentary text commentary text"
          },
          {
            id: 2,
            author: {
              name: "Commentary author",
              avatar: "https://i.pravatar.cc/150?img=8"
            },
            content: "Commentary text commentary text commentary text commentary text commentary text"
          }
        ]
      },
      {
        id: 3,
        author: {
          name: "Post author",
          avatar: "https://i.pravatar.cc/150?img=9"
        },
        date: "04 Jun 2019",
        content: "Post text post text post text post text post text post text ?",
        comments: [
          {
            id: 1,
            author: {
              name: "Commentary author",
              avatar: "https://i.pravatar.cc/150?img=10"
            },
            content: "Commentary text commentary text commentary text commentary text commentary text"
          },
          {
            id: 2,
            author: {
              name: "Commentary author",
              avatar: "https://i.pravatar.cc/150?img=11"
            },
            content: "Commentary text commentary text commentary text commentary text commentary text"
          }
        ]
      },
    ]
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="postlist">
        {
          posts.map
            (post => <PostItem key={post.id} {...post} />)
        }
      </div>
    )
  }
}

export default PostList;