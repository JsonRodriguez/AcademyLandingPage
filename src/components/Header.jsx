import banner from "../images/banner.png";

export const Header = () => {
  return (
    <header className="container">
        <div className="content">
            <span className="blur"></span>
            <span className="blur"></span>
            <h4>✨ DISCOVER YOUR PASSION FOR BEAUTY ✨</h4>
            <h1><span>Krisda Academy</span>, Learn with us</h1>
            <p>
            🌟 Welcome to Krisda Academy 🌟<br/><br/>
            ✨ Discover your potential in the world of beauty with us! 💄 We offer courses in makeup, skincare, hairdressing, and much more, taught by industry experts. ✂️ We help you shine. Explore our courses today! 🌟
            </p>
            <button className='btn'>Get Started</button>
        </div>
        <div className="image">
            <img src={ banner } />
        </div>
    </header>
  )
}
