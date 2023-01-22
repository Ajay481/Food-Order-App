import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartContx = useContext(CartContext);
  const orderItem = () => {
    console.log(cartContx.items);
    props.onClose()
  };

  const cartItemRemoveHandler = (id) => {
    cartContx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    const newItem = { ...item, quantity: 1 };
    cartContx.addItem(newItem);
  };
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartContx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          quantity={item.quantity}
          onRemove={() => cartItemRemoveHandler(item.id)}
          onAdd={() => cartItemAddHandler(item)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{cartContx.totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button} onClick={orderItem}>
          Order
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
