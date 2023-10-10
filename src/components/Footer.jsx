function Footer({ items }) {
  let message = "start adding some items to your packing list 🚀";
  if (items.length) {
    const numItems = items.length;
    const packedItems = items.reduce(
      (acc, item) => (item.packed ? acc + 1 : acc),
      0
    );
    if (numItems === packedItems)
      message = "You got everything! Ready to go 🛫";
    else
      message = `You have ${numItems} items on your list, and you already packed ${packedItems} (${Math.round(
        (packedItems / numItems) * 100
      )}%)`;
  }
  return (
    <footer className="footer">
      <p>{message}</p>
    </footer>
  );
}

export default Footer;
