
import { getloginUser } from "../api/auth.api";
import { addProductCart } from "../api/customer.api";

export async function addTocart(id) {
        let isAuth = false;
        await getloginUser()
        .then(res=>{
            isAuth=true;
        })
        .catch(()=>{

        })
        

        if (isAuth) {
            // If user authenticated, add to DB
            const addRes = await addProductCart(id);
            console.log('Added to DB cart:', addRes.data);
        } else {
            // Else, add to localStorage
            let localCart = JSON.parse(localStorage.getItem('local_cart')) || [];
            if (!localCart.includes(id)) {
                localCart.push(id);
                localStorage.setItem('local_cart', JSON.stringify(localCart));
            }
            console.log('Added to LocalStorage cart');
        }
    
}