import styled from "styled-components";
import Product from "./Product";

const Container = styled.div`
    width:100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 3rem;
`;

const Header = styled.div`
   width: 65%;
   display: flex;
   align-items: center;
   border-radius: 0.25rem;
   background-color: #F1E6FA;
   box-sizing:border-box;
   padding: 1rem;
   justify-content: space-between;
   position: relative;
   margin-bottom: 1rem;
   height: 3.75rem;
`;

const SubTitle = styled.h4`
   font-size: 0.4rem;
   font-size: 600;
   color: #9B51E0;
   margin-bottom: 0.3rem;
`;
const BalanceContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
`;

const Price = styled.span`
  color: rgb(46,51,56);
  font-size: 0.7rem;
  font-weight: 800;
`;

const Button = styled.button`
   border: none;
   border-radius:0.225rem;
   padding: 0.2rem 0.5rem;
   background-color: rgb(90,65,113);
   color: #fff;
   cursor: pointer;
   font-size: 0.4rem;
   font-weight: 500;
   position: absolute;
   bottom: 10%;
   right: 10%;
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
