import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const addItemToCartHandler = (item) => {
    let isPresent = false;

    for (var i = 0; i < items.length; i++) {
      if (items[i].id === item.id) {
        isPresent = true;
      }
    }
    const newItem =
      items.length > 0 && isPresent
        ? items.map((data) => {
            if (data.id === item.id) {
              data.quantity = Number(data.quantity) + Number(item.quantity);
            }
            return data;
          })
        : [...items, item];

    const total = newItem.reduce(getSum, 0);

    function getSum(total, newItem) {
      return total + newItem.price * newItem.quantity;
    }
    setTotalAmount(total);
    setItems(newItem);
  };
  const removeItemFromCartHandler = (id) => {
    console.log(id);
    const newItem = items.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    const total = newItem.reduce(getSum, 0);

    function getSum(total, newItem) {
      return total + newItem.price * newItem.quantity;
    }
    setTotalAmount(total);
    setItems(newItem);
  };

  const cartContext = {
    items: items,
    totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
