import { useEffect, useState } from "react";
import { Navbar } from "./components/navbar/navbar";
import { Products } from "./components/products/products";
import { commerce } from "./lib/commerce";
import { ProductsState } from "./context/products";

function App() {

  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
      const { data } = await commerce?.products?.list();
      console.log(data);
      setProducts(data);
  };

  useEffect(() => fetchProducts(), []);

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
