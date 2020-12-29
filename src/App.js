import { Navbar } from "./components/navbar/navbar";
import { Products } from "./components/products/products";
import { ProductsState } from "./context/products";

function App() {

  return (
    <>
       <ProductsState>
           <Navbar />
           <div className="container mx-auto text-blue-600 text-center mt-5">
               <h4 className={`my-5`}>
                   All Products
               </h4>
               <Products />
           </div>
       </ProductsState>
    </>
  );
}

export default App;
