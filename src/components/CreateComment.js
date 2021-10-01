import React from "react";
import Modal from "react-modal";
import { FormValid } from "./FormValid";

// const email_valid = /^[a-zA-Z][\\.a-zA-Z0-9]+@[a-zA-Z]+.[a-zA-Z]{2,4}$/gi;
const email_valid =
  /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

class CreateComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      name: "",
      email: "",
      comment: "",
      nameError: "",
      emailError: "",
      commentError: "",
    };
  }

  onPostCreateSubmit = (e) => {
    e.preventDefault();

    this.props.onCreateSubmit(this.state);
    this.setState({ isOpen: !this.state.isOpen });
    this.setState({ name: "", email: "", comment: "" });
  };
  // ==================================== submit btn ====================================
  subButton() {
    const err = FormValid(this.state);
    if (Object.keys(err).length === 0) {
      return (
        <button className="ui primary basic button" type="submit">
          Submit
        </button>
      );
    } else {
      return (
        <button disabled className="ui primary basic button" type="submit">
          Submit
        </button>
      );
    }
  }
  // ==================================== submit btn ====================================

  onChangeName = (e) => {
    this.setState({ name: e.target.value }, () => {
      const err =
        this.state.name.length > 5 ? "" : "Name must be less than 5 character.";

      this.setState({ nameError: err });
    });
  };
  onChangeEmail = (e) => {
    this.setState({ email: e.target.value }, () => {
      let err = "";
      if (!this.state.email.length) {
        err = "Please Fill the email field.";
      } else if (!email_valid.test(this.state.email)) {
        err = "Email is not valid.";
      }
      // console.log(err);
      this.setState({ emailError: err });
    });
  };
  onChangeComment = (e) => {
    this.setState({ comment: e.target.value }, () => {
      const err =
        this.state.comment.length < 1 ? "Please Fill the Comment field." : "";

      this.setState({ commentError: err });
    });
  };

  render() {
    return (
      <div>
        <button
          style={{ marginBottom: "2rem", cursor: "pointer" }}
          className="ui green button"
          onClick={() => this.setState({ isOpen: !this.state.isOpen })}
        >
          Create Comment
        </button>
        <Modal isOpen={this.state.isOpen}>
          <div className="ui container">
            <div className="header">Post Comment</div>
            <div className="content">
              <form onSubmit={this.onPostCreateSubmit} className="ui form">
                <div className="field">
                  <label>Name</label>
                  <input
                    value={this.state.name}
                    // onChange={(e) => this.setState({ name: e.target.value })}
                    onChange={this.onChangeName}
                    type="text"
                    // onBlur={this.onNameBlur}
                  />

                  {this.state.nameError && (
                    <p style={{ color: "#ff6600", marginTop: "5px" }}>
                      {this.state.nameError}
                    </p>
                  )}
                </div>
                <div className="field">
                  <label>Email</label>
                  <input
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                    // onChange={(e) => this.setState({ email: e.target.value })}
                    type="text"
                    // onBlur={this.onEmailBlur}
                  />

                  {this.state.emailError && (
                    <p style={{ color: "#ff6600", marginTop: "5px" }}>
                      {this.state.emailError}
                    </p>
                  )}
                </div>
                <div className="field">
                  <label>Comment</label>
                  <input
                    value={this.state.comment}
                    onChange={this.onChangeComment}
                    // onChange={(e) => this.setState({ comment: e.target.value })}
                    type="text"
                    // onBlur={this.onCommentBlur}
                  />

                  {this.state.commentError && (
                    <p style={{ color: "#ff6600", marginTop: "5px" }}>
                      {this.state.commentError}
                    </p>
                  )}
                </div>
                {this.subButton()}
                <button
                  onClick={() =>
                    this.setState({
                      isOpen: !this.state.isOpen,
                      name: "",
                      email: "",
                      comment: "",
                    })
                  }
                  className="ui basic button"
                  type="button"
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default CreateComment;

// onNameBlur = () => {
//   const err =
//     this.state.name.length < 9 ? "" : "Name must be less than 9 character.";

//   this.setState({ nameError: err });
// };
// onEmailBlur = () => {
//   let err = "";
//   if (!this.state.email.length) {
//     err = "Please Fill the email field.";
//   } else if (!email_valid.test(this.state.email)) {
//     err = "Email is not valid.";
//   }
//   console.log(err);
//   this.setState({ emailError: err });
// };
// onCommentBlur = () => {
//   const err =
//     this.state.comment.length < 1 ? "Please Fill the Comment field." : "";

//   this.setState({ commentError: err });
// };
