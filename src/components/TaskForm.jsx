import { useState } from "react"; //naduojamas useState kuris leidzia saugoti reiksmes kurios gali keistis

export default function TaskForm({ addTask }) {
    const [inputValue, setInputValue] = useState(""); //saugo vartotojo ivesta teksta

    //jeigu vartotojas ivede teksta, iskvieciamas addTask ir isvalomas ivesties laukas
    const handleSubmit = (e) => {
        e.preventDefault(); //neleidzia perkrauti puslapio (nes by default persikrauna po formos pateikimo)
        if (inputValue.trim()) { //trim pasalina tarpus is pradz ir pab, kad negalima butu prideti tuscias uzd
            addTask(inputValue);
            setInputValue("");
        }
    };

    //forma
    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: "10px" }}>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)} //onChange atnaujina inputValue kai vartotojas iveda teksta
                placeholder="Įveskite užduotį" //rodomas pilkas uzrasas kai laukas tuscias
                style={{ padding: "8px", width: "70%", marginRight: "5px" }}
            />
            <button type="submit">Pridėti</button>
        </form>
    );
}
