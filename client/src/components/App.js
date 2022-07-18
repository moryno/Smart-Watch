import TokenList from "./TokenList"
import Product from "./Product";
import ProductList from "./ProductList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />

      </Routes>
    </Router>
  );
}

export default App;
