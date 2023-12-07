import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 

function Header({ userRole, setUserRole }) {
  return (
    <div className="headerr-container">
      <h2 className="headerr-title">Velita por la nota profe</h2>
      <div className="headerr-buttons">
        <Link to="/" className="headerr-button" onClick={() => setUserRole('visitor')} disabled={userRole === 'visitor'}>
          Visitante
        </Link>
        <Link to="/admin" className="headerr-button" onClick={() => setUserRole('admin')} disabled={userRole === 'admin'}>
          Administrador
        </Link>
      </div>
    </div>
  );
}

export default Header;
