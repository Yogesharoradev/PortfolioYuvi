import React from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import Aboutpage from './Pages/Aboutpage'
import Contact from './Pages/Contact'
import Workpage from './Pages/Workpage'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/about' element={<Aboutpage/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/work' element={<Workpage/>} />
      </Routes>
    </Router>
  )
}

export default App
