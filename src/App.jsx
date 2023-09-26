import './App.css'

import { NavBar } from './components/NavBar'
import { Header } from './components/Header'
import { Feature } from './components/Feature'
import { Pricing } from './components/Pricing'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className='main'>
      <NavBar />
      <Header />
      <Feature />
      <Pricing />
      <Footer />

      <div className="copyright">
        Copyright © 2023 Lettys Academy. All Rights Reserved.
      </div>
    </div>
  )
}

export default App
