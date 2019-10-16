import React, {Component} from 'react';
import Aux from '../../hoc/Auxilary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'


class BurgerBuilder extends Component {
    // constructor(props){
    //     super(props)
    //     this.state={}

    // }  // another type to add the state inside the constructor

    state = {
        ingredients :{
            sald:0,
            bacon:3,
            cheese:4,
            meat:3
        }
    }

    
        render(){
            return (
                <Aux>
                    <Burger ingredients={this.state.ingredients}></Burger>
                   <BuildControls></BuildControls>
                </Aux>
            );
        }
}



export default BurgerBuilder;