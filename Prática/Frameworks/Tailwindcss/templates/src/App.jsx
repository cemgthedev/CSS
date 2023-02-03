import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './styles/global.css'

import { Header } from './components/Header'
import { PopUp } from './components/PopUp'

export function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Header/>}/>
        <Route path='/popup' element={<PopUp/>}/>
      </Routes>
    </Router>
  )
}
