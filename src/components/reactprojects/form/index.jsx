import './style.css';
import { useState } from 'react';

const Form = () =>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState("");
    const [password, setPassword] = useState("");
    const [language, setLanguage] = useState(["hindi", "germany", "english", "french", "dutch"]); 

    const clearForm = () => {
        setName("");
        setEmail("");
        setStatus("");
        setPassword("");
        setLanguage("");
    }

    const handleForm = (e) =>{ 
        e.preventDefault();
        let formData = {
            name,
            email,
            status,
            password,
            language
        }
        console.log(formData);
        clearForm();
    }

    return(
        <div className="container">
            <h1>Fill the form</h1>
            <form className="form" action="" onSubmit={handleForm}>
                <div className='form-group'>
                    <label htmlFor="name">Name:</label>
                    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
                </div>
                <div className='form-group'> 
                    <label htmlFor="email">Email:</label>
                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                </div>
                <div className='form-group'>
                    <label htmlFor="status">Status:</label>
                    <input type="text" value={status} onChange={(e)=>setStatus(e.target.value)} />
                </div>
                <div className='form-group'>
                    <label htmlFor="status">language:</label>
                    <select value={language} onChange={(e) => setLanguage(e.target.value)}>
                        <option value="hindi">Hindi</option>
                        <option value="germany">Germany</option>
                        <option value="english">English</option>
                        <option value="french">French</option>
                        <option value="dutch">Dutch</option>
                    </select>
                </div>
                <div className='form-group'>
                    <label htmlFor="languages">Password:</label>
                    <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} />
                </div>
                <button className='btn btn-primary mt-4'>Submit</button>
            </form>
        </div>
    )

}

export default Form;