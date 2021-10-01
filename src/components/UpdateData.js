import React from "react";
import { FormValid } from "./FormValid";

const email_valid =
  /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

class UpdateData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.updateData[0].name,
      email: this.props.updateData[0].email,
      comment: this.props.updateData[0].body,
      err: {},
      nameError: "",
      emailError: "",
      commentError: "",
    };
  }
  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onUpdateSubmit(this.state);
    this.props.onCancel();
  };

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

  onChangeName = (e) => {
    this.setState({ name: e.target.value }, () => {
      const err =
        this.state.name.length > 5 ? "" : "Name must be less than 9 character.";

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
    // const updateValue = this.props.updateData;
    return (
      <div className="ui container">
        <div className="header">Update Row</div>
        <div className="content">
          <form onSubmit={this.onFormSubmit} className="ui form">
            <div className="field">
              <label>Name</label>
              <input
                value={this.state.name}
                onChange={this.onChangeName}
                type="text"
              />
              {/* {errName && (
                <p style={{ color: "red", marginTop: "5px" }}>{errName}</p>
              )} */}
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
                type="text"
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
                type="text"
              />
              {this.state.commentError && (
                <p style={{ color: "#ff6600", marginTop: "5px" }}>
                  {this.state.commentError}
                </p>
              )}
            </div>

            {this.subButton()}
            <button
              onClick={() => this.props.onCancel()}
              className="ui basic button"
              type="button"
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default UpdateData;
