// import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Login from './screen/Login';
// import Navbar from './component/Navbar';
import RegistrationForm from './screen/RegistrationForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UsersList from './screen/UsersList';
import UpdateForm from './screen/UpdateForm';
import UseVariables from './component/UseVariables';
import ProtectedRoute from './screen/ProtectedRoute';




function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <UseVariables>
          <Routes>
            <Route path='/' element={<RegistrationForm />} />
            <Route path='/login' element={<Login />} />
            <Route path='/list' element={
              <ProtectedRoute>
                <UsersList />
              </ProtectedRoute>
            } />
            <Route path='/update' element={
              <ProtectedRoute>
                <UpdateForm />
              </ProtectedRoute>
            } />
          </Routes>
        </UseVariables>
      </BrowserRouter>
    </>
  );
}

export default App;
