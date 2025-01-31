import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

import EmpleadoPage from './pages/EmployeePage';
import RegisterPage from './pages/RegisterPage';
import ClientePage from './pages/ClientPage';

import LoginPage from './pages/Login';
import RegisterPage from './pages/RegisterPage';
import EmployeeDashboard from './pages/EmployeeDashboard';
import MemberDashboard from './pages/MemberDashboard';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <Router>
      <AuthProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cliente" element={<ClientePage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/empleado" element={<EmpleadoPage />} />
      </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;