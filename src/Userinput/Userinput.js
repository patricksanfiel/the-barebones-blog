import React from 'react';

const userInput = (props) => {
  return (
    <div>
      <input
      type="text"
      value={props.blogPost}
      onChange={props.changed}
      className="inputField"/>
    </div>
  )
}
export default userInput
