import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Sidebar from './Components/Sidebar/Sidebar'
import { Routes,Route } from 'react-router-dom'
import Add from './Pages/Add/Add'
import List from './Pages/List/List'
import Orders from './Pages/Orders/Orders'

const App = () => {
  return (
    <div><Navbar/>
    <hr />
    <div className="app-content">
      <Sidebar/>
      <Routes>
        <Route path="/add" element={<Add/>}/>
        <Route path="/List" element={<List/>}/>
        <Route path="/Orders" element={<Orders/>}/>
      </Routes>
    </div>
    </div>
  )
}

export default App