export default function Menu({ setView }) {
    return (
        <nav style={{ display: "flex", justifyContent: "center", gap: "20px", marginBottom: "20px" }}>
            <button onClick={() => setView("tasks")}>Užduočių sąrašas</button>
            <button onClick={() => setView("cart")}>Krepšelio sistema</button>
            <button onClick={() => setView("game")}>Skaičių spėjimo žaidimas</button>
        </nav>
    );
}
