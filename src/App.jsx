import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

import Books from './components/Pages/auth/books'
import Home from './components/Pages'
import Login from './components/Pages/auth/login'
import Register from './components/Pages/auth/register'
import Team from "./components/shared/Team";
import Contact from "./components/shared/Contact";


function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;