import { Facebook, Twitter, Instagram } from "@material-ui/icons";
import { Container, Left, UsefulLinks, Links, FooterLink, Logo, SocialContainer, SocialIcon, Right, Center } from "../styles/Footer.styles";
import starbucksLogo from "../starbuckslogo.png";

const Footer = () => {
  return (
    <Container>
      <Left>
        <UsefulLinks>Site Links</UsefulLinks>
        <Links>
          <li>
            <FooterLink to="/">Home</FooterLink>
          </li>
          <li>
            <FooterLink to="/products">Products</FooterLink>
          </li>
          <li>
            <FooterLink to="/order-history">Order History</FooterLink>
          </li>
        </Links>
      </Left>
      <Center>
        <Logo>
          <img src={starbucksLogo} alt="Starbucks Mugs" />
        </Logo>
      </Center>
      <Right>
        <SocialContainer>
          <SocialIcon>
            <Facebook />
          </SocialIcon>
          <SocialIcon>
            <Twitter />
          </SocialIcon>
          <SocialIcon>
            <Instagram />
          </SocialIcon>
        </SocialContainer>
      </Right>
    </Container>
  );
};

export default Footer;