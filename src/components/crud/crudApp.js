import React, { useState, useEffect } from "react";

const CrudApp = () => {
  const [items, setItems] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  // Load from Local Storage on mount
  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem("items")) || [];
    setItems(savedItems);
  }, []);

  // Save to Local Storage when items change
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  // Add or Update Item
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return;

    if (editIndex !== null) {
      const updatedItems = [...items];
      updatedItems[editIndex] = { title, description };
      setItems(updatedItems);
      setEditIndex(null);
    } else {
      setItems([...items, { title, description }]);
    }

    setTitle("");
    setDescription("");
  };

  // Edit Item
  const handleEdit = (index) => {
    setTitle(items[index].title);
    setDescription(items[index].description);
    setEditIndex(index);
  };

  // Delete Item
  const handleDelete = (index) => {
    const filteredItems = items.filter((_, i) => i !== index);
    setItems(filteredItems);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">React CRUD with Local Storage</h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </form>

      {/* Items List */}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between"
          >
            <span>
              <strong>{item.title}</strong> - {item.description}
            </span>
            <div>
              <button
                className="btn btn-warning btn-sm mx-1"
                onClick={() => handleEdit(index)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CrudApp;
