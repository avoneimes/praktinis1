export default function Cart({ cart, setCart }) {
    // Funkcija pašalinti produktą iš krepšelio pagal jo ID
    const removeFromCart = (productId) => {
        setCart(cart.filter((product) => product.id !== productId));
    };

    return (
        <div>
            <h2>Krepšelis</h2>
            {/* Tikrina, ar krepšelis tuščias */}
            {cart.length === 0 ? (
                <p>Krepšelis tuščias</p>
            ) : (
                // Jei krepšelyje yra prekių, jas išveda sąraše
                cart.map((product) => (
                    <div
                        key={product.id}
                        style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}
                    >
                        <span>{product.name} - ${product.price}</span>
                        {/* Mygtukas pašalinti prekę iš krepšelio */}
                        <button onClick={() => removeFromCart(product.id)}>Pašalinti</button>
                    </div>
                ))
            )}
        </div>
    );
}
