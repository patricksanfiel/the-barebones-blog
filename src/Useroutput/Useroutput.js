import React from 'react';

const userOutput = (props) => {
  let outputPost =
  <div className="bloggerCard">
    <p className="userPost">
      {props.blogPost}
    </p>
    <div className="bloggerFooter">
      <p
      className="bloggerUsername">
        {props.userName}
      </p>
    </div>
  </div>

  if (props.userName === "@mysteriousBlogger") {
    outputPost=
    <div className="bloggerCard">
      <p className="userPost">
        {props.blogPost}
      </p>
      <div className="bloggerFooter">
        <p onClick={props.clicked}
        className="bloggerUsername">
          {props.userName}
        </p>
      </div>
    </div>
  }
  return(
    <div>
      {outputPost}
    </div>
  )
}
export default userOutput
