import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
<<<<<<< HEAD
import ClientePage from './pages/ClientPage';
import EmpleadoPage from './pages/EmployeePage';
import RegisterPage from './pages/RegisterPage';
{/*import EmployeeDashboard from './pages/EmployeeDashboard';*/}
{/*import MemberDashboard from './pages/MemberDashboard';*/}
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
<<<<<<< HEAD
        <><Route path="/cliente" element={<ClientePage />} /><Route path="/register" element={<RegisterPage />} /><Route path="/empleado" element={<EmpleadoPage />} /></>
        {/*<Route path="/employee-dashboard" element={<EmployeeDashboard />} />*/}
        {/*<Route path="/member-dashboard" element={<MemberDashboard />} />*/}
      </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;