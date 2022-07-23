import {ArrowDropDown, ArrowDropUp } from '@material-ui/icons';

import styled from "styled-components";

import { mobile } from "../responsive";

const Container = styled.div`
   width: 45%;
   display: flex;
   align-items: center;
   box-sizing:border-box;
   padding: 0.7rem;
   justify-content: space-between;
   margin-bottom: 0.5rem;
   ${mobile({width:"100%"})}
`;

const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
    
`;

const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3.125rem;
    height: 3.125rem;
    margin-right: 0.625rem;
`;

const Image = styled.img`
    max-width: 100%;
    object-fit: cover;
    border-radius: 50%
`;


const TokenTitle = styled.p``;

const TokenSymbol = styled.span`
    font-weight: 600;
    margin-right: 0.5rem;
`;

const Wrapper = styled.div`
    margin-top:0.3rem;
    display: flex;
`;

const PriceChange = styled.span`
   display: flex;
   align-items: center;
   
`;


const TokenWrapper = styled.div`
    display: flex;
    flex-direction: column;
    
`;

const TokenValue = styled.span`
    margin-bottom: 0.5rem;
    font-weight: 600;
    font-size: 1.2rem;
    align-self: flex-end;
`;

const MarketCap = styled.span`
    font-size: 1rem;
    font-weight: 500;
    display: inline-block;
    align-self: flex-end;
`;

const TokenItem = ({token}) => {
    
    return (
        <Container>
            <TitleWrapper>
                <ImageContainer>
                    <Image src={token.logo_url} />
                </ImageContainer>
                <TokenWrapper>
                    <TokenTitle>{token.name}</TokenTitle>
                    <Wrapper>
                        <TokenSymbol>{token.id}</TokenSymbol>
                        <PriceChange style={{color: token["1d"]?.price_change_pct > 0 ? "green" : "red"}}>{token["1d"]?.price_change_pct > 0 ? <ArrowDropUp />  : <ArrowDropDown /> }{Math.round(token["1d"]?.price_change_pct * 100) /100}%</PriceChange>
                    </Wrapper>
                </TokenWrapper>
            </TitleWrapper>
            <TokenWrapper>
                <TokenValue>${Math.round(token.price)}</TokenValue>
                <MarketCap>MCap {token.market_cap}</MarketCap>
            </TokenWrapper>
        </Container>
      )
      }
      
      export default TokenItem
