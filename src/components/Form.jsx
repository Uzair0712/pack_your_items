import { useState } from "react";

function Form({ addItem }) {
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!item) return;
    addItem({ quantity, name: item, packed: false });
    setItem("");
    setQuantity(1);
  }

  return (
    <form className="input-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        name="num-item"
        value={quantity}
        onChange={(e) => {
          setQuantity(e.target.value);
        }}
      >
        {Array.from({ length: 20 }, (_, item) => (
          <option key={item} value={item + 1}>
            {item + 1}
          </option>
        ))}
      </select>
      <input
        value={item}
        onChange={(e) => setItem(e.target.value)}
        type="text"
        placeholder="item..."
      />
      <button>add</button>
    </form>
  );
}

export default Form;
