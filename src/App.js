import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header'
import Info from './components/Info';
import UserComponent from './components/UserComponent'
import UserDetails from './components/UserDetails';
import UserList from './components/UserList'

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/user/:userId" element={<UserDetails />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App