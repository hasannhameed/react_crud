import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";

const API_URL = "https://jsonplaceholder.typicode.com/users";
const FAKE_AVATAR = "https://i.pravatar.cc/150?img="; // Fake images

const Crud = () => {
    
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: "", email: "" });
  const [editingUser, setEditingUser] = useState(null);

  // Fetch Users
  useEffect(() => {
    axios.get(API_URL).then((response) => {
      setUsers(response.data);
    });
  }, []);

  // Add User
  const addUser = () => {
    if (!newUser.name || !newUser.email) return alert("Fill all fields!");
    const newUserObj = { ...newUser, id: users.length + 1 };
    setUsers([...users, newUserObj]);
    setNewUser({ name: "", email: "" });
  };

  // Delete User
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  // Edit User
  const editUser = (user) => {
    setEditingUser(user);
    setNewUser({ name: user.name, email: user.email });
  };

  // Update User
  const updateUser = () => {
    setUsers(
      users.map((user) =>
        user.id === editingUser.id ? { ...editingUser, ...newUser } : user
      )
    );
    setEditingUser(null);
    setNewUser({ name: "", email: "" });
  };

  return (
    <div className="container">
      <h1>React CRUD App</h1>

      {/* User Form */}
      <div className="form">
        <input
          type="text"
          placeholder="Name"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
        {editingUser ? (
          <button onClick={updateUser}>Update User</button>
        ) : (
          <button onClick={addUser}>Add User</button>
        )}
      </div>

      {/* User List */}
      <div className="user-list">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <img src={`${FAKE_AVATAR}${user.id}`} alt="User" />
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <button onClick={() => editUser(user)}>Edit</button>
            <button onClick={() => deleteUser(user)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Crud;
