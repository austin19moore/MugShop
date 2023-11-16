import {BottomContainer, Container, EmptyContainer, MiddleContainer, ProductContainer, ProductImg, ProductInfo, TopContainer, TopInfo, } from "../styles/Order.styles.jsx";

const Order = ({ order }) => {
    return (
    <Container>
        <TopContainer>
            <TopInfo>Order ID: {order._id}</TopInfo>
            <TopInfo>Order Status: {order.status}</TopInfo>
        </TopContainer>
        <MiddleContainer>
            <ProductContainer>
                {order.products.map((product, index) => (
                    <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", }} 
                    key={index}>
                        <ProductImg src={product.img}/>
                        <ProductInfo style={{margin: "0px 140px"}} >Item: {product.title} Mug</ProductInfo>
                        <ProductInfo>Quantity: {product.quantity}</ProductInfo>
                    </div>
                ))}
            </ProductContainer>
        </MiddleContainer>
        <EmptyContainer></EmptyContainer>
        <BottomContainer>
            <TopInfo>Ordered On: {order.date}</TopInfo>
            <TopInfo>Order Subtotal: ${(order.amount).toFixed(2)}</TopInfo>
        </BottomContainer>
    </Container> 
    )
}

export default Order