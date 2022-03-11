import {AppContainer} from './Components/App.styles'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import CategoryHeadphones from './Pages/CategoryHeadphones';
import CategorySpeakers from './Pages/CategorySpeakers';
import CategoryEarphones from './Pages/CategorySpeakers';
import ProductDetailHeadphones1 from './Pages/ProductDetailHeadphones1';
import ProductDetailHeadphones2 from './Pages/ProductDetailHeadphones2';
import ProductDetailHeadphones3 from './Pages/ProductDetailHeadphones3';
import ProductDetailSpeakers1 from './Pages/ProductDetailSpeakers1';
import ProductDetailSpeakers2 from './Pages/ProductDetailSpeakers2';
import ProductDetailEarphones from './Pages/ProductDetailEarphones';
import Checkout from './Pages/Checkout';
import {GlobalStyle}  from './Globals.style';

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/category/headphones" element={<CategoryHeadphones/>}/>
          <Route path="/category/speakers" element={<CategorySpeakers/>}/>
          <Route path="/category/earphones" element={<CategoryEarphones/>}/>
          <Route path="/product detail/headphones1" element={<ProductDetailHeadphones1/>}/>
          <Route path="/product detail/headphones2" element={<ProductDetailHeadphones2/>}/>
          <Route path="/product detail/headphones3" element={<ProductDetailHeadphones3/>}/>
          <Route path="/product detail/speakers1" element={<ProductDetailSpeakers1/>}/>
          <Route path="/product detail/speakers2" element={<ProductDetailSpeakers2/>}/>
          <Route path="/product detail/earphones" element={<ProductDetailEarphones/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
