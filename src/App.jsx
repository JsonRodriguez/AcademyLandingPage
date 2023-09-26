import './App.css'
import { NavBar, Header, Feature, Pricing, Footer } from './components';
import useLocalStorage from 'use-local-storage';

function App() {

  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light');

  return (
    <div className='main' data-theme={theme}>
      <NavBar setTheme={ setTheme } />
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
