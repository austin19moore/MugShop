import {BottomContainer, Container, EmptyContainer, MiddleContainer, ProductContainer, ProductImg, ProductInfo, TopContainer, TopInfo, } from "../styles/AdminOrder.styles.jsx";

const AdminOrder = ({ order }) => {
    return (
    <Container>
        <TopContainer>
            <TopInfo>Order ID: {order._id}</TopInfo>
            <TopInfo>Order Status: {order.status}</TopInfo>
            <TopInfo>Ordered On: {order.date}</TopInfo>
            <TopInfo>UserID: {order.userId}</TopInfo>
        </TopContainer>
        <MiddleContainer>
            <ProductContainer>
                Items Purchased:
                {order.products.map((product, index) => (
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center"}} 
                    key={index}>
                        <ProductInfo style={{}} >Item Purchased: {product.title} Mug</ProductInfo>
                        <ProductInfo style={{margin: "0px 70px"}}>Quantity Purchased: {product.quantity}</ProductInfo>
                    </div>
                ))}
                <TopInfo style={{margin: "8px 0px 0px 0px", borderTop: "1px solid black"}}>Order Subtotal: ${(order.amount).toFixed(2)}</TopInfo>
            </ProductContainer>
        </MiddleContainer>
    </Container> 
    )
}

export default AdminOrder