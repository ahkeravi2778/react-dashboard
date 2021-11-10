import Sidebar from './component/Sidebar';
import Headernav from './component/Headernav';
import Blog from './pages/Blog'
import User from './pages/User'
import Contact from './pages/Contact'
import Main from './pages/Main'
import Product from './pages/Product'
import Home from './front-end/Home'
import './index.css';
import 'antd/dist/antd.css';

import { BrowserRouter , Routes, Route} from "react-router-dom";


function App() {
  return (
    <BrowserRouter >
  
    <Headernav />
    <Sidebar />
    <Routes>
   
    <Route exact path="/" element={ <Home />} />
    <Route exact path="/dashboard" element={ <Main />} />
    <Route exact path="/blog" element={ <Blog />} />
    <Route exact path="/contact" element={ <Contact />} />
    <Route exact path="/user" element={ <User />} />
    <Route exact path="/product" element={ <Product />} />
    </Routes>
  
  </BrowserRouter>
  );
}

export default App;
