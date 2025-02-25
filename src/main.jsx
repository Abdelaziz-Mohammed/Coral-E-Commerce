
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './pages/home/Home.jsx'
import CartProvider from './cartcontext/CartProvider.jsx'
import ProductDetails from './pages/productdetails/ProductDetails.jsx'
import ShoppingCart from './pages/shoppingcart/ShoppingCart.jsx'
import CheckOut from './pages/checkout/CheckOut.jsx'
import Login from './pages/login/Login.jsx'
import Signup from './pages/signup/Signup';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '',
          element: <Home />
        },
        {
          path: 'shop/:id',
          element: <ProductDetails />
        },
        {
          path: 'cart',
          element: <ShoppingCart />
        },
        {
          path: 'checkout',
          element: <CheckOut />
        },
        {
          path: 'login',
          element: <Login />
        },
        {
          path: 'signup',
          element: <Signup />
        },
        {
          path: '*',
          element: <Home />
        }
      ]
    }
  ],
  { basename: '/React-E-Commerce/' }
);

createRoot(document.getElementById('root')).render(
  <CartProvider>
    <RouterProvider router={router} />
  </CartProvider>
);
