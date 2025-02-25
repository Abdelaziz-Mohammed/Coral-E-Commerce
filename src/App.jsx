
import { Outlet, useLocation } from "react-router-dom"

import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop';

function App() {
  const { pathname } = useLocation();
  const hideNavbarRoutes = ['/cart', '/checkout', '/login', '/signup'];
  return (
      <>
        {
          (!hideNavbarRoutes.includes(pathname))
          &&
          <Navbar />
        }
        <Outlet />
        <ScrollToTop />
      </>
  )
}

export default App
