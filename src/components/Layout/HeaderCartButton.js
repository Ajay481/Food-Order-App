import { useContext } from "react";
import CartIcon from "../Cart/Carticon";
import CartContext from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  // const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
  //   return curNumber + item.amount;
  // }, 0);
  let quantity = 0;
  cartCtx.items.forEach((item) => {
    quantity = quantity + Number(item.quantity);
  });
  return (
    <button className={classes.button} onClick={props.onClick}>
      <div className={classes.icon}>
        <CartIcon />
      </div>
      <div>Your Cart</div>
      <div className={classes.badge}>{quantity}</div>
    </button>
  );
};

export default HeaderCartButton;
