import React from "react";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
import withTimer from "../c06/withTimer";
import "./CommentBox.css";

const comments = [
  {
    author: "Nate",
    content: "Hello React! This is a sample comment.",
  },
  { author: "Kevin", content: "Hello Redux!" },
  { author: "Bood", content: "Hello Rekit!" },
];
export class CommentBox extends React.PureComponent {

  constructor(){
    super();
    this.state = {
      commentData:comments
    }
  }
  
  handleForm = (textArea) =>{
    console.log('parent'+textArea);
    const newContent = [...comments, { author: "11",content:textArea}]
    this.setState({
      commentData:newContent
    });
  };

  render() {
    return (
      <div className="comment-box">
        <h1>Comments ({this.state.commentData.length})</h1>
        <CommentList comments={this.state.commentData} />
        <CommentForm handleForm={this.handleForm}/>
        {this.props.time.getTime()}
      </div>
    );
  }
}

export default withTimer(CommentBox);
