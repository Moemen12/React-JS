import { Component } from "react";
import ToDoİtem from "./component/to-do-item/ToDoItem";
import Addİtem from "./component/add-item/AddItem";
import "./styles.css";

class App extends Component {
  state = {
    items: [
      { id: 1, name: "hamza", age: 22 },
      { id: 2, name: "mouhamad", age: 19 },
      { id: 3, name: "abdo", age: 29 }
    ]
  };
  // first method
  deleteItem = (id) => {
    let items = this.state.items.filter((item) => {
      return item.id !== id;
    });

    this.setState({ items });
  };

  /* Second method
 deleteItem = (id) => {
  let items = this.state.items;
  let i = items.findIndex((item) => item.id === id);
  items.splice(i, 1);
  this.setState({ items });
};
*/

  AddItem = (item) => {
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({ items });
  };

  render() {
    return (
      <div className="App">
        To do List
        <ToDoİtem items={this.state.items} deleteItem={this.deleteItem} />
        <Addİtem AddItem={this.AddItem} />
      </div>
    );
  }
}
export default App;
