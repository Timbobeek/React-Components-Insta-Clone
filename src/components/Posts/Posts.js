import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
  console.log(props);
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, posts } = props;

  return (
    <div className='posts-container-wrapper'>
      {posts.map(post =>{
        return <Post post={post} key={post.id} likePost={likePost}/>;
      })}
      {/* first Post (a component) comes from import Post (Post.js), second post is gonna be sent to post.js (Post.props.post), like a key, third post is the value of the object  */}
      {/* Map through the posts array returning a Post component at each iteration */}
      {/* Check the implementation of Post to see what props it requires! */}
    </div>
  );
};

export default Posts;
