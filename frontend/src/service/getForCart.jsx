import { getloginUser } from "../api/auth.api";
import { uncheckGetProduct } from "../api/product.api";
import { getProductfromCart, addProductCart } from '../api/customer.api';

export default async function getForCart() {
    let isAuth = false;
    let cartProducts =[];
    const localCart = JSON.parse(localStorage.getItem('local_cart')) || [];
        await getloginUser()
        .then(res=>{
            isAuth=true;
        })
        .catch(async () =>{
            console.log("i run");
             // User not logged in, fetch products from localStorage
                if (localCart.length > 0) {
                    try {
                        const productPromises = localCart.map(id =>
                            uncheckGetProduct(id).then(res => res.data.product)
                        );
                        cartProducts = await Promise.all(productPromises);
                        console.log("Cart products from localStorage:", cartProducts);
                    } catch (error) {
                        console.error("Error fetching products from localStorage:", error.message);
                    }
                }

                return cartProducts;
        })
    
    

    

    if (!isAuth) {
        // User not logged in, fetch products from localStorage
        if (localCart.length > 0) {
            try {
                const productPromises = localCart.map(id =>
                    uncheckGetProduct(id).then(res => res.data.product)
                );
                cartProducts = await Promise.all(productPromises);
                console.log("Cart products from localStorage:", cartProducts);
            } catch (error) {
                console.error("Error fetching products from localStorage:", error.message);
            }
        }

        return cartProducts;
    }

    // User is logged in
    try {
        const response = await getProductfromCart();
        cartProducts = response.data.product || [];

        if (localCart.length > 0) {
            for (const id of localCart) {
                try {
                    await addProductCart(id);
                } catch (error) {
                    console.error(`Error adding product ${id} to DB cart:`, error.message);
                }
            }
            localStorage.removeItem('cart');

            // OPTIONAL: Refresh the cart after syncing local cart to DB
            const refreshedResponse = await getProductfromCart();
            cartProducts = refreshedResponse.data.product || [];
        }

        console.log("Cart products from DB:", cartProducts);
        return cartProducts;

    } catch (error) {
        console.error("Error fetching cart from server:", error.message);
        return [];
    }
}
