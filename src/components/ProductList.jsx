import ProductItem from "./ProductItem";

// Sukuriamas produktų masyvas
const products = [
    { id: 1, name: "Telefonas", price: 500 },
    { id: 2, name: "Kompiuteris", price: 1200 },
    { id: 3, name: "Ausinės", price: 80 },
];

export default function ProductList({ cart, setCart }) {
    // Funkcija pridėti produktą į krepšelį
    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    return (
        <div>
            <h2>Produktų sąrašas</h2>
            {/* Kiekvienas produktas paverčiamas ProductItem komponentu */}
            {products.map((product) => (
                <ProductItem key={product.id} product={product} addToCart={addToCart} />
            ))}
        </div>
    );
}
