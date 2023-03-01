import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
  Button,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import logo from "../../../src/images/Ak.PNG";
import useStyles from "./styles";
import { Link } from "react-router-dom";
const Navbar = ({ items, products }) => {
  const classes = useStyles();

  return (
    <>
      <AppBar color="inherit" position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit">
            <Link to="/">
              <img
                src={logo}
                alt="Ak_Store"
                height="25px"
                className={classes.image}
              />
            </Link>
          </Typography>
          <Typography variant="h8" className={classes.nav}>
            {/* <IconButton gutterBottom className={classes.padd} component={Link} to='/mens'> Mens</IconButton> */}
            <Button component={Link} to='/' className={classes.padd}>All</Button>
            <Button component={Link} to='/mens' className={classes.padd}>Men</Button> 
            <Button className={classes.padd}>Kids</Button>
            <Button className={classes.padd}>Women</Button> 

          </Typography>
          <Typography>
            <div className={classes.grow} />
            <div className={classes.button}>
              <IconButton
                component={Link}
                to="/cart"
                aria-label="Show cart items"
                color="inherit"
              >
                <Badge badgeContent={items} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
