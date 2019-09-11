import React, { PureComponent } from "react";
import PropTypes from "prop-types";

export default class CommentForm extends PureComponent {
  static propTypes = {
    comments: PropTypes.object.isRequired
  };

  state = {
    testArea: ""
  };

  handleFormSubmit = evt =>{
    evt.preventDefault();
    if(this.state.testArea){
        this.props.handleForm(this.state.testArea);
    }
  };

  handleTextArae = evt =>{
    this.setState({
      testArea: evt.target.value
    });
  };

  render() {
    return (
      <div className="comment-form">
        <form onSubmit={evt => evt.preventDefault(),this.handleFormSubmit}>
          <textarea style={{ display: "block", width: "100%" }} onChange={this.handleTextArae} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
