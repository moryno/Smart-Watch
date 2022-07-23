import { Clear } from "@material-ui/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Celo from "../images/asset_CELO.png";
import mCUSD from "../images/asset_mcUSD.png";
import UBE from "../images/asset_UBE.png";
import Defi from "../images/asset_cDEFI.png";
import CEUR from "../images/asset_mcEUR.png";
import MOO from "../images/asset_MOO.png";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgb(200,200,200);
  position: fixed;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const Wrapper = styled.div`
  width: 45%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: auto;
  padding: 1.2rem;
  border-radius: 0.5rem;
  background-color: #f9f9f9;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const SubTitle = styled.h3`
  font-weight: 600;
`;

const Button = styled.button`
  background-color: ${(props) =>
    props.position === "top" ? "inherit" : "#b195d4"};
  padding: ${(props) => props.position === "bottom" && "0.5rem 1rem"};
  border: none;
  border-radius: ${(props) => props.position === "bottom" && "0.25rem"};
  cursor: pointer;
  font-weight: 600;
  margin-top: ${(props) => props.position === "bottom" && "1rem"};
  color:${(props) => props.position === "bottom" ? "#fff" : "lightgray"};
`;

const WithdrawForm = styled.form`
  width: 100%;
`;

const FormHeader = styled.div`
    display: flex;
    align-items: center;
`;

const FormTitle = styled.h2`
  font-weight: 500;
  font-size: 1rem;
`;

const FormDescription =styled.span`
   font-weight: 400;
   font-size: 0.8rem; 
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  width: ${(props) => (props.position === "top" ? "2.5rem" : "1.5rem")};
  height: ${(props) => (props.position === "top" ? "2.5rem" : "1.5rem")};
  position: relative;
  margin-right: 2rem;
`;

const Image = styled.img`
  max-width: 100%;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: ${(props) => (props.position === "right" ? "60%" : "0")};
`;

const TitleWrapper = styled.div`
    
`;

const InputWrapper = styled.div`
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  font-size: ${(props) => (props.position === "bottom" ? "0.8rem" : "inherit")};
  font-weight: ${(props) => (props.position === "bottom" ? "500" : "inherit")};
  opacity: ${(props) => (props.position === "bottom" ? "0.8" : "1")};
  margin-top: ${(props) => (props.position === "bottom" ? "0.5rem" : "1.2rem")};
`;

const Price = styled.span``;

const AmountInput = styled.input`
  text-align: right;
  border-radius: 0.75rem;
  width: 20%;
  padding: 0.5rem;
  border: 1px solid lightgray;
  font-size: 0.8rem;
  margin: 0 0.5rem 0 1rem;
  outline: none;
`;

const Input = styled.input`
  width: 0.8rem;
  height: 0.8rem;
  background-color: white;
  border-radius: 50%;
  border: 1px solid #ddd;
  appearance: none;
  -webkit-appearance: none;
  outline: none;
  cursor: pointer;
  margin: ${(props) =>
    props.position === "bottom" ? "0 0.4rem 0" : "0 0.4rem 0 0"};
`;

const Label = styled.label`
    font-size:${props => props.position === "top" && "1.3rem"};
    font-weight:${props => props.position === "top" && "400"};
`;
const LpContainer = styled.div`
    display: flex;
    align-items: left;
    flex-direction: column;
    margin: 1rem 0;
`;

const LpDescription = styled.span`
    font-size: 0.9rem;
    font-weight: 400;
`;

const ApprovalContainer = styled.div`
  border: 1px solid lightgray;
  border-radius: 0.3rem;
  padding: 0.5rem;
  box-sizing: border-box;
`;

const Description = styled.span`
  font-size: 0.8rem;
  font-weight: 500;
`;

const Withdraw = ({onClose}) => {
  return (
    <Container>
      <Wrapper>
        <Header>
          <SubTitle>Withdraw Liquidity</SubTitle>
          <Button position="top" onClick={()=> onClose(false)}>
            
              <Clear />
            
          </Button>
        </Header>
        <WithdrawForm>
          <FormHeader>
            <ImageWrapper>
              <Image position="left" src={Celo} alt="celoImg" />
              <Image position="right" src={mCUSD} alt="mCUSDImg" />
            </ImageWrapper>
            <TitleWrapper>
              <FormTitle>CELO-mCUSD</FormTitle>
              <FormDescription>Total balance: 0.041858 LP (`$0.10)</FormDescription>
            </TitleWrapper>
          </FormHeader>
          <InputWrapper>
            <Label position="top" for="amount">Amount to remove: </Label>
            <AmountInput
              type={"text"}
              id="amount"
              name="amount"
              value={100}
            />{" "}
            %
          </InputWrapper>
          <LpContainer>
            <LpDescription>0.041858 LP</LpDescription>
            <LpDescription>$0.10</LpDescription>
          </LpContainer>
          <ApprovalContainer>
            <Description>
              You will need to sign 2 transaction to deposit
            </Description>
            <InputWrapper position="bottom">
              1{" "}
              <Input
                position="bottom"
                type={"checkbox"}
                id="token"
                name="token"
              />
              <Label position="bottom" for="token">Deposit CELO on pool</Label>
            </InputWrapper>
            <InputWrapper position="bottom">
              2{" "}
              <Input
                position="bottom"
                type={"checkbox"}
                id="bothToken"
                name="token"
              />
              <Label for="bothToken">Deposit CELO-mCUSD LP token in farm</Label>
            </InputWrapper>
          </ApprovalContainer>
          <Button position="bottom">WITHDRAW</Button>
        </WithdrawForm>
      </Wrapper>
    </Container>
  );
};

export default Withdraw;
