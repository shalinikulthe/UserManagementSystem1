import React from 'react';
import './navbar.css'; // Import CSS file for styling

const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <div className="left">
                    <a href="#" className="logo">User Management System</a>
                </div>
                <div className="right">
              
                <button className="add-user-btn">About</button> 
                <button className="add-user-btn">Add User</button> {/* New button for Add User */}
                <button className="add-user-btn">Home</button>{/* New button for Add User */}
                </div>
            </nav>
            <div className="content">
              
            </div>
        </>
    );
}

export default Navbar;
