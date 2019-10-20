import React, { Component } from "react";
import Aux from "../../hoc/Auxilary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

const INGREDIENTS_PRICE = {
  salad: 0.5,
  bacon: 0.4,
  cheese: 1.3,
  meat: 0.7
};
class BurgerBuilder extends Component {
  // constructor(props){
  //     super(props)
  //     this.state={}

  // }  // another type to add the state inside the constructor

  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchasable:false,
    purchasing:false
  };

  updatePurchaseState(ingredients){
      const sum = Object.keys(ingredients).map(igKey=> ingredients[igKey]).reduce((sum,el)=>{return sum+ el},0)

      this.setState({purchasable:sum > 0});
  }

  purchaseHandler = () => {
      this.setState({purchasing:true})
  }

  addIngredientHandler = (type) => {
    //Add Ingerident
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = { ...this.state.ingredients }; // state should be added in an immutable way
    updatedIngredients[type] = updatedCount;
    //Add Price
    const priceAddition = INGREDIENTS_PRICE[type];
    const newPrice = this.state.totalPrice + priceAddition;

    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
  };

  removeIngerident = (type) => {
    //Add Ingerident
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount - 1;
    const updatedIngredients = { ...this.state.ingredients }; // state should be added in an immutable way
    updatedIngredients[type] = updatedCount;
    //Add Price
    const priceDeduction = INGREDIENTS_PRICE[type];
    const newPrice = this.state.totalPrice - priceDeduction;

    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
  };

  render() {
    const diabledInfo = { ...this.state.ingredients };
    for (let key in diabledInfo) {
      diabledInfo[key] = diabledInfo[key] <= 0;
    }
    return (
      <Aux>
        <Modal show={this.state.purchasing}>
            <OrderSummary ingredients={this.state.ingredients}></OrderSummary>
        </Modal>
        <Burger ingredients={this.state.ingredients}></Burger>
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngerident}
          disableInfo={diabledInfo}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
          ordered={this.purchaseHandler}
        ></BuildControls>
      </Aux>
    );
  }
}

export default BurgerBuilder;
