import styled from "styled-components";
import Product from "./Product";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {mobile} from "../responsive"

const Container = styled.div`
    width:100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 4rem;
    ${mobile({marginTop:"1rem"})}
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
  ${mobile({width:"100%", borderRadius: "0", marginBottom: "1rem"})}
`;

const Title = styled.h1`
   font-size: 1.2rem;
   margin-bottom: 1rem;
   
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
   align-items: center;
   justify-content: space-between;
   box-sizing:border-box;
   padding: 1rem 0;
   ${mobile({width:"100%"})}
`

const ProductList = () => {
   const [list, setList] = useState([]);

   useEffect(()=> {
      fetch("https://api.nomics.com/v1/currencies/ticker?key=d5f60a545bf2308431031660f6c4f197499a213c&interval=1d,30d&convert=EUR")
  .then(response => response.json())
  .then(data => data.forEach(item => console.log(item)))
   }, [])
  return (
    <Container>
            <Title>Portfolio</Title>
            <Header>
                <BalanceContainer>
                    <SubTitle>Total Balance</SubTitle>
                    <Price>$53.01</Price>
                </BalanceContainer>
                <Button>Connect Wallet</Button>
            </Header>
            <ProductWrapper>
               {list.map(item => {
                  return <Product key={item.id} item={item} />
               })}
            </ProductWrapper>
    
    </Container>
  )
}

export default ProductList

{/* <Link className="link" to={"/register"}>Register</Link>  */}





// fetch("https://api.nomics.com/v1/currencies/ticker?key=d5f60a545bf2308431031660f6c4f197499a213c&ids=BTC,ETH,XRP&interval=1d,30d&convert=EUR&platform-currency=ETH&per-page=100&page=1")
// .then(response => response.json())
// .then(data => console.log(data))