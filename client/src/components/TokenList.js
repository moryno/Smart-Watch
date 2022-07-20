import { Clear } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";
import TokenItem from "./TokenItem";



const Container = styled.div`
    padding: 3.75rem;
    ${mobile({padding: "1rem", width: "100%"})}
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content:space-between;
    padding:2rem 3.5rem 1rem 3.5rem;
    box-sizing: border-box;
    border-bottom: 1px solid lightgray
`;


const TitleWrapper = styled.div`
    display:flex;
    alig-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Title =  styled.h2`
    font-weight: 500;
    margin-bottom: 1rem;
`;

const Token = styled.h3`
    font-weight: 500;
`;

const Button = styled.button`
    cursor:pointer;
    background-color: transparent;
    border: none;
`;

const TokenContainer = styled.div`
    display:flex;
    padding: 2rem;
    flex-wrap: wrap;
    justify-content: space-between;
    box-sizing:border-box;
   ${mobile({padding:"1rem"})}
`;



const TokenList = () => {
    const [list, setList] = useState([]);
   

    useEffect(()=> {
        fetch("https://api.nomics.com/v1/currencies/ticker?key=d5f60a545bf2308431031660f6c4f197499a213c&interval=1d,30d&convert=EUR")
          .then(response => response.json())
          .then(data => setList(data))
    }, []);

    

  return (
    <Container>
        <Header>
            <TitleWrapper>
                <Title>Tokens</Title>
                <Token>$24.34</Token>
            </TitleWrapper>
            <Button><Link to={"/portfolio"}><Clear /></Link></Button>
        </Header>
        <TokenContainer>
            {list.map(token => {
               return <TokenItem key={token.id} token={token}  />
            })}
            
        </TokenContainer>
    </Container>
  )
}

export default TokenList
