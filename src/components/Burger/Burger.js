import React from 'react'
import classes from './Burger.css';
import BurgerIngerident from './BurgerIngerident/BurgerIngerident'

const burger = (props) =>{
        return (
            <div className={classes.Burger}>
                <BurgerIngerident type="bread-top"></BurgerIngerident>
                <BurgerIngerident type="cheese"></BurgerIngerident>
                <BurgerIngerident type="meat"></BurgerIngerident>
                <BurgerIngerident type="bread-bottom"></BurgerIngerident>

            </div>
        );
};

export default burger;