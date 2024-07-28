import './App.css'
import HomeView from './views/HomeView'
import ContactView from './views/ContactView'
import BiographyView from './views/BiographyView'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TheHeader from './components/TheHeader/TheHeader'


function App() {

  return (
    <BrowserRouter>
      <TheHeader />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/contact" element={<ContactView />} />
        <Route path="/biography" element={<BiographyView />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
