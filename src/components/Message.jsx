// {message} yra destruktūrizuotas prop, perduotas kaip funkcijos argumentas
// Message komponentas laukia message vertės iš tėvinio komponento (speliones žaidimas)
export default function Message({ message }) {
    return <p>{message}</p>;
}
