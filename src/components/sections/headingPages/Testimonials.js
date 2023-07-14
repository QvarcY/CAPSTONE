import Carousel from './TestimonialCarousel'
import TestimonialCard from './CardInfo/TestimonialCard';

export default function Testimonials() {
    return (
        <section className="testimonials">
            <article className="testimonials-topbar">
                <h1>Testimonials</h1>
            </article>

            <section className="testimonials-cards">
                <TestimonialCard name="Linda Smith" description="This is the best Mediterranean food that I've ever had!"/>
                <TestimonialCard name="Emma Thompson" description="The cozy atmosphere and the amazing flavors of Little Lemon's dishes left me wanting more!"/>
                <TestimonialCard name="Samuel Lee" description="Little Lemon takes Mediterranean cuisine to a whole new level. Absolutely delicious!"/>
                <TestimonialCard name="Sophia Garcia" description="A true gem for Mediterranean food lovers. Little Lemon's flavors are outstanding!"/>
                <TestimonialCard name="Oliver Johnson" description="From the moment I stepped in, Little Lemon's warm staff and mouthwatering dishes made me feel right at home."/>
                <TestimonialCard name="Ella Davis" description="After a long flight, Little Lemon's food was a delightful treat. The flavors exceeded my expectations!"/>
                <TestimonialCard name="William Wilson" description="Little Lemon is a culinary paradise. The food here is phenomenal and a must-visit for all foodies in Chicago!"/>
                <TestimonialCard name="Charlotte Brown" description="Little Lemon provided the perfect dinner experience for me after a tiring study session. I can't wait to order again!"/>
            </section>

            <section className="testimonials-carousel">
                <Carousel />
            </section>
        </section>
    );
}
