import React, { useState } from 'react';
import '../styles/GeneralInfo.css'


const GeneralInfo = () => {
    const [info, setInfo] = useState ({
        name: '',
        email: '',
        phone: '',

    });
    const [editMode, setEditMode] = useState(true);

    const handleChange = (e) => {
        setInfo({ ...info, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setEditMode(false);
    };
    const handleEdit = () => {
        setEditMode(true);
    };

    return (
        <div className='general-info'>
            {editMode ? (
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Name" value={info.name} onChange={handleChange} />
                    <input type="email" name="email" placeholder="Email" value={info.email} onChange={handleChange} />
                    <input type="tel" name="phone" placeholder="Phone" value={info.phone} onChange={handleChange} />
                    <button type="submit">Submit</button>
                </form>
            ) : (
                <div>
                    <p>Name: {info.name}</p>
                    <p>Email: {info.email}</p>
                    <p>Phone: {info.phone}</p>
                    <button onClick={handleEdit}>Edit</button>
                </div>
            )}
        </div>
    );
};

export default GeneralInfo;