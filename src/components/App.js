import { Route, Routes } from 'react-router-dom';
import '../styles/App.css'
import Layout from './Layout';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Quiz from './Pages/Quiz';
import Result from './Pages/Result';
import Signup from './Pages/Signup';
import { AuthProvider } from '../contexts/AuthContext'

function App() {
  return (
    <AuthProvider>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='signup' element={<Signup />}></Route>
          <Route path='login' element={<Login />}></Route>
          <Route path='quiz' element={<Quiz />}></Route>
          <Route path='result' element={<Result />}></Route>
        </Routes>
      </Layout>
    </AuthProvider>
  );
}

export default App;
