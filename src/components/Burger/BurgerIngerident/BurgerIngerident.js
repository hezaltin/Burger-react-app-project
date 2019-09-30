import React from 'react';
import classes from './BurgerIngerident.css'

const burgerIngerident = (props) => {
    let ingerident = null;

    switch (props.type){
        case('bread-bottom'):
            ingerident = <div className={classes.BreadBottom}></div>;
            break;
        case('bread-top'):
            ingerident = (
                    <div className={classes.BreadTop}>  
                        <div className={classes.Seeds1}></div>
                        <div className={classes.Seeds2}></div>
                    </div>
            );
            break;
        case('meat'):
            ingerident = <div className={classes.Meat}></div>;
            break;
        case('cheese'):
            ingerident = <div className={classes.Cheese}></div>;
            break;
        case('bacon'):
            ingerident = <div className={classes.Bacon}></div>;
            break;
        case('salad'):
            ingerident = <div className={classes.Salad}></div>;
            break;
        default:
            ingerident = null;

    }

    return ingerident;
};


export default burgerIngerident;