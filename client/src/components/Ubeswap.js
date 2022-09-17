import styled from "styled-components";
import { mobile } from "../responsive";
import Celo from "../images/asset_CELO.png";
import mCUSD from "../images/asset_mcUSD.png";
import UBE from "../images/asset_UBE.png";
import Defi from "../images/asset_cDEFI.png";
import CEUR from "../images/asset_mcEUR.png";
import MOO from "../images/asset_MOO.png";
import { Link } from "react-router-dom";
import { Clear } from "@material-ui/icons";
import { useState } from "react";
import Deposit from "./Deposit";
import Withdraw from "./Withdraw";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${mobile({ padding: "1rem", width: "100%" })}
`;
const TitleHeader = styled.div`
  display: flex;
  width: 95%;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 3.5rem 1rem 3.5rem;
  box-sizing: border-box;
  border-bottom: 1px solid lightgray;
  margin-bottom: 3rem;
  ${mobile({ padding: "0", width: "100%" })}
`;

const TitleWrapper = styled.div`
  display: flex;
  alig-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Wrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f9f9;
  margin: auto;
  border-radius: 0.5rem;
  box-sizing: border-box;
  padding: 1.5rem;
  margin-bottom: 1rem;
  ${mobile({ width: "100%" })}
`;

const Header = styled.div`
  width: 100%;
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.5rem 0 0;
  box-sizing: border-box;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;
const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  width: ${(props) => (props.position === "top" ? "2.5rem" : "1.5rem")};
  height: ${(props) => (props.position === "top" ? "2.5rem" : "1.5rem")};
  position: relative;
  margin-right: ${(props) => (props.position === "top" ? "2rem" : "1rem")};
`;

const Image = styled.img`
  max-width: 100%;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: ${(props) => (props.position === "right" ? "60%" : "0")};
`;

const Title = styled.h2`
  font-weight: 600;
  font-size: ${(props) => (props.position === "top" ? "1.2rem" : "1rem")};
  color: ${(props) =>
    props.position === "top"
      ? "inherit"
      : props.position === "bottom"
      ? "#b2afb1 "
      : "#9b51e0"};
  margin-bottom: ${(props) => (props.position === "top" ? "0" : "0.5rem")};
`;

const Price = styled.span`
  font-weight: ${(props) => (props.position === "top" ? "600" : "400")};
  font-size: ${(props) => (props.position === "top" ? "1.2rem" : "1rem")}; ;
`;

const Button = styled.button`
  margin-top: 1rem;
  border: ${(props) =>
    props.position === "left" || props.position === "right"
      ? "none"
      : props.position === "bottom"
      ? "1px solid #624e7b"
      : "none"};
  border-radius: 0.625rem;
  color: ${(props) =>
    props.position === "left" || props.position === "right"
      ? "#fff"
      : props.position === "bottom"
      ? "1px solid #624e7b"
      : "none"};
  background-color: ${(props) =>
    props.position === "left"
      ? "#b195d4"
      : props.position === "right"
      ? "#2e3338"
      : "inherit"};
  padding: ${(props) =>
    props.position === "left" || props.position === "right"
      ? " 0.5rem 1rem"
      : "0.3rem 1rem"};
  font-weight: 600;
  margin-right: ${(props) => props.position === "left" && "1rem"};
  cursor: pointer;
`;

const RewardContainer = styled.div`
  width: 100%;
  margin-top: 1rem;
`;

const RewardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Rewards = styled.div`
  text-align: center;
`;

const RewardsInfo = styled.div`
  display: flex;
  align-items: center;
`;

const Span = styled.span`
  font-weight: 600;
