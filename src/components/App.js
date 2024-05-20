import { useState } from "react";
import Logo from "./Logo";
import Stats from "./Stats";
import PackingList from "./PackingList";
import Form from "./Form";

// APP component
export default function App() {
  // state to add item from Form to PackingList
  const [items, setItems] = useState([]);

  // return array of items that befor exist and new items
  function handleAddItems(item) {
    setItems((items) => [...items, item]); //spread syntax
  }
  // delete items from packingList
  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleCheckList(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  // delete all of the list with the button
  function handleDeleteLists() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItms={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItems={handleDeleteItems}
        onToggleItems={handleToggleCheckList}
        onDeleteList={handleDeleteLists}
      />
      <Stats items={items} />
    </div>
  );
}
