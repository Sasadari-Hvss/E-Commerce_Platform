import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signUp/SignUp";
import Inventory from "./pages/Inventory/Inventory";
import About from "./pages/About/About"; 
import ProductList from "./pages/Product/ProductList";
import MyOrder from "./pages/myorderPage/MyOrder"
import OrdDetails from './pages/OrdDetails/OrdDetails';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signIn" element={<SignIn />}></Route>
        <Route path="/Inventory" element={<Inventory />}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/products" element={<ProductList/>}></Route>
        <Route path = "/MyOrder" element={<MyOrder/>}></Route>
        <Route path = "/OrdDetails" element={<OrdDetails/>}></Route>
    
      </Routes>
    </BrowserRouter>
  );
}

export default App;
