export default function ProductItem({ product, addToCart }) {
    return (
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
            {/* Rodo produkto pavadinimą ir kainą */}
            <span>{product.name} - ${product.price}</span>
            {/* Mygtukas pridėti prekę į krepšelį */}
            <button onClick={() => addToCart(product)}>Pridėti į krepšelį</button>
        </div>
    );
}
