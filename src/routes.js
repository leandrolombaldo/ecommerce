import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Cart from './pages/Cart';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import CheckOut from './pages/CheckOut';
import DetailsProduct from './pages/DetailsProduct';
import Favorite from './pages/Favorite';

import { isAuthenticated } from "./services/auth";

const PrivateRoute = ({ children, ...rest }) => {
  let navigate = useNavigate();
  return (
    isAuthenticated() ? children : navigate('/signin')
  );
};

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/detailsproduct/:id" element={<DetailsProduct />} />
      <Route path="/checkout" element={<CheckOut />} />
      <Route path="/favorite" element={<PrivateRoute><Favorite /></PrivateRoute>} />
      <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>
  </Router>
);

export default AppRoutes;