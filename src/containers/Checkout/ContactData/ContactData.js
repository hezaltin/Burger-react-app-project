import React,{Component} from 'react';
import Button from '../../../components/UI/Button/Button'
import classes  from './ContactData.css';


class contactData extends Component {

    state = {
         name:'',
         email:'',
         address:{
             street:'',
             postalCode:''
         }
    }

render(){
    return (
        <div className={classes.ContactData}>
            <h4>Enter your contact data</h4>
            <form>
                <input type="text"className={classes.Input} name="name" placeholder="Your Name"></input>
                <input type="email" className={classes.Input} name="email" placeholder="Your Email"></input>
                <input type="text" className={classes.Input} name="street" placeholder="Your Street"></input>
                <input type="text" className={classes.Input} name="postal" placeholder="Your Postal Code"></input>
            </form>
            <Button btnType="Success"> ORDER </Button>
        </div>
    )
}

}

export default contactData;