import React from 'react';

const userOutput = (props) => {
  return(
    <div>
        <p className="userPost">{props.blogPost}</p>
      <div className="bloggerFooter">
        <p onClick={props.clicked}
        className="bloggerUsername">
          {props.userName}
        </p>
        </div>
    </div>
  )
}
export default userOutput
