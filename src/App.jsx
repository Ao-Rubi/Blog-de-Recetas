import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Menu from './components/common/Menu';
import Footer from "./components/common/Footer";
import Home from './components/Views/Home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu></Menu>
        
        <Routes>
          <Route exact path="/" element={<Home></Home>}></Route>
          
        </Routes>

        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
