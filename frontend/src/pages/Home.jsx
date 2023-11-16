import SubHeader from '../components/SubHeader';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import React, { useState, useEffect } from 'react';
import Slider from '../components/Slider';
import axios from 'axios';
import {BrowserRouter as Router, Route, Routes, Navigate, useNavigate} from "react-router-dom";
import { Container, ImageContainer, Image, InfoContainer, Title, Info, Button, DescriptionContainer, DescTitle, Description, AboutUs, SmallImage, EmptyContainer } from '../styles/Home.style.jsx';
import './../styles/custom-carousel.css';

function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/products')
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => {
                console.error('Error fetching product data', error);
            });
    }, []);

    let navigate = useNavigate();

    const handleShopNow = () => {
        let path = '/products';
        navigate(path);
    }

    return (
        <Container>
            <Navbar />
            <SubHeader />
            <InfoContainer>
                    <Title>Mementize Your Trip</Title>
                    <Info>Make a physical memory with one of our starbucks we were here mugs.</Info><br/>
                    <Button onClick={() => handleShopNow()}>View Products</Button>
            </InfoContainer>
            <ImageContainer>
                <Image src="https://images.pexels.com/photos/2642842/pexels-photo-2642842.jpeg?cs=srgb&dl=pexels-valeriia-miller-2642842.jpg&fm=jpg"/>
            </ImageContainer>
            <DescriptionContainer>
                <DescTitle>About Us</DescTitle><br/><br/>
                <AboutUs>
                    <Slider products={products} />
                    <Description>Capture the essence of your wanderlust and relive the memories of your travels with Starbucks "We Were Here" mugs. These distinctive mugs serve as more than just drinkware; they become cherished mementos of your adventures. Bringing a piece of your journey into your daily routine, these mugs allow you to savor the flavors of your favorite beverages while reminiscing about the sights and experiences of your recent trip or vacation. Whether you're sipping your morning coffee or winding down with an evening tea, these mugs transport you back to the destinations you've explored, making them a sentimental addition to your post-travel rituals. With each sip, let the warmth of your drink and the memories encapsulated in these mugs bring you back to the incredible moments you've had, making your everyday routine a continuation of your travel story.</Description>
                </AboutUs>
            </DescriptionContainer>
            <EmptyContainer></EmptyContainer>
            <Footer />
        </Container>
    );
}

export default Home;