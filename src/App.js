import Sidebar from './component/Sidebar';
import Headernav from './component/Headernav';
import Contentsection from './component/Contentsection';
import Blog from './pages/Blog'
import User from './pages/User'
import Contact from './pages/Contact'
import Main from './pages/Main'
import './index.css';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import { BrowserRouter , Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <BrowserRouter >
  <Layout>
    <Headernav />
    <Sidebar />
    <Routes>
   
    <Route exact path="/" element={ <Main />} />
    <Route exact path="/blog" element={ <Blog />} />
    <Route exact path="/contact" element={ <Contact />} />
    <Route exact path="/user" element={ <User />} />
    </Routes>
  </Layout>
  </BrowserRouter>
  );
}

export default App;
