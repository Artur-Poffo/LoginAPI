import React from 'react'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import GlobalStyles from "./styles/GlobalStyles"

// PAGES:
import LoginPage from "./pages/LoginPage"
import SignUpPage from "./pages/SignUpPage"
import LoginSucces from './pages/LoginSucces'
import LoginError from './pages/LoginError'
import NewUserError from "./pages/NewUserError"

function App() {
  return (
    <>
      <Router>

        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/LoginSuccess' element={<LoginSucces />} />
          <Route path='/LoginError' element={<LoginError />} />
          <Route path='/NewUser' element={<SignUpPage />} />
          <Route path='/NewUserError' element={<NewUserError />} />
        </Routes>
      </Router>

      <GlobalStyles />
    </>
  )
}

export default App
