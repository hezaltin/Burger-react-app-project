import React, {Component} from 'react';
import Aux from '../../hoc/Auxilary';
import Burger from '../../components/Burger/Burger'


class BurgerBuilder extends Component {
    // constructor(props){
    //     super(props)
    //     this.state={}

    // }  // another type to add the state inside the constructor

    state = {
        ingeridents :{
            sald:1,
            bacon:1,
            cheese:2,
            meat:2
        }
    }

    
        render(){
            return (
                <Aux>
                    <Burger ingeridents={this.state.ingeridents}></Burger>
                    <div>Build Controls</div>
                </Aux>
            );
        }
}



export default BurgerBuilder;