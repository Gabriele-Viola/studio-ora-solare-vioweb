import { useState } from 'react'
import AboutUs from './database/aboutUs'
import Project from './database/project'
import './App.css'
import AppHeader from './components/AppHeader/AppHeader'
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DefLayout from './Layout/DefLayout'
import Homepage from './pages/Homepage'

function App() {
  const [aboutUs, setAboutUs] = useState(AboutUs)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefLayout />}>
            <Route index element={<Homepage />} />

          </Route>

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
