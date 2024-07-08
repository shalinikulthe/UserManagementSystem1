import React, { useEffect, useState } from 'react';
import './navbar.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  // Fetch all data from backend
  const getAllData = async () => {
    try {
      const response = await axios.get("http://localhost:3002/view");
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getAllData();
  }, []);

 

  const deleteByID = async (id) => {
    try {
      // Display confirmation dialog
      const confirmDelete = window.confirm('Are you sure you want to delete this record?');
      
      if (confirmDelete) {
        const response = await axios.delete(`http://localhost:3002/delete/${id}`);
        getAllData();
        toast.success("Deleted Successfully"); // Toast notification for success
      }
    } catch (error) {
      console.error('Error deleting record:', error);
      toast.error("Delete Failed"); // Toast notification for error
    }
  };


  const addEdit = () => {
    navigate('/addedit');
  };

  const viewByID = (id) => {
    navigate(`/viewpage/${id}`);
  };

  return (
    <>
      <nav className="topnav">
        <div className="left">
          <a href="#" className="logo">User Management System</a>
        </div>
        <div className="right">
          <button className="add-user-btn">About</button>
          <button
            type="button"
            className="add-user-btn"
            onClick={addEdit}
          >
            Add User
          </button>
          <button className="add-user-btn">Home</button>
        </div>
      </nav>
      <div className="content">
      </div>
      <div className='container' style={{ padding: "200px" }}>
        <div className="table-container table-bordered table-strip">
          <div className="container">
            <table className="table">
              <thead className="table-success">
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Contact</th>
                  <th scope="col" style={{ width: "50px" }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  data.map((item) => (
                    <tr key={item.id}>
                      <th scope="row">{item.id}</th>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.contact}</td>
                      <td className="btn-group">
                        <button className="btn btn-warning" onClick={() => navigate(`/update/${item.id}`)}>Edit</button>
                        <button className="btn btn-danger" onClick={() => deleteByID(item.id)}>Delete</button>
                        <button className="btn btn-success" onClick={() => viewByID(item.id)}>View</button>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;


