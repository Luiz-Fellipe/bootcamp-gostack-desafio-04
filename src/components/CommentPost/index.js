import React from 'react';

import './styles.css';

function CommentPost ({comment}){
    return (
      <div className="post-comment">
        
        <img src={comment.author.avatar}></img>
        
        <div className= "content-comment">
          <p><strong>{comment.author.name} </strong> {comment.content}</p>
        </div>
        
      </div>
    )
}

export default CommentPost;