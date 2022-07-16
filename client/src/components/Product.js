import styled from "styled-components";

const Container = styled.div`
   width: 45%;
   background-color: #F9F9F9;
   display: flex;
   align-items: center;
   border-radius: 0.25rem;
   box-sizing:border-box;
   padding: 0.7rem;
   justify-content: space-between;
   margin: auto;
   margin-bottom: 0.5rem;
`;



const SubTitle = styled.h4`
   font-size: 0.4rem;
   font-size: 600;
   color: #333333;
   margin-bottom: 0.3rem;
`;
const BalanceContainer = styled.div`
   display: flex;
   flex-direction: column;
`;

const Price = styled.span`
  color: #333333;
  font-size: 0.5rem;
  font-weight: 700;
`;

const Button = styled.button`
   border: none;
   border-radius:0.875rem;
   padding: 0.2rem 0.5rem;
   background-color: #333333;
   color: #fff;
   cursor: pointer;
   font-size: 0.4rem;
   font-weight: 500;
   
`;


const Product = () => {
  return (
    <Container>
                <BalanceContainer>
                    <SubTitle>Tokens</SubTitle>
                    <Price>$53.01</Price>
                </BalanceContainer>
                <Button>View</Button>
    </Container>
  )
}

export default Product
