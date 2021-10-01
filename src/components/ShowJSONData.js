import React from "react";
import CommentData from "./CommentData";

class ShowJSONData extends React.Component {
  render() {
    return (
      <table className="ui celled table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Comment</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.props.fetchData?.map((comment, index) => (
            <CommentData
              onUpdateRow={this.props.onUpdateRow}
              onDeleteRow={this.props.onDeleteRow}
              index={index}
              key={comment.id}
              post={comment}
            />
          ))}
        </tbody>
      </table>
    );
  }
}

export default ShowJSONData;
