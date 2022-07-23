import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 45%;
  background-color: #f9f9f9;
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  box-sizing: border-box;
  padding: 1.5rem;
  justify-content: space-between;
  margin: auto;
  margin-bottom: 1rem;
  ${mobile({ width: "100%" })}
`;

const SubTitle = styled.h4`
  font-weight: 700;
  color: #333333;
  margin-bottom: 0.5rem;
`;
const BalanceContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Price = styled.span`
  color: #333333;

  font-weight: 500;
`;

const Button = styled.button`
  border: none;
  border-radius: 0.875rem;
  padding: 0.4rem 0.7rem;
  background-color: #333333;
  color: #fff;
  cursor: pointer;
  font-weight: 600;
`;

const Product = () => {
  return (
   <>
      <Container>
      <BalanceContainer>
        <SubTitle>Token</SubTitle>
        <Price>$29.73</Price>
      </BalanceContainer>
      <Link to={`/portfolio/tokens`}>
        <Button>View</Button>
      </Link>
    </Container>
   <Container>
      <BalanceContainer>
        <SubTitle>Ubeswap</SubTitle>
        <Price>$2.28</Price>
      </BalanceContainer>
      <Link to={`/portfolio/ubeswap`}>
        <Button>View</Button>
      </Link>
    </Container>
      <Container>
      <BalanceContainer>
        <SubTitle>UniswapV3</SubTitle>
        <Price>$2.72</Price>
      </BalanceContainer>
      <Link to={`/portfolio/`}>
        <Button>View</Button>
      </Link>
    </Container>
   <Container>
      <BalanceContainer>
        <SubTitle>SushiSwap</SubTitle>
        <Price>$2.52</Price>
      </BalanceContainer>
      <Link to={`/portfolio/`}>
        <Button>View</Button>
      </Link>
    </Container>
   </>
    
  );
};

export default Product;
