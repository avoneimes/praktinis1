export default function GuessForm({ guess, setGuess, handleGuess }) {
    return (
        <div>
            <input
                type="number"
                value={guess}
                onChange={(e) => setGuess(e.target.value)} // Atnaujina guess reikšmę, kai vartotojas rašo
                placeholder="Įveskite skaičių" // Rodo užuominą vartotojui
            />
            {/* iškviečia handleGuess funkciją (pateikia spėjimą) */}
            <button onClick={handleGuess}>Spėti</button>
        </div>
    );
}
