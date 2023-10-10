import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import List from "./components/List";
import "./App.css";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  function addItem(item) {
    setItems((items) => [...items, item]);
  }
  function handlePacked(item) {
    setItems((items) =>
      items.map((cur) =>
        cur.name !== item.name ? cur : { ...item, packed: !item.packed }
      )
    );
  }
  function handleDelete(item) {
    setItems((items) => [...items.filter((cur) => cur.name !== item.name)]);
  }

  function handleClearList() {
    if (confirm("Are you sure, you want to clear the list???")) setItems([]);
  }
  return (
    <div className="app">
      <Header />
      <Form addItem={addItem} />
      <List
        items={items}
        onPacked={handlePacked}
        onDelete={handleDelete}
        onClear={handleClearList}
      />
      <Footer items={items} />
    </div>
  );
}

export default App;
