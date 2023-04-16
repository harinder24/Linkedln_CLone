

import Header from './Components/Header/Header'
import "./App.css"
import Container from './Components/Container/Container'
import {LoginPage, SignUpPage} from './Components/LogInAndSignIn/LoginAndSigninPage'
import { Routes, Route, useNavigate,Navigate } from 'react-router-dom'
import { selectUser } from './feature/userSlice'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

function App() {


  return (
    <Routes>
      <Route path="/feed" element={<Feed/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/signup" element={<SignUpPage/>}/>
      <Route path="/" element={<Navigate to="/feed" />}/>
    </Routes>
  )
}

function Feed() {
  
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  return (
    <div>
      <Header />
      <Container />
    </div>
  );
}
export default App
