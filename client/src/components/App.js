import TokenList from "./TokenList";
import Product from "./Product";
import ProductList from "./ProductList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Ubeswap from "./Ubeswap";
import Deposit from "./Deposit";
import Withdraw from "./Withdraw";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<ProductList />} />
        <Route path="/portfolio/:id" element={<TokenList />} />
      </Routes>{" "}
    </Router>
  );
}

export default App;