`;

const Ubeswap = () => {
  const [withdraw, setWithdraw] = useState(false);
  const [deposit, setDeposit] = useState(false);

  return (
    <Container>
      <TitleHeader>
        <TitleWrapper>
          <Title>Ubeswap</Title>
        </TitleWrapper>
        <Button>
          <Link to={"/portfolio"}>
            <Clear />
          </Link>
        </Button>
      </TitleHeader>
      <Wrapper>
        <Header>
          <HeaderWrapper>
            <LogoContainer>
              <ImageWrapper position="top">
                <Image position="left" src={Celo} alt="celoImg" />
                <Image position="right" src={mCUSD} alt="mCUSDImg" />
              </ImageWrapper>
              <Title position="top">CELO-mCUSD</Title>
            </LogoContainer>
            <Price position="top">$0.1</Price>
          </HeaderWrapper>
          <Button
            onClick={() => setDeposit((deposit) => !deposit)}
            position="left"
          >
            DEPOSIT
          </Button>
          <Button
            onClick={() => setWithdraw((openModal) => !openModal)}
            position="right"
          >
            WITHDRAW
          </Button>
        </Header>

        <RewardContainer>
          <RewardWrapper>
            <Rewards>
              <Title position="bottom">REWARDS</Title>
              <RewardsInfo>
                <ImageWrapper position="bottom">
                  <Image src={UBE} alt="ubeImg" />
                </ImageWrapper>
                <Price position="bottom">
                  <Span>UBE: </Span>$0.00027
                </Price>
              </RewardsInfo>
            </Rewards>
            <Button position="bottom">CLAIM</Button>
          </RewardWrapper>
        </RewardContainer>
      </Wrapper>
      <Wrapper>
        <Header>
          <HeaderWrapper>
            <LogoContainer>
              <ImageWrapper position="top">
                <Image position="left" src={Celo} alt="celoImg" />
                <Image position="right" src={Defi} alt="mCUSDImg" />
              </ImageWrapper>
              <Title position="top">CELO-mDEFI</Title>
            </LogoContainer>
            <Price position="top">$1.09</Price>
          </HeaderWrapper>
          <Button
            onClick={() => setDeposit((deposit) => !deposit)}
            position="left"
          >
            DEPOSIT
          </Button>
          <Button
            onClick={() => setWithdraw((openModal) => !openModal)}
            position="right"
          >
            WITHDRAW
          </Button>
        </Header>

        <RewardContainer>
          <RewardWrapper>
            <Rewards>
              <Title position="bottom">REWARDS</Title>
              <RewardsInfo>
                <ImageWrapper position="bottom">
                  <Image src={UBE} alt="ubeImg" />
                </ImageWrapper>
                <Price position="bottom">
                  <Span>UBE: </Span>$0.042
                </Price>
              </RewardsInfo>
            </Rewards>
            <Button position="bottom">CLAIM</Button>
          </RewardWrapper>
        </RewardContainer>
      </Wrapper>
      <Wrapper>
        <Header>
          <HeaderWrapper>
            <LogoContainer>
              <ImageWrapper position="top">
                <Image position="left" src={mCUSD} alt="celoImg" />
                <Image position="right" src={CEUR} alt="mCUSDImg" />
              </ImageWrapper>
              <Title position="top">CELO-mCUSD</Title>
            </LogoContainer>
            <Price position="top">$0.1</Price>
          </HeaderWrapper>
          <Button
            onClick={() => setDeposit((deposit) => !deposit)}
            position="left"
          >
            DEPOSIT
          </Button>
          <Button
            onClick={() => setWithdraw((openModal) => !openModal)}
            position="right"
          >
            WITHDRAW
          </Button>
        </Header>

        <RewardContainer>
          <RewardWrapper>
            <Rewards>
              <Title position="bottom">REWARDS</Title>

              <RewardsInfo>
                <ImageWrapper position="bottom">
                  <Image src={MOO} alt="ubeImg" />
                </ImageWrapper>
                <Price position="bottom">
                  <Span>UBE: </Span>$0.0018
                </Price>
              </RewardsInfo>
            </Rewards>
            <Button position="bottom">CLAIM</Button>
          </RewardWrapper>
        </RewardContainer>
      </Wrapper>
      {deposit && <Deposit onClose={setDeposit} />}
      {withdraw && <Withdraw onClose={setWithdraw} />}
    </Container>
  );
};

export default Ubeswap;
