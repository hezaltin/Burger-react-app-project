import React from "react";
import Aux from "../../hoc/Auxilary";
import classes from "./Layout.css";
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'


const layout = props => (
  <Aux>
    {/* <div className={classes.Content}>Toolbar, sideDrawer,Backdrop</div> */}
    <Toolbar></Toolbar>
    <SideDrawer></SideDrawer>

    <main className={classes.Content}>{props.children}</main>
  </Aux>
);

export default layout;
