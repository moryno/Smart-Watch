import styled from "styled-components";
import Celo from "../img/asset_CELO.png"
import MCelo from "../img/asset_mCELO.png"

const Container = styled.div`
   width: 45%;
   display: flex;
   align-items: center;
   box-sizing:border-box;
   padding: 0.7rem;
   justify-content: space-between;
   margin-bottom: 0.5rem;
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
    margin-right: 0.625rem
`;

const Image = styled.img`
    max-width: 100%;
    border-radius: 50%
`;

const TokenTitle = styled.p``;

const TokenWrapper = styled.div`
    display: flex;
    flex-direction: column;
    
`;

const TokenValue = styled.span`
    margin-bottom: 0.5rem;
    font-size: 1.5rem
`;

const TokenSubValue = styled.span`
    font-size: 1rem;
    display: inline-block;
    align-self: flex-end;
`;

const TokenItem = () => {
  return (
    <Container>
        <TitleWrapper>
            <ImageContainer>
                <Image src={Celo} />
            </ImageContainer>
            <TokenTitle>CELO</TokenTitle>
        </TitleWrapper>
        <TokenWrapper>
            <TokenValue>$0.10</TokenValue>
            <TokenSubValue>20.10</TokenSubValue>
        </TokenWrapper>
    </Container>
  )
}

export default TokenItem
