import React from "react";
import Modal from "react-modal";
import ShowJSONData from "./ShowJSONData";
import UpdateData from "./UpdateData";
import CreateComment from "./CreateComment";
import { StorageAPIData, GetData, StoreData } from "../API/StorageData";

// const arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(arr1.length);

class App extends React.Component {
  constructor() {
    super();
    this.state = { data: [], isOpen: false, updateId: 0 };
  }

  componentDidMount() {
    StorageAPIData();
    const res = GetData();
    this.setState({ data: res });
  }
  onAfterUpdate = ({ name, email, comment }) => {
    this.state.data?.forEach((d) => {
      if (d.id === this.state.updateId) {
        d.name = name;
        d.email = email;
        d.body = comment;
      }
    });
    StoreData(this.state.data);
  };
  onPostCreate = ({ name, email, comment }) => {
    const lastIndexofData = this.state.data.length - 1;
    const newComment = {
      id: this.state.data[lastIndexofData].id + 1,
      name: name,
      email: email,
      body: comment,
    };
    console.log(this.state.data?.push(newComment));
    this.setState({ data: this.state.data });
    StoreData(this.state.data);
  };
  // console.log(this.state.data);
  // };
  onUpdateRow = (id) => {
    this.setState({
      isOpen: true,
      updateId: id,
    });
  };
  onDeleteRow = (id) => {
    this.state.data?.splice(id, 1);
    this.setState({ data: this.state.data });
    StoreData(this.state.data);
  };
  onCancel = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const updatedRow = this.state.data?.filter(
      (d) => d.id === this.state.updateId
    );
    return (
      <div
        className="ui container"
        style={{ marginTop: "1rem", marginBottom: "2rem" }}
      >
        <CreateComment onCreateSubmit={this.onPostCreate} />
        <ShowJSONData
          onUpdateRow={this.onUpdateRow}
          onDeleteRow={this.onDeleteRow}
          fetchData={this.state.data}
        />
        <Modal isOpen={this.state.isOpen}>
          <UpdateData
            updateData={updatedRow}
            onCancel={this.onCancel}
            onUpdateSubmit={this.onAfterUpdate}
          />
        </Modal>
      </div>
    );
  }
}

export default App;
