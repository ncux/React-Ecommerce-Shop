import { BrowserRouter } from 'react-router-dom';
import { Navbar } from "./components/navbar/navbar";
import { ProductsState } from "./context/products";
import { Routes } from "./routes";

function App() {

  return (
    <BrowserRouter>
       <ProductsState>
           <Navbar />
           <div className="container mx-auto text-blue-600 text-center mt-5">
               <Routes />
           </div>
       </ProductsState>
    </BrowserRouter>
  );
}

export default App;
