import React, { Component } from 'react';
import './App.css';
import Userinput from './Userinput/Userinput';
import Useroutput from './Useroutput/Useroutput';
import './Useroutput/Useroutput.css'
import './Userinput/Userinput.css'

class App extends Component {

  state = {
    bloggers:[
      {userName:"@mysteriousBlogger", blogPost:"I'm funny-looking. Click my name to update the blog find out who I am"},
      {userName:"@raoulDuke",
      blogPost:"Hiding in the bathtub. The bats will never find me in here"},
      {userName:"@ordellRobbie",
      blogPost:"Selling a gently used Lincoln sedan. Pay no mind to the stains in the trunk."}
    ]
  }

  revealMysteriousBlogger = (bloggerName) => {
    this.setState(
      {
        bloggers:[
          {userName:bloggerName, blogPost:"I smell pretty bad, too."},
          {userName:"@raoulDuke",
          blogPost:"Sooo hungover. If anyone lost a pony and half a wedding cake, they're in room 111 at Circus Circus. Sorry, probably"},
          {userName:"@ordellRobbie",
          blogPost:"Spent all my retirement savings on beard-wax and Kangols :("}
        ]
    })
  }

  updateYourBlog = (event) => {
    this.setState(
      {
        bloggers:[
          {userName:"@you", blogPost:event.target.value},
          {userName:"@raoulDuke",
          blogPost:"Hiding in the bathtub. The bats will never find me in here"},
          {userName:"@ordellRobbie",
          blogPost:"Selling a gently used Lincoln sedan. Pay no mind to the stains in the trunk."}
        ]
      }
    )
  }

  render() {
    const style = {
      fontFamily: "Baloo, cursive",
      color: "#add8e6",
      textOutline: "2px 2px black"
    };
    return (
      <div className="App">
        <h1 style={style}>Blogg'r</h1>
        <div className="bloggerCard">
          <Useroutput
            userName={this.state.bloggers[0].userName}
            blogPost={this.state.bloggers[0].blogPost}
            clicked={this.revealMysteriousBlogger.bind(this, "@you")}
            />
            <Userinput
            changed={this.updateYourBlog}/>
        </div>
        <div className="bloggerCard">
          <Useroutput
            userName={this.state.bloggers[1].userName}
            blogPost={this.state.bloggers[1].blogPost}/>
        </div>
        <div className="bloggerCard">
          <Useroutput
            userName={this.state.bloggers[2].userName}
            blogPost={this.state.bloggers[2].blogPost}/>
        </div>
        </div>
    );
  }
}

export default App;
