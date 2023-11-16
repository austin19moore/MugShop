import { Link } from "react-router-dom";
import { Container, Image, Info, Title, Price, Quantity, Button } from "../styles/product.styles.jsx";

const Product = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Price>${item.price}</Price>
        <Quantity>Quantity: {item.quantity}</Quantity>
        <Link to={`/products/${item._id}`}>
          <Button>View Details</Button>
        </Link>
      </Info>
    </Container>
  );
};

export default Product;