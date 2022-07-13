import { Route, Routes } from 'react-router-dom';
import '../styles/App.css'
import Layout from './Layout';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Quiz from './Pages/Quiz';
import Result from './Pages/Result';
import Signup from './Pages/Signup';
import { AuthProvider } from '../contexts/AuthContext'
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

function App() {
  return (
    <AuthProvider>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='signup' element={
            <PublicRoute>
              <Signup />
            </PublicRoute>
          }></Route>
          <Route path='login' element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }></Route>
          <Route path='quiz' element={
            <PrivateRoute>
              <Quiz />
            </PrivateRoute>
          }></Route>
          <Route path='result' element={
            <PrivateRoute>
              <Result />
            </PrivateRoute>
          }></Route>
        </Routes>
      </Layout>
    </AuthProvider>
  );
}

export default App;
