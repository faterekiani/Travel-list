import { useState } from "react";

// Form component
export default function Form({ onAddItms }) {
  // states
  const [description, setDescription] = useState(""); //state for input
  const [quantity, setQuantity] = useState(1); //state for select

  //submit item function
  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return; //return NOTHING when description is a empty and submit the form

    const newItem = { id: Date.now(), description, quantity, packed: false };

    onAddItms(newItem);

    // clear value after submit form
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?😍</h3>

      <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button>Add</button>
    </form>
  );
}
