import React from "react";
import Aux from "../../hoc/Auxilary";
import classes from "./Layout.css"

const layout = props => (
  <Aux>
    <div className={classes.Content}>Toolbar, sideDrawer,Backdrop</div>
    <main>{props.children}</main>
  </Aux>
);

export default layout;
