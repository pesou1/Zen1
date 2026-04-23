import React from 'react';
import './AdminDashboard.css';

const AdminDashboard = () => {
    return (
        <div className="admin-dashboard">
            <header className="admin-header">
                <h1>Админ самбар</h1>
            </header>
            <div className="user-management">
                <h2>Хэрэглэгчийн менежмент</h2>
                {/* User management functionalities go here */}
            </div>
            <div className="stream-management">
                <h2>Шууд дамжуулалтын менежмент</h2>
                {/* Stream management functionalities go here */}
            </div>
        </div>
    );
};

export default AdminDashboard;
