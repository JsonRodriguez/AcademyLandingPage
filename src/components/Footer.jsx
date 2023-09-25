import logo from '../images/logo.png'

export const Footer = () => {
  return (
    <footer id='aboutID' className="container">
        <span className="blur"></span>
        <span className="blur"></span>
        <div className="column">
            <div className="logo">
                <img src={ logo } />
            </div>
            <p>
            Despierta tu Belleza Interior, Transforma el Mundo Exterior. ✨💄🌟
            </p>
            <div className="socials">
                <a href="#"><i className="fa-brands fa-youtube"></i></a>
                <a href="#"><i className="fa-brands fa-twitter"></i></a>
                <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
            </div>
        </div>
        <div className="column">
            <h4>Company</h4>
            <a href="#">Business</a>
            <a href="#">Partnership</a>
            <a href="#">Network</a>
        </div>
        <div className="column">
            <h4>About Us</h4>
            <a href="#">Blogs</a>
            <a href="#">Channels</a>
            <a href="#">Sponsors</a>
        </div>
        <div className="column">
            <h4>Company</h4>
            <a href="#">Contact Us</a>
            <a href="#">Privicy Policy</a>
            <a href="#">Terms & Conditions</a>
        </div>
    </footer>
  )
}
