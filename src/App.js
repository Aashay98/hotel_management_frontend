import { BrowserRouter, Navigate, Route , Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/login';
import LoginScreen from './components/auth/LoginScreen';
import Signup from './components/auth/Signup';
import ForgotPassword from './components/auth/ForgotPassword';
import { CssBaseline } from '@mui/material';
import Homepage from './components/Homepage/CustomerHomepage';

function App() {
  return (
    <div>
      <CssBaseline />
      <BrowserRouter>
        <Toaster/>
        <AuthProvider>
          <Routes>
            <Route index element={<Navigate to="/login" replace />}/>
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/staff/login" element={<LoginScreen />} />
            <Route path="/admin/login" element={<LoginScreen />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/customer/home" element={<Homepage />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
