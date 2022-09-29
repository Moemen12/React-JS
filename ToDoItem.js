function ToDoItem(props) {
  const { items, deleteItem } = props;
  let length = items.length;

  const listItem = length ? (
    items.map((item) => {
      return (
        <div key={item.id}>
          <span>{item.name}</span>
          <span>{item.age}</span>
          <span onClick={() => deleteItem(item.id)}>&times;</span>
        </div>
      );
    })
  ) : (
    <p>There is no item to show</p>
  );
  return (
    <div className="Listİtems">
      <div>
        <span>Name</span>
        <span>Age</span>
        <span>Action</span>
      </div>
      {listItem}
    </div>
  );
}

export default ToDoItem;
