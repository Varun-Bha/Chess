
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Landing } from './screens/Landing'
import { Game } from './screens/Game'

function App() {

  return (
    <div className='min-h-screen w-full bg-slate-950'>
      <BrowserRouter>
      <Routes>  
        <Route path="/" element={<Landing /> }/>
        <Route path="/game" element={<Game  /> }/>

      </Routes></BrowserRouter>
    </div>
  )
}

export default App
