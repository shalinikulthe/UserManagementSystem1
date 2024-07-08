import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import { useNavigate } from 'react-router-dom';
import './addedit.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddEdit = () => {
  const navigate = useNavigate();

  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3002/create', formData); // Adjust the URL as per your backend API
      console.log('Form data submitted:', response.data);
      toast.success("added successfully");

      // Clear the form after successful submission
      setFormData({
        name: '',
        email: '',
        contact: ''
      });
      navigate('/');

    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <>
     
      <div>
        <form className="row add-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name"><b>Name:</b></label>
            <input 
              className="form-control"
              type="text" 
              id="name" 
              name="name" 
              placeholder='Enter name'
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="email"><b>Email:</b></label>
            <input 
            className="form-control"
              type="email" 
              id="email" 
              name="email" 
              placeholder='Enter email'
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="contact"><b>Contact:</b></label>
            <input 
            className="form-control"
              type="text" 
              id="contact" 
              name="contact"
              placeholder='Enter contact' 
              value={formData.contact} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group add-btn">
          <button type="submit" className="btn btn-success" >Add User</button>
          </div>
        </form>
      </div>
      
      </>
  )
};
export default AddEdit




