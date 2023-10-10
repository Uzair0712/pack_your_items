function Item({ item, onPacked , onDelete}) {
  return (
    <li>
      <input type="checkbox" onChange={() => onPacked(item)} />{" "}
      <span
        className="item-name"
        style={item.packed ? { textDecoration: "line-through" } : {}}
      >
        {item.quantity} {item.name}
      </span>{" "}
      <button className="delete-item" onClick={() => onDelete(item)}>
        &times;
      </button>
    </li>
  );
}

export default Item;
