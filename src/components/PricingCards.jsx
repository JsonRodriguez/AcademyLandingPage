import React from 'react'

export const PricingCards = () => {
  return (
    <div className="pricing">
        <div className="card">
            <div className="content">
            <h4>Basic Plan</h4>
            <h3>0$</h3>
            <p>
            <i className="fa-solid fa-check"></i>
                Smart coding plan
            </p>
            <p>
            <i className="fa-solid fa-check"></i>
                At home workouts
            </p>
            </div>
            <button className="btn">Join Now</button>
        </div>
        <div className="card">
            <div className="content">
            <h4>Gold Plan</h4>
            <h3>10$</h3>
            <p>
            <i className="fa-solid fa-check"></i>
                Pro Codes
            </p>
            <p>
            <i className="fa-solid fa-check"></i>
                At home workouts
            </p>
            </div>
            <button className="btn">Join Now</button>
        </div>
        <div className="card">
            <div className="content">
            <h4>Platinum Plan</h4>
            <h3>100$</h3>
            <p>
            <i className="fa-solid fa-check"></i>
                Elit Classes & Courses
            </p>
            <p>
            <i className="fa-solid fa-check"></i>
                Pro Codes
            </p>
            <p>
            <i className="fa-solid fa-check"></i>
                Smart coding plan
            </p>
            <p>
            <i className="fa-solid fa-check"></i>
                At home workouts
            </p>
            </div>
            <button className="btn">Join Now</button>
        </div>
    </div>
  )
}
