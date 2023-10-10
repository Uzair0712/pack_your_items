import { useState } from "react";
import Item from "./Item";

function List({ items, onPacked, onDelete, onClear }) {
  const [sortBy, setSortBy] = useState("input");

  let list = [...items];
  if (sortBy === "name") list = list.sort((a, b) => (a.name > b.name ? 1 : -1));
  if (sortBy === "status") list = list.sort((a, b) => (Number(a.packed)-Number(b.packed)));

  return (
    <div className="list">
      <ul className="list-container">
        {list.map((item) => (
          <Item
            item={item}
            key={item.name}
            onPacked={onPacked}
            onDelete={onDelete}
          />
        ))}
      </ul>
      <div className="settings">
        <select
          name="sort-by"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="input">sort by input order</option>
          <option value="name">sort by description</option>
          <option value="status">sort by packed status</option>
        </select>
        <button onClick={onClear}>clear List</button>
      </div>
    </div>
  );
}

export default List;
