import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './contexts/AuthContext';
import { QueryClientProvider } from 'react-query';
import queryClient from './config/queryClient';

import Signup from './pages/Signup';
import Login from './pages/Login';
import Overview from './pages/Overview';
import Account from './pages/Account';
import Landing from './pages/Landing';
import About from './pages/About';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
          <Router>
            <Routes>
              {/* Unprotected Routes */}
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
              <Route path="" element={<Landing />} />
              <Route path="about" element={<About />} />

              {/* Protected Routes */}
              <Route path="overview" element={
                <ProtectedRoute>
                  <Overview />
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
    </QueryClientProvider>
  )
}

export default App;
