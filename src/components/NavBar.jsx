import { useState } from 'react';
import logo from '../images/logo.png';

const moon = 'fa-solid fa-moon', sun = 'fa-solid fa-sun';

export const NavBar = ({ setTheme }) => {

  const [themeState, setThemeState] = useState(false);

  const onToggleChange = () => {
    if( themeState ) {
      setThemeState( false );
      setTheme('light');
    }else{
      setThemeState( true );
      setTheme('dark');
    }
  }
  
  return (
    <nav>
        <div className="nav-logo">
            <a href="#">
            <img src={ logo } />
            </a>
        </div>
        <ul className="nav-links">
            <li className='link'><a href="#">Home</a></li>
            <li className='link'><a href="#featuresID">Features</a></li>
            <li className='link'><a href="#pricingID">Princing</a></li>
            <li className='link'><a href="#aboutID">About</a></li>
        </ul>
        <div className="theme-toggle">
          <i onClick={ onToggleChange } className={ themeState ? sun : moon }></i>
          <button className="btn">Hire Me</button>
        </div>
    </nav>
  )
}
