import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './contexts/AuthContext';

import Signup from './pages/Signup';
import Login from './pages/Login';
import Overview from './pages/Overview';
import Tasks from './pages/Tasks';
import Account from './pages/Account';
import Landing from './pages/Landing';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Unprotected Routes */}
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="" element={<Landing />} />

          {/* Protected Routes */}
          <Route path="overview" element={
            <ProtectedRoute>
              <Overview />
            </ProtectedRoute>
          } />
          <Route path="tasks" element={
            <ProtectedRoute>
              <Tasks />
            </ProtectedRoute>
          } />
          <Route path="account" element={
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
