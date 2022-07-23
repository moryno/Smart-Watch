import { Clear } from "@material-ui/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Celo from "../images/asset_CELO.png";

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
  background-color: #fff;
  box-shadow: rgba(0,0,0,0.35) 0px 5px 15px;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const Title = styled.h3`
  font-weight: 600;
`;

const Button = styled.button`
  background-color:${props => props.position === "top" ? "inherit" : "#b195d4"};
  padding: ${props => props.position === "bottom" && "0.5rem 1rem"};
  border: none;
  border-radius: ${props => props.position === "bottom" &&  "0.25rem"};
  cursor: pointer;
  font-weight: 600;
  margin-top: ${props => props.position === "bottom" &&  "1rem"};
  color:${(props) => props.position === "bottom" ? "#fff" : "lightgray"};
  
`;

const DepositForm = styled.form`
  width: 100%;
`;
const InputWrapper = styled.div`
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  font-size:${props => props.position === "bottom" ? "0.8rem" : "inherit"};
  font-weight:${props => props.position === "bottom" ? "500" : "inherit"};
  opacity:${props => props.position === "bottom" ? "0.8" : "1"};
  margin-top:${props => props.position === "bottom" && "0.5rem"} 
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
  margin: ${props => props.position === "bottom" ? "0 0.4rem 0" : "0 0.4rem 0 0"};
`;

const Label = styled.label``;

const MaxInput = styled.input`
    width: 100%;
    padding: 0.6rem 0;
    margin-bottom: 0.5rem;
    outline-color: #0075ff;
    box-sizing: border-box;
    background-color: transparent;
    border-radius: 0.2rem;
    outline: none;
`;

const Select = styled.select`
    width: 100%;
    padding: 0.6rem 0;
    margin-bottom: 0.5rem;
    outline-color: #0075ff;
    background-color: transparent;
    border-radius: 0.2rem;
&:focus{
    border: 2px solid #0075ff;
}
`;

const Option = styled.option`
    padding: 0.6rem 0;
`;

const ApprovalContainer = styled.div`
    border: 1px solid lightgray;
    border-radius:0.3rem;
    padding: 0.5rem;
    box-sizing: border-box;
`;

const Description = styled.span`
    font-size: 0.8rem;
    font-weight: 500;
    
`;


const Deposit = ({onClose}) => {
  return (
    <Container>
      <Wrapper>
        <Header>
          <Title>Deposit</Title>
          <Button position="top" onClick={()=> onClose(false)}>
          
            <Clear />
         
          </Button>
        </Header>
        <DepositForm>
          <InputWrapper position="top">
            <Input position="top" type={"checkbox"} id="token" name="token" />
            <Label  htmlFor="token">Deposit using 1 token</Label>
          </InputWrapper>
          <InputWrapper position="top">
            <Input position="top" type={"checkbox"} id="bothToken" name="token" />
            <Label style={{opacity: "0.5", fontWeight: "400"}}  htmlFor="bothToken">
              Deposit using both tokens (cooming soon!)
            </Label>
          </InputWrapper>

          <Select name="token">
            <Option>CELO</Option>
            <Option>mCUSD</Option>
          </Select>
          <MaxInput type={"text"} />
          <ApprovalContainer>
            <Description>
              You will need to sign 2 transaction to deposit
            </Description>
            <InputWrapper position ="bottom">
              1 <Input position="bottom" type={"checkbox"} id="token" name="token" />
              <Label htmlFor="token">Deposit CELO on pool</Label>
            </InputWrapper>
            <InputWrapper position ="bottom">
              2 <Input position="bottom" type={"checkbox"} id="bothToken" name="token" />
              <Label htmlFor="bothToken">Deposit CELO-mCUSD LP token in farm</Label>
            </InputWrapper>
          </ApprovalContainer>
          <Button position="bottom">DEPOSIT</Button>
        </DepositForm>
      </Wrapper>
    </Container>
  );
};

export default Deposit;
