import { Link } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Container, Wrapper, TopContainer, TopText, BottomContainer, BottomText, Button, Logo } from '../styles/Success.styles.jsx'
import { toRemoveAll } from '../redux/cartRedux.js';
import axios from "axios";

const ButtonLink = styled(Link)`
    color: black;
    text-decoration: none;

    &:hover, &:focus{
        text-decoration: underline;
    }
`

const Success = () => {
    // Redux keeps track of the state of the user and cart where you want to use their values
    // dispatch is for the updating those values
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.currentUser);
    const cartItems = useSelector(state => state.cart);
    console.log(user);
    console.log(cartItems);
    // When you click on the button in the success page it removes all of the cart
    // So whent the user goes to the homepage nothing should be in the cart
    // You will also want to handle calling the api data to post the items to orders
    const handleCart = (e) => {
      e.preventDefault();
      
      /* only works when user is logged in as an admin
      ********************************************************************************************************
      // remove item from quantity in database
      for (let index = 0; index < cartItems.length; index++) {

        // get current product
        let currProduct = [];
        axios.get("http://localhost:5000/api/products/" + cartItems[index].id)
        .then((response) => {
          console.log(response);
          currProduct = response.data;
          currProduct.quantity -= cartItems[index].quantity;
        })
        .catch((error) => {
          console.error(error)
        });

        // update with decremented quantity
        if (currProduct) {
          axios.put("http://localhost:5000/api/products/" + cartItems[index].id, {
            currProduct
          }, {
            headers: {
              // needs to be changed to admin token, currently only works when logged in user is admin
            token: `Bearer ${user.accessToken}`
          }
        })
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.error(error)
          });
      }
      }
      ********************************************************************************************************
      */

      
      // post to api
      const currDate = new Date();
      axios.post("http://localhost:5000/api/orders/", {
        userId: user._id,
        products: cartItems.products,
        // not sure why there is an amount required from the database when each product has an amount already, just gonna put 1
        amount: cartItems.total,
        // *** need to get this address
        date: currDate,
        status: "Ordered"
      }, {
        headers: {
        token: `Bearer ${user.accessToken}`
      }
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error)
      });

      // remove from redux
      dispatch(toRemoveAll(cartItems))
  };

    return (
      <Container>
        <Wrapper>
          <TopContainer>
            <Logo></Logo>
            <br/>
            <TopText>Thank You</TopText>
          </TopContainer>
          <BottomContainer>
            <BottomText>Your order is being prepared. We will send an email to {user.email}</BottomText>
            <Button onClick={handleCart}>
              <ButtonLink to="/">
                Go to Homepage
              </ButtonLink>
            </Button>
          </BottomContainer>
        </Wrapper>
      </Container>
    )
}

export default Success;