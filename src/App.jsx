import './App.css'
import Nav from './components/Nav'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Community from './pages/Community'
import Events from './pages/Events'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Footer from './components/Footer'
import HomeLayout from './layouts/HomeLayout'
import Layout from './layouts/Layout'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route path="/oldalak" element={<Layout />} >
          <Route path="rolunk" element={<About />} />
          <Route path="kozosseg" element={<Community />} />
          <Route path="esemenyek" element={<Events />} />
          <Route path="kapcsolat" element={<Contact />} />
        </Route>


        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
