import Navbar from "../components/Navbar";
import SubHeader from "../components/SubHeader";
import Footer from "../components/Footer";
import axios from "axios";
import { useState, useEffect } from "react";
import { Add, Remove } from "@material-ui/icons";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../request";
import { addProduct } from "../redux/cartRedux";
import { useDispatch, useSelector } from "react-redux";
import {Container, Wrapper, ImgContainer, InfoContainer, Image, Title, Desc, Price, AddtoCart, AmountContainer, Amount, Button, Quantity, Hr, AdminBar, AdminButton, Button2} from "../styles/Item.styles"
import UpdateForm from "../components/UpdateForm"

const Item = () => {
    // Location is for looking at the url and parsing it for the id
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [items, setItems] = useState({});
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.currentUser);
    const [isAdminBarVisible, setAdminBarVisibility] = useState(false);

    // Looks for the item in our api route with its id that we parse from the url
    useEffect(() => {
        const getItem = async () =>{
            try{
                const res = await publicRequest.get("products/find/"+ id)
                setItems(res.data);
            }catch{}
        }
        getItem();
      }, [id]);

    // Handling the visuals of adding to cart
    // Makes sure you can't go below 1 as that wouldn't make sense
    const handleItemQuantity = (type) => {
        if(type === "decrease")
        {
            quantity > 1 && setQuantity(quantity - 1);
        }
        else if (quantity >= items.quantity) {
            // dont add to cart as there arent enough items
        } else {
        //    items.quantity > quantity
            setQuantity(quantity + 1);
        }
    };

    // Adds items to cart
    const handleButtonClick = () => {
        dispatch(
            addProduct({...items, quantity})
        )
        //items.quantity -= quantity
    }

    const handleDeleteClick = async (e) => {
        axios.delete(`http://localhost:5000/api/products/${id}`, {
                headers: {
                        token: `Bearer ${user.accessToken}`
                }
        })
        .then(response => {
            console.log(`Resource deleted: ${id}`);
            window.location.href = "http://localhost:3000/products/";
        })
        .catch(error => {
            console.error('Error deleting resource:', error);
        });
    }

    const toggleAdminBar = () => {
        setAdminBarVisibility(!isAdminBarVisible);
    };

    return (
        <Container>
            <Navbar/>
            <SubHeader/>
            <Wrapper>
                <ImgContainer>
                    <Image src={items.img} />
                </ImgContainer>
                <InfoContainer>
                    <Title>{items.title}</Title>
                    <Desc>{items.desc}</Desc>
                    <br/>
                    <Price>${items.price}</Price>
                    <br/>
                    <Hr/>
                    <AddtoCart>
                        <AmountContainer>
                            <Remove onClick={() => handleItemQuantity("decrease")}/>
                            <Amount>{quantity}</Amount>
                            <Add onClick={() => handleItemQuantity("increase")}/>
                        </AmountContainer>
                    </AddtoCart>
                    <Button onClick={handleButtonClick}>Add to Cart</Button>
                </InfoContainer>
                {user != null && user.isAdmin &&
                    <div>
                        <AdminButton type="button" onClick={toggleAdminBar}>Admin Options</AdminButton>
                    </div>}
                {isAdminBarVisible && 
                <AdminBar onClose={toggleAdminBar}>
                    <UpdateForm></UpdateForm>
                    <br/>
                    <h2>Delete Item</h2>
                    <Button2 type="button" onClick={handleDeleteClick}>Delete</Button2>
                </AdminBar>}
            </Wrapper>
            <Footer/>
        </Container>
        
    )
}

export default Item