import { useState } from "react";

const SimpleCrud = () => {
    const [data, setData] = useState({ namee: "", email: "" });
    const [store, setStore] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault(); // Fix here
        setStore([...store, data]); // Correct spread syntax
        setData({ namee: "", email: "" }); // Clear input fields after submission
        console.log(store);
    };

    return (
       <>
       <form className="inline-form" onSubmit={handleSubmit}>
        <div className="form-group">
            <input 
                type="text" 
                className="form-control" 
                placeholder="Enter Name"
                value={data.namee}
                onChange={(e) => setData({ ...data, namee: e.target.value })}
            />

            <input 
                type="text" 
                className="form-control" 
                placeholder="Enter Email"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
            />
            <button type="submit" className="btn btn-primary">Add Data</button>
        </div>
       </form>

       <ul>
        {store.map((item, index) => (
            <li key={index}>{item.namee} - {item.email}</li>
        ))}
       </ul>
       </>
    );
}

export default SimpleCrud;
