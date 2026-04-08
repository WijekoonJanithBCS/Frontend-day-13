export function getcart(){
    const cartString = localStorage.getItem("cart");

    if(cartString == null){
        localStorage.setItem("cart", []);
        return [];
    }
    else{
        const cart = JSON.parse(cartString)
        return cart;
    }
}