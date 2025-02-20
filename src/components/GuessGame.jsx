// GuessGame.jsx - pagrindinis žaidimo komponentas
import { useState, useEffect } from "react";
import GuessForm from "./GuessForm";
import Message from "./Message";

export default function GuessGame() {
    const [targetNumber, setTargetNumber] = useState(null);
    const [guess, setGuess] = useState("");
    const [attempts, setAttempts] = useState(0);
    const [message, setMessage] = useState("");
    const [previousGuesses, setPreviousGuesses] = useState([]); // Naujas masyvas bandytiems skaičiams

    useEffect(() => {
        setTargetNumber(Math.floor(Math.random() * 100) + 1);
    }, []);

    const handleGuess = () => {
        const num = parseInt(guess, 10);
        if (isNaN(num)) {
            setMessage("Įveskite skaičių!");
            return;
        }
        if (previousGuesses.includes(num)) {
            setMessage("Šį skaičių jau bandei! Pabandyk kitą.");
            return;
        }

        setPreviousGuesses([...previousGuesses, num]); // Pridedame naują spėjimą
        setAttempts(attempts + 1);

        if (num < targetNumber) {
            setMessage("Bandyk didesnį");
        } else if (num > targetNumber) {
            setMessage("Bandyk mažesnį");
        } else {
            setMessage(`Teisingai! Skaičius buvo ${targetNumber}. Bandymų skaičius: ${attempts + 1}`);
        }
        setGuess(""); // Išvalome įvestį po spėjimo
    };

    return (
        <div>
            <h1>Skaičių spėjimo žaidimas</h1>
            <GuessForm guess={guess} setGuess={setGuess} handleGuess={handleGuess} />
            <Message message={message} />

            {/* Rodo visus bandytus skaičius */}
            <div>
                <h3>Jau bandyti skaičiai:</h3>
                <p>{previousGuesses.length > 0 ? previousGuesses.join(", ") : "Dar nebandėte jokių skaičių"}</p>
            </div>
        </div>
    );
}
