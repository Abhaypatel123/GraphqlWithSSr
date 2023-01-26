import Home from '../pages/Home';
import { Redirect, Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Product from '../pages/Product';


function MainRoute() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/product/:product_id" component={Product} />
      </Switch>
    </>
  );
}

export default MainRoute;
