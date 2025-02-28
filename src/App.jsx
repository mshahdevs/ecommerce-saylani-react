import './App.css';
import { Routes, Route } from 'react-router-dom';
// import { Products } from './pages/Products'
import { Pages } from './pages/Pages';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
// import { Navbar } from './components/Navbar'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProducts } from './Slices/ProductSlice';
import { Favorite } from './pages/Favorite';
import { FlashSalesProducts } from './components/Products/FlashSalesProducts';
import { Cart } from './pages/Cart';
// import { FilterProducts } from './pages/FilterProducts'
import { AllProducts } from './components/Products/AllProducts';
import ShopList from './pages/ShopList';
import { ShoppingCart } from './components/ShoppingCart';
import { Footer } from './components/Footer';
import Blog from './pages/Blog';
import Shop from './pages/Shop';
import ProductDetail from './components/Products/ProductDetail';
import { ShopLeftSidebar } from './pages/ShopLeftSidebar';
import Navbar from './components/ShopUsNav';
import { SignUp } from './pages/Signup';
import { ForgetPassword } from './pages/ForgetPassword';
import About from './pages/About';
import Faq from './pages/Faq';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <>
      <Navbar />

      <Routes>
        <Route index element={<Home />} />
        <Route path='/all-products' element={<AllProducts />} />
        <Route path='/pages' element={<Pages />} />
        <Route path='/login' element={<Login />} />
        <Route path='/favorite' element={<Favorite />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/pages/shop-left-sidebar' element={<ShopLeftSidebar />} />
        <Route path='/shop-list' element={<ShopList />} />
        <Route path='/products' element={<AllProducts />} />
        <Route path='/shopping-cart' element={<ShoppingCart />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/about' element={<About />} />
        <Route path='/pages/faq' element={<Faq />} />

        <Route path='/forget-password' element={<ForgetPassword />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/product-detail' element={<ProductDetail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
