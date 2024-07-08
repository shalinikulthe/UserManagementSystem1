import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './addedit.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Update = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Get id from URL params

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3002/view/${id}`); // Adjust URL to your backend endpoint
        const userData = response.data;
        setFormData(userData); // Set form data with fetched user details
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchData();
  }, [id]); // Fetch data whenever id changes

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
      const response = await axios.put(`http://localhost:3002/update/${id}`, formData); // Adjust URL as per your backend API
      console.log('Form data submitted:', response.data);
      toast.success("Updated successfully");

      // Clear the form after successful submission
      setFormData({
        name: '',
        email: '',
        contact: ''
      });
      navigate('/'); // Navigate back to home after update

    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div>
      <form className="row add-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name"><b>Name:</b></label>
          <input
            className="form-control"
            type="text"
            id="name"
            name="name"
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
            value={formData.contact}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group add-btn">
          <button type="submit" className="btn btn-success">Update</button>
        </div>
      </form>
    </div>
  );
};

export default Update;

