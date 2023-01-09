import CartIcon from "../Cart/Carticon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  return (
    <button className={classes.button}>
      <div className={classes.icon}>
        <CartIcon />
      </div>
      <div>Your Cart</div>
      <div className={classes.badge}>0</div>
    </button>
  );
};

export default HeaderCartButton;
