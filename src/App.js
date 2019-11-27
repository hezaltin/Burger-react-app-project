import React, { Component } from "react";
import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import CheckoutSummary from "./containers/Checkout/Checkout";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";

class App extends Component {
  // state = {
  //   show : true
  // }

  // componentDidMount(){
  // //   setTimeout(() => {
  // //     this.setState({show:false})
  // // }, 5000);
  // }

  render() {
    return (
      <div>
        <Layout>
          {/* <BurgerBuilder />
            <CheckoutSummary /> */}
          <Switch>
           
            <Route path="/checkout" component={CheckoutSummary}></Route>
            <Route path="/" exact component={BurgerBuilder}></Route>
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
