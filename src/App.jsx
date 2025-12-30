import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import Home from './Pages/Home.jsx';
import Shop from './Pages/Shop.jsx';
// import Blog from './Pages/Blog.jsx';
// import Pages from './Pages/Pages.jsx';
import ScrollToTop from './ScrollToTop.jsx';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        {/* <Route path="/product" element={<Product />} /> */}
        {/* <Route path="/blog" element={<Blog />} /> */}
        {/* <Route path="/pages" element={<Pages />} /> */}
      </Routes>
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
