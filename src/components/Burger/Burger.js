import React from "react";
import classes from "./Burger.css";
import BurgerIngerident from "./BurgerIngerident/BurgerIngerident";

const burger = props => {
  let transformedIngeridents = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, index) => {
        return <BurgerIngerident key={igKey + 1} type={igKey} />;
      });
    })
    .reduce((all, item) => {
      return all.concat(item);
    }, []);

  if (transformedIngeridents.length == 0)
    transformedIngeridents = <p>Please add the ingredients</p>;

  return (
    <div className={classes.Burger}>
      <BurgerIngerident type="bread-top"></BurgerIngerident>
      {transformedIngeridents}
      <BurgerIngerident type="bread-bottom"></BurgerIngerident>
    </div>
  );
};

export default burger;
