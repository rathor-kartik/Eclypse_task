import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CartPage from "./pages/Cartpage";
import HomePage from "./pages/Homepages";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={< HomePage/>} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
}
