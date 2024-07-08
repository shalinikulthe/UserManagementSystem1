import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import './viewsty.css';

const View = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getUser(id);
    }
  }, [id]);

  const getUser = async (id) => {
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:3002/view/${id}`);
      if (response.status === 200) {
        setUser(response.data);
      } else {
        setError('Failed to fetch user details.');
      }
    } catch (error) {
      console.error(`Error fetching user with id ${id}:`, error);
      setError('Error fetching user details.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div style={{ marginTop: "150px" }}>
      <div className="card">
        <div className="card-header">
          <p>User Detail</p>
        </div>
        <div className="container">
          <span><b>ID :</b> {user && user.id}</span>
          <br />
          <br />
          <span><b>Name : </b>{user && user.name}</span>
          <br />
          <br />
          <span><b>Email :</b> {user && user.email}</span>
          <br />
          <br />
          <span><b>Contact :</b> {user && user.contact}</span>
          <br />
          <br />
          <Link to="/">
            <button className="btn btn-success">Go Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default View;
