
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Cart from "./pages/Cart";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import CategoryCard from "./pages/CategoryCard";
import WebListView from "./pages/WebListView";
import Wishlist from "./pages/Whishlist";
import WebDetail from "./pages/WebDetail";
import WebCart from "./pages/WebCart";
import LoginModal from "./pages/LoginModal";
import SignupModal from "./pages/SignupModal";
import Checkout from "./pages/CheckOut";


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" elememt={<SignupModal/>}/>
        <Route path="/login" elememt={<LoginModal/>}/>
        <Route path="/category/:categoryName" element={<Category />} />
        <Route path="/cart" element={<Cart />} />
        {/* Product listing page */}
        <Route path="/products" element={<Products />} />
        {/* Product detail page */}
        <Route path="/product/:id" element={<ProductDetail />} />
        {/* Optional: Category card page for testing */}
        <Route path="/categorycard" element={<CategoryCard />} />
        <Route path="/weblistview" element={<WebListView />} />
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path='/checkout' element={<Checkout/>}/>

        {/* <Route path='webgridview' element={<WebDetail/>}/> */}

         <Route path="/detail/:id" element={<WebDetail />} />
         <Route path="/cart" element={<WebCart/>}/> 
      </Routes>
      <Footer />
    </>
  );
}

export default App;
