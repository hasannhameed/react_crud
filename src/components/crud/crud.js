import { useState, useEffect } from "react";
import Data from "./employee";

const Crud = () => {
  const [data, setData] = useState([]);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [age, setAge] = useState(0);
  const [id, setId] = useState(0);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    setData(Data);
  }, []);

  const handleEdit = (id) => {
    const dt = data.filter((item) => item.id === id);
    if (dt.length > 0) {
      setFname(dt[0].fname);
      setLname(dt[0].lname);
      setAge(dt[0].age);
      setId(dt[0].id);
      setFlag(true);
    }
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      const dt = data.filter((item) => item.id !== id);
      setData(dt);
    }
  };

  const handleUpdate = () => {
    const index = data.findIndex((item) => item.id === id);
    if (index !== -1) {
      const dt = [...data];
      dt[index] = { id, fname, lname, age };
      setData(dt);
      handleClear();
    }
  };

  const handleSave = () => {
    const newId = data.length > 0 ? data[data.length - 1].id + 1 : 1;
    const newData = { id: newId, fname, lname, age };
    setData([...data, newData]);
    handleClear();
  };

  const handleClear = () => {
    setFname("");
    setLname("");
    setAge(0);
    setId(0);
    setFlag(false);
  };

  return (
    <>
      <div className="d-flex justify-content-center mt-5">
        <div>
          <label>
            First Name:
            <input
              type="text"
              className="form-control"
              placeholder="Enter your first name"
              onChange={(e) => setFname(e.target.value)}
              value={fname}
            />
          </label>
        </div>
        <div>
          <label>
            Last Name:
            <input
              type="text"
              className="form-control"
              placeholder="Enter your last name"
              onChange={(e) => setLname(e.target.value)}
              value={lname}
            />
          </label>
        </div>
        <div>
          <label>
            Age:
            <input
              type="number"
              className="form-control"
              placeholder="Enter age"
              onChange={(e) => setAge(Number(e.target.value))}
              value={age}
            />
          </label>
        </div>
        <div>
          <button className="btn btn-danger" onClick={handleClear}>
            Clear
          </button>
          &nbsp;
          {flag ? (
            <button className="btn btn-primary" onClick={handleUpdate}>
              Update
            </button>
          ) : (
            <button className="btn btn-primary" onClick={handleSave}>
              Save
            </button>
          )}
        </div>
      </div>

      <table className="table table-hover mt-2">
        <thead>
          <tr>
            <th>SN</th>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.id}</td>
              <td>{item.fname}</td>
              <td>{item.lname}</td>
              <td>{item.age}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => handleEdit(item.id)}
                >
                  Edit
                </button>
                &nbsp;
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Crud;
