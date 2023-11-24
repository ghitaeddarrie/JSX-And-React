import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from  "./components/Home";
import {CartProvider} from  "react-use-cart";



function App() {
 return(
  <>
   <CartProvider>
     <Home />
   </CartProvider>
  </>
 )
}


export default App;
