import Carousel from './TestimonialCarousel'
import TestimonialCard from './CardInfo/TestimonialCard';

export default function Testimonials() {
    return (
        <section className="testimonials">
            <article className="testimonials-topbar">
                <h1>Testimonials</h1>
            </article>

            <section className="testimonials-cards">
            <TestimonialCard name="John Anderson" description="An exquisite Mediterranean dining experience. Little Lemon is truly unforgettable!"/>
    <TestimonialCard name="Emily Wilson" description="The cozy ambiance and delicious dishes made my dining experience truly special."/>
    <TestimonialCard name="Daniel Thompson" description="Little Lemon's Mediterranean dishes are a culinary masterpiece. The flavors are unmatched!"/>
    <TestimonialCard name="Sophie Clark" description="A hidden gem with tasty Mediterranean cuisine. Little Lemon is definitely a must-visit!"/>
    <TestimonialCard name="James Roberts" description="The friendly staff, cozy atmosphere, and incredibly delicious food make Little Lemon my top choice!"/>
    <TestimonialCard name="Amelia Brown" description="After a long journey, the heavenly flavors of Little Lemon's Mediterranean food were a delight to my taste buds."/>
    <TestimonialCard name="Jacob Davis" description="Little Lemon's dishes are an explosion of flavors! A must-try for all food enthusiasts in Chicago!"/>
    <TestimonialCard name="Grace Wilson" description="I had an extraordinary dinner experience at Little Lemon. The food was superb, and I can't wait to order again!"/>
            </section>

            <section className="testimonials-carousel">
                <Carousel />
            </section>
        </section>
    );
}
