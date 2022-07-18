import styled from "styled-components";

const Container = styled.div`
   width: 45%;
   background-color: #F9F9F9;
   display: flex;
   align-items: center;
   border-radius: 0.5rem;
   box-sizing:border-box;
   padding: 1.5rem;
   justify-content: space-between;
   margin: auto;
   margin-bottom: 1rem;
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
   border-radius:0.875rem;
   padding: 0.4rem 0.7rem;
   background-color: #333333;
   color: #fff;
   cursor: pointer;
   font-weight: 600;
   
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
