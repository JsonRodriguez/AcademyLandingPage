import { PricingCards } from "./PricingCards"


export const Pricing = () => {
  return (
    <section className="container">
        <h2 id='pricingID' className="header">CURSES PRICING</h2>
        <p className="sub-header">
        ✨ Discover Your Path to Beauty with Our Exclusive Course Plans! ✨ <br /><br />
        At Lettys Academy, we are delighted to offer you three exciting beauty course plans for you to choose from and immerse yourself in the exciting world of beauty and personal care. Your journey to beauty excellence starts here!
        </p>

        <PricingCards />
        
    </section>
  )
}
