import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import Home from './Pages/Home.jsx';
import Shop from './Pages/Shop.jsx';
import Blog from './Pages/Blog.jsx';
// import ProductDetail from './Pages/ProductDetail.jsx';
import Wishlist from './Pages/Wishlist.jsx';
import ScrollToTop from './ScrollToTop.jsx';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        {/* <Route path="/product/:id" element={<ProductDetail />} /> */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
