import TokenList from "./TokenList";
import ProductList from "./ProductList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Ubeswap from "./Ubeswap";


function App() {
  
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<ProductList  />} />
        <Route path="/portfolio/tokens" element={<TokenList />} />
        <Route path="/portfolio/ubeswap" element={<Ubeswap  />} />
      </Routes>
    </Router>
    
    </>
  );
}

export default App;

