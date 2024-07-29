import './App.css'
import HomeView from './views/HomeView'
import ContactView from './views/ContactView'
import SobreView from './views/SobreView'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TheHeader from './components/TheHeader/TheHeader'


function App() {

  return (
    <BrowserRouter>
      <TheHeader />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/reserve" element={<ContactView />} />
        <Route path="/biography" element={<SobreView />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
