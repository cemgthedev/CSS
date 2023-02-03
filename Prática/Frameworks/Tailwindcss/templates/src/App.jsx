import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './styles/global.css'

import { PopUp } from './components/PopUp'

export function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<PopUp/>}/>
      </Routes>
    </Router>
  )
}
