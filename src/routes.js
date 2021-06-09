import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";


import Home from './pages/Home';
import About from './pages/About';
import Cart from './pages/Cart';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import CheckOut from './pages/CheckOut';
import DetailsProduct from './pages/DetailsProduct';

import { isAuthenticated } from "./services/auth";
  


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/signin", state: { from: props.location } }} />
      )
    }
  />
);



const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/cart" exact component={Cart} />
      <Route path="/signin" exact component={SignIn} />
      <Route path="/signup" exact component={SignUp} />
      <Route path="/detailsproduct/:id" exact component={DetailsProduct} />
      <PrivateRoute path="/checkout" exact component={CheckOut} />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;