import { Clear } from "@material-ui/icons";
import styled from "styled-components";
import TokenItem from "./TokenItem";


const Container = styled.div`
    padding: 3.75rem;
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
    padding: 2rem 4rem;
    flex-wrap: wrap;
    justify-content: space-between;
    box-sizing:border-box;
  
`;



const TokenList = () => {
  return (
    <Container>
        <Header>
            <TitleWrapper>
                <Title>Tokens</Title>
                <Token>$24.34</Token>
            </TitleWrapper>
            <Button><Clear /></Button>
        </Header>
        <TokenContainer>
            <TokenItem />
            <TokenItem />
            <TokenItem />
            <TokenItem />
            <TokenItem />
            <TokenItem />
            
        </TokenContainer>
    </Container>
  )
}

export default TokenList
