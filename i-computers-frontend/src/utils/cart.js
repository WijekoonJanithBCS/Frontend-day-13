export function GetCart() {
    const cartString = localStorage.getItem("cart");

    console.log(cartString);
    //""
    if (cartString == null) {
        console.log("cart is empty");
        localStorage.setItem("cart", "[]");
        return [];
    }else{
        console.log("cart found");
        const cart = JSON.parse(cartString)
        return cart;
    }
}
const sampleCart = [
    {
        product: {
            productId: "123456",
            name: "ASUS ROG Strix G15",
            price: 150000,
            image: "https://m.media-amazon.com/images/I/81+N8qQyZL._AC_UY218_.jpg",
        },
        qty: 1,
    },
]

export function addToCart(product, qty) {
    console.log("adding")
    const cart = GetCart();

    console.log(cart);

    const existingProductIndex = cart.findIndex(
        (item) => item.product.productId === product.productId
    );

    if (existingProductIndex === -1) {
        // ✅ Product NOT in cart → add new
        if (qty <= 0) {
            console.error("quantity should be greater than 0");
            return;
        }

        cart.push({
            product: {
                productId: product.productId,
                name: product.name,
                price: product.price,
                //image: product.images?.[0] || null,
                image: product.images?.[0] || product.image || null,
            },
            qty: qty
        });

    } else {
        // ✅ Product exists → update quantity
        const newQty = cart[existingProductIndex].qty + qty;

        if (newQty <= 0) {
            cart.splice(existingProductIndex, 1);
        } else {
            cart[existingProductIndex].qty = newQty;
        }
    }

    localStorage.setItem("cart", JSON.stringify(cart));    
}

export default function getCartTotal(cart){
    let total = 0;

    cart.forEach(
        (cartItem) => {
        total = total+ cartItem.product.price * cartItem.qty;
    });
    return total;
}

