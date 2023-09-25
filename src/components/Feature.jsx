import makeUp from "../images/make-up.png"
import hairstyles from "../images/hairstyles.png"
import haircuts from "../images/haircuts.png"
import manicure from "../images/manicure.png"

export const Feature = () => {
  return (
    <section className="container">
        <h2 id='featuresID' className="header">OUR FEATURES</h2>
        <div className="features">
            <div className="card">
                <span><img src={ makeUp } /></span>
                <h4>Make-Up</h4>
                <p>
                Discover the secrets of professional makeup application, from basic techniques to glamorous looks. Master the art of highlighting your features and creating unique looks.
                </p>
                <a href="#">Know More <i className="fa-solid fa-arrow-right"></i></a>
            </div>
            <div className="card">
                <span><img src={ hairstyles } /></span>
                <h4>Hairstyles</h4>
                <p>
                Learn how to create stunning hairstyles, from sleek updos to perfect waves. Acquire skills to transform hair into true works of art.
                </p>
                <a href="#">Know More <i className="fa-solid fa-arrow-right"></i></a>
            </div>
            <div className="card">
                <span><img src={ haircuts } /></span>
                <h4>Haircuts</h4>
                <p>
                Immerse yourself in the world of hairdressing and master the art of haircuts. From timeless classics to cutting-edge trends, you'll become a hair style expert.
                </p>
                <a href="#">Know More <i className="fa-solid fa-arrow-right"></i></a>
            </div>
            <div className="card">
                <span><img src={ manicure } /></span>
                <h4>Manicure</h4>
                <p>
                Hone your nail care skills. Learn how to perform professional manicures and pedicures, with creative designs and high-level polishing techniques.
                </p>
                <a href="#">Know More <i className="fa-solid fa-arrow-right"></i></a>
            </div>
        </div>
    </section>
  )
}
