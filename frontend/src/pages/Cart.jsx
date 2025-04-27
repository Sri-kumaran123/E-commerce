import { useState, useEffect } from "react";
import getForCart from "../service/getForCart";
import styles from "./styles/Cart.module.css";
import { removeProductFromCart } from "../api/customer.api";
import { createOrder } from "../api/order.api";

export default function Cart() {
  const [products, setProducts] = useState([]);
  const [render, setRender] = useState(false);

  useEffect(() => {
    async function fetchCart() {
      const data = await getForCart();
      setProducts(data);
    }
    fetchCart();
  }, [render]);

  const handleRemove = (id) => {
    removeProductFromCart(id)
    .then(res=>{
        setRender(prev=>!prev);
    })
    // You can also call API to remove from backend here
  };

  const handleCheckout = () => {
    createOrder()
    .then(_=>{

        alert("Proceeding to checkout!");
        setRender(prev=>!prev);
    })
    // You can navigate to checkout page here
  };

  return (
    <div className={styles.cartContainer}>
      <h2>Your Cart</h2>
      <div className={styles.cartGrid}>
        {products.length > 0 ? products.map((item, index) => (
          <div className={styles.cartItem} key={index}>
            <img 
              src={`http://localhost:5000/get/image/${item.img}`} 
              alt={item.productName} 
              className={styles.cartItemImg}
            />
            <h3>{item.productName}</h3>
            <p>{item.desc}</p>
            <p><strong>Category:</strong> {item.category}</p>
            <p><strong>Quantity:</strong> {item.quantity}</p>
            <button 
              className={styles.removeBtn}
              onClick={() => handleRemove(item._id)}
            >
              Remove
            </button>
          </div>
        )) : (
          <p className={styles.emptyCart}>Your cart is empty!</p>
        )}
      </div>

      {products.length > 0 && (
        <div className={styles.checkoutContainer}>
          <button className={styles.checkoutBtn} onClick={handleCheckout}>
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}
