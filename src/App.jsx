import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ClientePage from './pages/ClientPage';
import EmpleadoPage from './pages/EmployeePage';
import RegisterPage from './pages/RegisterPage';
{/*import EmployeeDashboard from './pages/EmployeeDashboard';*/}
{/*import MemberDashboard from './pages/MemberDashboard';*/}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cliente" element={<ClientePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/empleado" element={<EmpleadoPage />} />
        {/*<Route path="/employee-dashboard" element={<EmployeeDashboard />} />*/}
        {/*<Route path="/member-dashboard" element={<MemberDashboard />} />*/}
      </Routes>
    </Router>
  );
}

export default App;