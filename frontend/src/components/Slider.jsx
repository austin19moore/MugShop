import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './../styles/custom-carousel.css';

const Slider = ({ products }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        // Slides in 5 sec intervals
        const interval = setInterval(() => {
            setCurrentSlide((currentSlide + 1) % products.length);
        }, 5000);

        return () => clearInterval(interval);

    }, [currentSlide, products]);

    return (
        <Carousel
            showThumbs={false}
            selectedItem={currentSlide}
        >
            {products.map((product, index) => (
                <div key={product._id}>
                    <img src={product.img} alt={product.title} />
                    {/*<p>{product.title}</p>*/}
                    {/*<p>{product.desc}</p>*/}
                </div>
            ))}
        </Carousel>
    );
};

export default Slider;