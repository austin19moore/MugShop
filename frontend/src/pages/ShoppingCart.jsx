import Navbar from "../components/Navbar";
import SubHeader from "../components/SubHeader";
import Footer from "../components/Footer";
import { DeleteOutline } from "@material-ui/icons";
import {Container, Wrapper, Top, TopTexts, TopText, Title, Bottom, Info, Product, ProductInfo, Image,
    ProductDetails, ProductName, ProductID, ProductPrice, PriceContainer, Quantity, Price, Hr, SmallLine,
    CartSummary, SummaryTitle, SummaryItem, SummaryItemText,
    SummaryItemPrice, Button, EmptyContainer, Line, ButtonLink, Input, Error} from "../styles/ShoppingCart.styles";
import { useSelector, useDispatch } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {userRequest} from "../request";
import { toRemove } from "../redux/cartRedux";

const ShoppingCart = ({ ifUser }) => {
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    const user = useSelector((state) => state.user.currentUser);
    const shipping = 8.99;
    // entered discount code
    let discCode = "";
    // curr discount percentage
    const [currDisc, setCurrDisc] = useState(0);
    // discount code list
    let discList = new Map([["5OFF", 0.05]]);
    const [discError, setDiscError] = useState(false);
    const tax = (cart.total *0.0825).toFixed(2);
    const finalTotal = (cart.total + (cart.total *0.0825) + shipping).toFixed(2);
    const [stripeToken, setStripeToken] = useState(null);
    const history = useNavigate();

    const onToken = (token) => {
        setStripeToken(token);
    };
    
    /*------------------IMPORTANT------------------------------------ */
    // When using stripe checkout test card data is
    // 4242 4242 4242 4242
    // 12/23 and any 3 digits
    /*------------------------------------------------------ */

    // Right now the solution for stripe is when it is being used it will just resend the
    // user to the success page, which is fine as it doesn't actually have to connect
    // to the api
    useEffect(() => {
        const makeRequest = async () => {
            history("/success");
          try {
                const res = await userRequest.post("checkout/payment", {
                tokenId: stripeToken.id,
                amount: cart.total * 100,
            });
          } catch {

          }
        };
        stripeToken && makeRequest();
      }, [stripeToken, cart, history]);

      const handleDiscountEnter = (e) => {
        if (e.key === "Enter") {
            console.log("discount code: " + e.target.value);
            discCode = e.target.value;
            // handle calculation
            if (discList.has(discCode)) {
                setCurrDisc(discList.get(discCode));
                setDiscError(false);
            } else {
                setDiscError(true);
            }
        }
      };

    return (
        <Container>
            <Navbar ifUser={ifUser}/>
            <SubHeader/>
            <Wrapper>
                <Title>Your Cart</Title>
                <Line/>
                <Top>
                    <TopTexts>
                        <TopText></TopText>
                    </TopTexts>
                </Top>
                <Bottom>
                    <Info>
                        { cart.products.map((product) => (
                        <Product>
                            <ProductInfo>
                                <Image src={product.img}/>
                                <ProductDetails>
                                    <ProductName><b>Item Name: </b>{product.title}</ProductName>
                                </ProductDetails>
                            </ProductInfo>
                            <ProductPrice>
                                <PriceContainer>
                                    <Quantity>{product.quantity}</Quantity>
                                </PriceContainer>
                                <Price>$ {(product.price * product.quantity).toFixed(2)}</Price>
                            </ProductPrice>
                            <DeleteOutline style={{cursor: "pointer"}} onClick={() => dispatch(toRemove(product))}/>
                        </Product>))}
                        <Hr/>
                    </Info>
                    <CartSummary>
                        <SummaryTitle>Order Details</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal: </SummaryItemText>
                            <SummaryItemPrice>$ {Math.abs(cart.total.toFixed(2))}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Flat Rate Shipping: </SummaryItemText>
                            <SummaryItemPrice>$ {shipping}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Discount: <Input onKeyDown={(e) => handleDiscountEnter(e)}/></SummaryItemText>
                            {discError ? <Error>Discount does not exist</Error> : <SummaryItemText>- $ {(finalTotal * currDisc).toFixed(2)}</SummaryItemText>}
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Tax: </SummaryItemText>
                            <SummaryItemPrice>$ {tax}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SmallLine/>
                        </SummaryItem>
                        <SummaryItem type= "total">
                            <SummaryItemText>Total: </SummaryItemText>
                            <SummaryItemPrice>$ {(finalTotal - (finalTotal * currDisc)).toFixed(2)}</SummaryItemPrice>
                        </SummaryItem>
                        <StripeCheckout
                            name = "Starbucks Mugs"
                            email = {user.email}
                            billingAddress
                            shippingAddress
                            description={`Total $${(finalTotal - (finalTotal * currDisc)).toFixed(2)}`}
                            amount = {(finalTotal - (finalTotal * currDisc)).toFixed(2) * 100}
                            currency="USD"
                            token = {onToken}
                            stripeKey={process.env.REACT_APP_STRIPE}> 
                            <Button>
                                <ButtonLink >
                                        Checkout
                                </ButtonLink>
                            </Button>
                        </StripeCheckout>
                    </CartSummary>
                </Bottom>
            </Wrapper>
            <EmptyContainer></EmptyContainer>
            <Footer/>
        </Container>
    )
}

export default ShoppingCart