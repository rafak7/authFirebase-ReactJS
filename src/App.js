import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './components/SignIn';
import InstagramAuth from './components/InstagramAuth';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/instagram-auth" element={<InstagramAuth />} />
      </Routes>
    </Router>
  );
}

export default App;