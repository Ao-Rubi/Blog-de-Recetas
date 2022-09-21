import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Menu from './components/common/Menu';
import Footer from "./components/common/Footer";
import Home from './components/Views/Home';
import AdministrarRecetas from './components/Views/recetas/AdministrarRecetas';
import Error404 from "./components/Views/Error404"
import CrearReceta from "./components/Views/recetas/CrearReceta"
import EditarReceta from './components/Views/recetas/EditarReceta';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu></Menu>
        
        <Routes>
          <Route exact path="/" element={<Home></Home>}></Route>
          <Route exact path="/administrar" element={<AdministrarRecetas></AdministrarRecetas>}></Route>
          <Route exact path="/administrar/crear" element={<CrearReceta></CrearReceta>}></Route>
          <Route exact path="/administrar/editar/:id" element={<EditarReceta></EditarReceta>}></Route>

          <Route path="*" element={<Error404></Error404>}></Route>
        </Routes>

        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
