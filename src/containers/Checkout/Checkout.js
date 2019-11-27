import React, { Component } from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import {Route} from 'react-router-dom';
import ContactData from './ContactData/ContactData'

class Checkout extends Component {
  state = {
    ingredients: {
      salad: 1,
      meat: 1,
      cheese: 1,
      bacon: 1
    }
  };

  componentDidMount(){
      const query = new URLSearchParams(this.props.location.search);
      const ingredients ={};
        for(let params of query.entries()){
            //['salad','1']
            ingredients[params[0]] =  +params[1];
        }
        console.log(ingredients)
      this.setState({ingredients:ingredients});
  }

  checkoutCancelHandler = () => {
    this.props.history.goBack();
  }
  checkoutContinueHandler = () => {
    this.props.history.replace("/checkout/contact-data");
  }

  render() {
      console.log(this.props)
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          checkoutCancelled={this.checkoutCancelHandler}
          checkoutContinued={this.checkoutContinueHandler}
        ></CheckoutSummary>
        <Route path={this.props.match.path + '/contact-data'} component={ContactData}></Route>
      </div>
    );
  }
}

export default Checkout;
