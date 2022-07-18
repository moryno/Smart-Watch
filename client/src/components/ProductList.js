import styled from "styled-components";
import Product from "./Product";

const Container = styled.div`
    width:100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 6rem;
`;

const Header = styled.div`
   width: 66%;
   display: flex;
   align-items: center;
   border-radius: 0.5rem;
   background-color: #F1E6FA;
   box-sizing:border-box;
   padding: 2rem;
   justify-content: space-between;
   position: relative;
   margin-bottom: 2rem;
  
`;

const SubTitle = styled.h4`
  
   font-size: 500;
   color: #9B51E0;
   margin-bottom: 0.5rem;
`;
const BalanceContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
`;

const Price = styled.span`
  color: rgb(46,51,56);
  display: inline-block;
  align-self: flex-start;
  font-weight: 800;
`;

const Button = styled.button`
   border: none;
   border-radius:0.25rem;
   padding: 0.5rem 1.5rem;
   background-color: #9B51E0;
   color: #fff;
   cursor: pointer;
   font-weight: 600;
   position: absolute;
   bottom: 10%;
   right: 5%;
`;

const ProductWrapper = styled.div`
   width: 70%;
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   box-sizing:border-box;
   padding: 1rem 0;
`

const ProductList = () => {
  return (
    <Container>
            <Header>
                <BalanceContainer>
                    <SubTitle>Total Balance</SubTitle>
                    <Price>$53.01</Price>
                </BalanceContainer>
                <Button>Connect Wallet</Button>
            </Header>
            <ProductWrapper>
                <Product />
                <Product />
                <Product />
                <Product />
            </ProductWrapper>
    
    </Container>
  )
}

export default ProductList
