import styled from "styled-components";
import Product from "./Product";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { mobile } from "../responsive";
import { Refresh } from "@material-ui/icons";
import { style } from "@mui/system";
import Deposit from "./Withdraw";

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 4rem;
  ${mobile({ marginTop: "1rem" })}
`;

const Header = styled.div`
  width: 66%;
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  background-color: #f1e6fa;
  box-sizing: border-box;
  padding: 2rem;
  justify-content: space-between;
  position: relative;
  margin-bottom: 2rem;
  ${mobile({ width: "100%", borderRadius: "0", marginBottom: "1rem" })}
`;

const Title = styled.h1`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const SubTitle = styled.h4`
  font-size: 500;
  color: #9b51e0;
  margin-bottom: 0.5rem;
`;
const BalanceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Price = styled.span`
  color: rgb(46, 51, 56);
  display: inline-block;
  align-self: flex-start;
  font-weight: 800;
`;

const Button = styled.button`
  border: none;
  border-radius: 0.25rem;
  padding: 0.5rem 1.5rem;
  background-color: #9b51e0;
  color: #fff;
  cursor: pointer;
  font-weight: 600;
  position: absolute;
  top: 20%;
  right: 5%;
`;

const Description = styled.span`
  position: absolute;
  bottom: 20%;
  right: 5%;
`;

const ProductWrapper = styled.div`
  width: 70%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 1rem 0;
  ${mobile({ width: "100%" })}
`;
const Error = styled.span``;

const ProductList = ({openModal}) => {
  const [{ data, errors, status }, setState] = useState({
    data: null,
    errors: null,
    status: "idle",
  });

  const [connect, setConect] = useState(false);
  

  useEffect(() => {
    setState((state) => ({ ...state, errors: null, status: "pending" }));
    fetch("https://celotokens.herokuapp.com/apitokens/")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return response.text().then((err) => {
            throw err;
          });
        }
      })
      .then((data) => setState({ data, errors: null, status: "fulfilled" }))
      .catch((err) => {
        setState({ data: null, errors: [err], status: "rejected" });
      });
  }, []);

  if (status === "idle" || status === "pending") {
    return <SubTitle>Loading...</SubTitle>;
  }

  if (status === "rejected") {
    return (
      <>
        <SubTitle>Error</SubTitle>
        {errors.map((e) => (
          <Error key={e}>{e}</Error>
        ))}
      </>
    );
  }

  return (
    <Container>
      <Title>Portfolio</Title>
      <Header>
        <BalanceContainer>
          <SubTitle>Total Balance</SubTitle>
          <Price>{connect ? "$53.01" : "$0.00"}</Price>
        </BalanceContainer>
        <Button
          onClick={() => setConect((connect) => !connect)}
          style={{
            backgroundColor: connect && "transparent",
            color: connect && "#9b51e0",
          }}
        >
          {connect ? <Refresh /> : "Connect Wallet"}
        </Button>
        {connect && <Description>0x43d1eb...23225C</Description>}
      </Header>
      {connect && (
        <ProductWrapper>
          <Product  />;
        </ProductWrapper>
      )}
     
    </Container>
  );
};

export default ProductList;
