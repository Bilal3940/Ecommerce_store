
import { ControlCameraOutlined } from '@material-ui/icons'
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import React,{useState, useEffect} from 'react'
import Cart from './components/cart/Cart'
import Navbar from './components/Nabar/Navbar'
import Products from './components/Products/Products'
import { commerce } from './lib/commerce'
import Mensproducts from './components/Mens/Mensproducts';
import Checkout from './components/Checkout/Checkout';


const App = () => {
const [products, setProducts ] = useState([]);
const [cart, setCart] = useState({});
const [del, setDel] = useState([]);
const [delitem, setDelitem] = useState([]);
const fetchproducts = async ()=>{
  const {data} = await commerce.products.list();
  setProducts(data);
}



const fetchcart = async ()=>{
  setCart( await commerce.cart.retrieve());
}
// console.log(products);
// const fetchmanproducts = async ()=>{
//   setProducts()

  // })


const handleAddToCart = async(productId,quantity)=>{
  setCart(await commerce.cart.add(productId, quantity));
    
}
// console.log(cart);
const handleUpdateCartQnt = async(productId,quantity)=>{
  setCart(await commerce.cart.update(productId, {quantity}));
}
const Emptycart = async ()=>{
  setCart(await commerce.cart.empty());
  // window.location.reload(); //It can also be used instead of fetchcart function
  fetchcart(); //another method
}
const removeitem = async (id) => {
  setCart(await commerce.cart.remove(id));
  fetchcart();
}

  useEffect(()=>{
    fetchproducts();
    fetchcart();
  },[]);  
  // commerce.cart.empty();
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Navbar items ={cart.total_items}/>
          <Products products ={products} onAddToCart ={handleAddToCart}/>
          
        </div>
      ),
    },
    {
      path: "cart",
      element: <div>
        <Navbar items ={cart.total_items}/>
        <Cart cart = {cart} Emptycart ={Emptycart} removeitem={removeitem} products ={products} handleUpdateCartQnt ={handleUpdateCartQnt}/>
      </div>,
    },
    {
      path: "mens",
      element: <div>
        <Navbar items ={cart.total_items}/>
        <Mensproducts products ={products} cart ={cart} onAddToCart={handleAddToCart}/>
      </div>,
    },
    {
      path: "checkout",
      element: <div>
        <Navbar items ={cart.total_items}/>
        <Checkout cart={cart} />
      </div>,
    },
  ]);
  
  createRoot(
    document.getElementById("root")).render(
    <RouterProvider router={router} />
  );
}
export default App;