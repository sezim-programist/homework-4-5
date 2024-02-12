import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FormPage from './pages/FormPage'
import UserPage from './pages/UserPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormPage/>}/>
        <Route path="user" element={<UserPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
