import React, {Component} from 'react';
import CommentPost from '../CommentPost';
import './styles.css';

function Post ({data}) {
  console.log(data.content);
    return (
     
      <div className="container-post">
        <header>
          <img src={data.author.avatar}></img>
          <div className="user-info">
            <strong>{data.author.name}</strong>
            <span>{data.date}</span>
          </div>
        </header>

        <p>{data.content}</p>
      
        <div className="divider" />

        {data.comments.map(comment => <CommentPost key={comment.id} comment={comment}/>)}
      </div>
    
    )
}

export default Post;