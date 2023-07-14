import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import TestimonialCard from './CardInfo/TestimonialCard';

export default function CarouselPage() {
    return (
        <Carousel infiniteLoop={true} autoPlay={true} Interval={5000} showStatus={false}>
            <TestimonialCard name="Linda Smith" description="This is the best Mediterranean food that I've ever had!"/>
            <TestimonialCard name="Emma Thompson" description="The cozy ambiance and delicious flavors here made my dining experience truly memorable."/>
            <TestimonialCard name="Samuel Lee" description="Little Lemon's Mediterranean dishes are a culinary masterpiece. The flavors are unmatched!"/>
            <TestimonialCard name="Sophia Garcia" description="A hidden gem with delectable Mediterranean cuisine. Little Lemon is a must-visit!"/>
            <TestimonialCard name="Oliver Johnson" description="The friendly staff, cozy atmosphere, and incredible food make Little Lemon my top choice!"/>
            <TestimonialCard name="Ella Davis" description="After a long journey, the heavenly flavors of Little Lemon's Mediterranean food were a delight for my taste buds."/>
            <TestimonialCard name="William Wilson" description="Little Lemon's dishes are an explosion of flavors! A must-try for all food enthusiasts in Chicago!"/>
            <TestimonialCard name="Charlotte Brown" description="I had an amazing dinner experience at Little Lemon. The food was exceptional and I can't wait to order again!"/>
        </Carousel>
    );
}
