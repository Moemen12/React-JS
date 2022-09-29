import { Component } from "react";

class Addİtem extends Component {
  state = {
    name: "",
    age: ""
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.AddItem(this.state);
    this.setState({
      name: "",
      age: ""
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Enter name..."
            id="name"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <input
            type="number"
            placeholder="Enter age..."
            id="age"
            onChange={this.handleChange}
            value={this.state.age}
          />
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}

export default Addİtem;
