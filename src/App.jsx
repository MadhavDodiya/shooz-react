import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import Home from './Pages/Home.jsx';
import Shop from './Pages/Shop.jsx';
import ScrollToTop from './ScrollToTop.jsx';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
