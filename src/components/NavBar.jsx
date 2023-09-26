import logo from '../images/logo.png';

export const NavBar = () => {
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
          <i className="fa-solid fa-moon"></i>
          <i className="fa-solid fa-sun"></i>
        </div>
        <button className="btn">Hire Me</button>
    </nav>
  )
}
