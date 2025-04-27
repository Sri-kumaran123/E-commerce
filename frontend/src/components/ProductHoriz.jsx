import { useProduct } from "../contextapi/ProductContext";
import styles from "./styles/ProductHoriz.module.css";
import { BadgeDollarSign, ShoppingBag } from "lucide-react";
import { addTocart } from "../service/addToCart";

export function ProductHoriz() {
    const { productList } = useProduct();

    return (
        <div className="py">
           
            <div className={styles.horizontalScroll}>
                {productList.map((product) => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
}

export function ProductCard({ product }) {
    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <img
                    src={`http://localhost:5000/get/image/${product.img}`}
                    alt={product.productName}
                    className={styles.image}
                />
            </div>
            <div className={styles.info}>
                <h3>{product.productName}</h3>
                <p className={styles.price}>
                    <BadgeDollarSign size={16} /> {product.quantity * 100}
                </p>
                <button className={styles.button} onClick={()=>{addTocart(product._id)}}>
                    <ShoppingBag size={16} /> add to Cart
                </button>
            </div>
        </div>
    );
}