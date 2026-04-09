export function GetCart(){
    const cartString = localStorage.getItem("cart");

    if(cartString == null){
        localStorage.setItem("cart", JSON.stringify([]));
        return [];
    }
    else{
        const cart = JSON.parse(cartString)
        return cart;
    }
}
const sampleCart = [
    {
        product:{
            productId : "123456",
            name : "ASUS ROG Strix G15",
            price : 150000,
            image : "https://m.media-amazon.com/images/I/81+N8qQyZL._AC_UY218_.jpg",
        },
        qty: 1,
    },
]
export function addToCart(product, qty){
    const cart = GetCart();

    const existingProductIndex = cart.findIndex(
        (item) => {
            return item.product.productId === product.productId;
        }
    )

    if(existingProductIndex !== -1){
        if(qty <= 0){
            console.error("quantity should be greater than 0");
            return;
        }

        cart.push({
            product : {
                productId : product.productId,
                name : product.name,
                price : product.price,
                image : product.images[0],
            },
            qty: qty
        })
    }
    else{
        const newQty = cart[existingProductIndex].qty + qty;
        if(newQty <= 0){
            cart.splice(existingProductIndex, 1);
        }
        else{
            cart[existingProductIndex].qty = newQty;
        }
    }
    const cartString = JSON.stringify(cart);
    localStorage.setItem("cart", cartString);
}

