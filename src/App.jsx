import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import Header from './components/Header';

function App() {
  const [userRole, setUserRole] = useState('visitor'); // 'visitor' o 'admin'

  return (
    <Router>
      <div>
        <Header userRole={userRole} setUserRole={setUserRole} />
        <Routes userRole={userRole} />
      </div>
    </Router>
  );
}

export default App;
