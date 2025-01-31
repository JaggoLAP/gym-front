import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { AuthProvider } from "./contexts/AuthContext";
import EmployeePage from './pages/EmployeePage';
import ClientPage from './pages/ClientPage';
import RegisterPage from './pages/RegisterPage';
import Footer from './components/Footer';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/empleado" element={<EmployeePage />} />
            <Route path="/cliente" element={<ClientPage />} />
            <Route path="/registro" element={<RegisterPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;